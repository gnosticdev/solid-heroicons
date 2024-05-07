import dd from 'dedent'
import degit from 'degit'
import { outputFile, readFile, readdir, remove, removeSync } from 'fs-extra'
import { join, parse } from 'node:path'
import { rollup } from 'rollup'
import { camelCase } from 'change-case'
import { babel } from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'

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
	const [solidGit, solidMiniGit, outlineGit] = [
		SOLID_SRC,
		SOLID_MINI_SRC,
		OUTLINE_SRC,
	].map((repo) => degit(repo, { cache: false, verbose: true, force: true }))

	await solidGit.clone(SOLID_DIST)
	await solidMiniGit.clone(SOLID_MINI_DIST)
	await outlineGit.clone(OUTLINE_DIST)

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

type GenerateProps = {
	path: string
	name: string
	outline: boolean
	mini: boolean
}

async function generateIcons({ path, name, outline, mini }: GenerateProps) {
	const icons = await readdir(path)
	const exportedIcons: string[] = []
	const exportedTypes: string[] = ['import type { JSX } from "solid-js";', '']

	for (const icon of icons) {
		const iconName = camelCase(parse(icon).name)
		const iconSVG = await readFile(join(path, icon), { encoding: 'utf-8' })

		// Clean the SVG markup
		const cleanedSVG = iconSVG
			.split('\n')
			.filter(Boolean)
			.map((path) => path.replace(/fill="(#\w+)"/g, 'fill="transparent"'))
		cleanedSVG.shift()
		cleanedSVG.pop()

		const code = cleanedSVG.join(' ').replace(/\s{2,}/g, '')
		const iconPathsStr = dd`export const ${iconName} = { path: () => <>${code}</>, outline: ${outline}, mini: ${mini} };`
		const iconTypeStr = dd`export declare const ${iconName}: { path: JSX.Element; outline: boolean; mini: boolean; };`
		exportedIcons.push(iconPathsStr)
		exportedTypes.push(iconTypeStr)
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
