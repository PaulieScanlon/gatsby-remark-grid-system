const { classPrefixes, COL, defaultPadding } = require("./const")

// https://github.com/twbs/bootstrap/blob/master/dist/css/bootstrap-grid.css
const colWidths = [
  {
    name: 1,
    percent: 8.333333,
  },
  {
    name: 2,
    percent: 8.333333,
  },
  {
    name: 3,
    percent: 25,
  },
  {
    name: 4,
    percent: 33.333333,
  },
  {
    name: 5,
    percent: 41.666667,
  },
  {
    name: 6,
    percent: 50,
  },
  {
    name: 7,
    percent: 58.333333,
  },
  {
    name: 8,
    percent: 66.666667,
  },
  {
    name: 9,
    percent: 75,
  },
  {
    name: 10,
    percent: 83.333333,
  },
  {
    name: 11,
    percent: 91.666667,
  },
  {
    name: 12,
    percent: 100,
  },
]

const createColClasses = (breakpoints, padding, debug) => {
  console.log("breakpoints: ", breakpoints)
  console.log("padding: ", padding)
  console.log("debug: ", debug ? "true" : "false")

  if (!breakpoints || !breakpoints.length || breakpoints.length > 4) return

  const gridPadding = padding || defaultPadding
  const gridDebug = debug ? `outline: 1px solid rebeccapurple; ` : ""

  const defaultRow = [
    // `.row { display: flex; flex-wrap: wrap; margin-right: -${gridPadding}px; margin-left: -${gridPadding}px; box-sizing: border-box; }`,
    `.row { display: flex; flex-wrap: wrap; box-sizing: border-box; }`,
  ]

  const defaultCol = [
    `.col { flex-basis: 0; flex-grow: 1; max-width: 100%; ${gridDebug} box-sizing: border-box; }`,
  ]

  const colClasses = [].concat(0, ...breakpoints).map((_, breakpointIndex) =>
    colWidths.map((_, index) => {
      if (breakpointIndex === 0) {
        return `.${COL}-${classPrefixes[breakpointIndex]}${colWidths[index].name} { position: relative; width: 100%; padding-left: ${gridPadding}px; padding-right: ${gridPadding}px; }`
      } else {
        return `.${COL}-${classPrefixes[breakpointIndex]}${colWidths[index].name} { max-width: ${colWidths[index].percent}%; flex: 0 0 ${colWidths[index].percent}%; } `
      }
    })
  )

  const mediaQueries = breakpoints.map(
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

  // console.log(JSON.stringify(flat, null, 2))

  return flat
}

module.exports = {
  createColClasses,
}
