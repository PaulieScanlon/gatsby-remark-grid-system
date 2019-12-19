const {
  COL,
  classPrefixes,
  colWidths,
  defaultPadding,
  defaultBreakpoints,
} = require("./const")

/** createStyleSheet creates all the css and media quries determined by either the default breakpoints or plugins options breakpoints*/

const createStyleSheet = (breakpoints, padding, debug) => {
  if (breakpoints && breakpoints.length > 4) return

  const _breakpoints = breakpoints || defaultBreakpoints
  const _padding = padding || defaultPadding
  const _debug = debug ? `outline: 1px solid rebeccapurple; ` : ""

  const defaultRow = [
    `.row { display: flex; flex-wrap: wrap; margin-right: -${_padding}px; margin-left: -${_padding}px; box-sizing: border-box; }`,
  ]

  const defaultCol = [
    `.col { flex-basis: 0; flex-grow: 1; max-width: 100%; ${_debug} box-sizing: border-box; }`,
  ]

  const colClasses = [].concat(0, ..._breakpoints).map((_, breakpointIndex) =>
    colWidths.map((_, index) => {
      if (breakpointIndex === 0) {
        return `.${COL}-${classPrefixes[breakpointIndex]}${colWidths[index].name} { position: relative; width: 100%; padding-left: ${_padding}px; padding-right: ${_padding}px; }`
      } else {
        return `.${COL}-${classPrefixes[breakpointIndex]}${colWidths[index].name} { max-width: ${colWidths[index].percent}%; flex: 0 0 ${colWidths[index].percent}%; } `
      }
    })
  )

  const mediaQueries = _breakpoints.map(
    (breakpoint, index) =>
      `@media (min-width: ${breakpoint}px) { ${colClasses[index + 1].join(
        ""
      )} }`
  )

  const flat = []
    .concat(
      ...defaultRow,
      ...defaultCol,
      // reverse the colClasses array so default col-n is the last one added to the css
      ...colClasses.reverse(),
      ...mediaQueries
    )
    .join("")

  return flat
}

module.exports = {
  createStyleSheet,
}
