import { splitProps, type Component, type ComponentProps, type JSX } from 'solid-js'

interface Props extends ComponentProps<'svg'> {
  /**
   * This is the path of the SVG
   */
  path: {
    path: JSX.Element
    outline?: boolean
    mini?: boolean
    title?: string
  }
}

/**
 * The Icon helper is just a SVG wrapper that can take any attributes
 * an SVG element can take plus a special props named `path` that represent
 * a function returning all the path(s) to insert within the SVG element.
 *
 * It will take the parent CSS `color` value as fill/stroke depending on
 * whether it's imported from `outline`, `solid` or `solid-mini`.
 *
 * @example
 * ```tsx
 * import { arrowLeft } from 'solid-heroicons/outline'
 * import { arrowRight } from 'solid-heroicons/solid'
 * import { arrowDown } from 'solid-heroicons/solid-mini'
 *
 * const icon = <Icon path={arrowLeft} class="text-gray-900 h-6" />
 * const icon2 = <Icon path={arrowRight} class="text-gray-900 h-6" />
 * const icon3 = <Icon path={arrowDown} class="text-gray-900 h-6" />
 * ```
 */
export const Icon: Component<Props> = (props) => {
  const [internal, external] = splitProps(props, ['path'])

  return (
    <svg
      viewBox={internal.path.mini ? '0 0 20 20' : '0 0 24 24'}
      fill={internal.path.outline ? 'none' : 'currentColor'}
      stroke={internal.path.outline ? 'currentColor' : 'none'}
      stroke-width={internal.path.outline ? 1.5 : undefined}
      {...external}
    >
      <title>{internal.path.title}</title>
      {internal.path.path}
    </svg>
  )
}
