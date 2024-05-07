import { babel } from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { camelCase, capitalCase } from 'change-case'
import dd from 'dedent'
import degit from 'degit'

import { outputFile, readFile, readdir, remove, removeSync } from 'fs-extra'
import { join, parse } from 'node:path'
import { rollup } from 'rollup'

import packageJSON from '../package.json'

const TMP = join(process.cwd(), 'tmp')

const SOLID_SRC = 'tailwindlabs/heroicons/optimized/24/solid'
const SOLID_DIST = join(TMP, 'solid/24')

const SOLID_MINI_SRC = 'tailwindlabs/heroicons/optimized/20/solid'
const SOLID_MINI_DIST = join(TMP, 'solid/20')

const OUTLINE_SRC = 'tailwindlabs/heroicons/optimized/24/outline'
const OUTLINE_DIST = join(TMP, 'outline/24')

const LUCIDE_SRC = 'lucide-icons/lucide/icons'
const LUCIDE_DIST = join(TMP, 'lucide')

// Start the whole machinery
main().catch((e) => {
	console.error(e)
	process.exit(1)
})

async function main() {
	// Remove previous artifact
	removeSync(SOLID_DIST)
	removeSync(SOLID_MINI_DIST)
	removeSync(OUTLINE_DIST)
	removeSync(LUCIDE_DIST)

	// Clone the original SVG icons from the repo.
	const [solidGit, solidMiniGit, outlineGit, lucideGit] = [
		SOLID_SRC,
		SOLID_MINI_SRC,
		OUTLINE_SRC,
		LUCIDE_SRC,
	].map((repo) => degit(repo, { cache: false, verbose: true, force: true }))

	await solidGit.clone(SOLID_DIST)
	await solidMiniGit.clone(SOLID_MINI_DIST)
	await outlineGit.clone(OUTLINE_DIST)
	await lucideGit.clone(LUCIDE_DIST)

	// Generate the icons in the proper folder
	await generateIcons({
		path: SOLID_DIST,
		name: 'solid',
		outline: false,
		mini: false,
	})
	await generateIcons({
		path: SOLID_MINI_DIST,
		name: 'solid-mini',
		outline: false,
		mini: true,
	})
	await generateIcons({
		path: OUTLINE_DIST,
		name: 'outline',
		outline: true,
		mini: false,
	})
	await generateIcons({
		path: LUCIDE_DIST,
		name: 'lucide',
		outline: false,
		mini: false,
	})

	// Remove temporary git clones folder
	await remove(TMP)
}

type GenerateProps<TName = 'solid' | 'outline' | 'solid-mini' | 'lucide'> = {
	path: string
	name: TName
	outline: boolean
	mini: boolean
}

/**
 * A running list of reserved keywords that will throw an error when used as a variable name.
 */
const changeNameMap = {
	delete: 'deleteIcon',
	import: 'importIcon',
	package: 'packageIcon',
} as const

async function generateIcons({ path, name, outline, mini }: GenerateProps) {
	// make sure file ends with .svg bc lucide repo has .json files mixed in.
	const icons = Array.from(await readdir(path)).filter((file) =>
		file.endsWith('.svg'),
	)
	const exportedIcons: string[] = []
	const exportedTypes: string[] = [
		'/** @jsxImportSource solid-js */\n',
		'',
		'import type { JSX } from "solid-js";',
		'',
	]

	for (const icon of icons) {
		let iconName = camelCase(parse(icon).name)
		if (Object.keys(changeNameMap).includes(iconName)) {
			iconName = changeNameMap[iconName]
		}
		const iconTitle = capitalCase(parse(icon).name)
		const iconSVG = await readFile(join(path, icon), { encoding: 'utf-8' })

		// Clean the SVG markup and remove the SVG tags
		const svgContent = iconSVG
			.replace(/<\/?svg[^>]*>/g, '') // Remove all SVG tags
			.trim()

		// Ensure all paths are wrapped in a single fragment
		const iconComponent = dd(
			`export const ${iconName} = { path: () => (<>${svgContent}</>), outline: ${outline}, mini: ${mini}, title: '${iconTitle}' };`,
		)

		exportedIcons.push(iconComponent)
		exportedTypes.push(
			dd(
				`export declare const ${iconName}: { path: JSX.Element | JSX.Element[]; outline: boolean; mini: boolean; title?: string };`,
			),
		)
	}

	const exportedIconsStr = exportedIcons.join('\n')
	const exportedTypesStr = exportedTypes.join('\n')
	await outputFile(join(process.cwd(), name, 'index.jsx'), exportedIconsStr, {
		encoding: 'utf-8',
	})
	await outputFile(join(process.cwd(), name, 'index.d.ts'), exportedTypesStr, {
		encoding: 'utf-8',
	})
	await outputFile(
		join(process.cwd(), name, 'package.json'),
		dd`
      {
        "name": "${packageJSON.name}/${name}",
				"type": "module",
        "module": "browser/index.js",
        "main": "browser/index.js",
        "types": "index.d.ts",
				"peerDependencies": {
					"solid-js": "${packageJSON.peerDependencies['solid-js']}"
				},
				"dependencies": {
					"solid-js": "${packageJSON.dependencies['solid-js']}"
				},
				"exports": {
					".": {
            "types": "./index.d.ts",
						"solid": "./index.jsx",
					  "node": "./server/index.js",
					  "default": "./browser/index.js"
					}
				},
        "sideEffects": false
      }`,
	)

	const extensions = ['.js', '.ts', '.jsx', '.tsx']

	const build = (ssr = false) =>
		rollup({
			input: join(process.cwd(), name, 'index.jsx'),
			external: ['solid-js', 'solid-js/web', 'solid-js/store'],
			plugins: [
				babel({
					extensions,
					babelHelpers: 'bundled',
					presets: [
						['babel-preset-solid', { generate: ssr ? 'ssr' : 'dom' }],
						['@babel/preset-env', { bugfixes: true, targets: 'last 2 years' }],
					],
				}),
				nodeResolve({ extensions }),
			],
		})

	const browser = join(process.cwd(), name, 'browser')
	const server = join(process.cwd(), name, 'server')

	const ssr = await build(true)
	ssr.write({
		file: join(server, 'index.js'),
		format: 'esm',
	})

	const noSsr = await build(false)
	noSsr.write({
		file: join(browser, 'index.js'),
		format: 'esm',
	})
}
