const classPrefixes = ["", "sm-", "md-", "lg-", "xl-"]

const ROW = "row"
const COL = "col"
const BASE_CLASS = "gatsby-remark-grid-system"

const defaultPadding = 16
const defaultBreakpoints = [576, 768, 992, 1200]

// https://github.com/twbs/bootstrap/blob/master/dist/css/bootstrap-grid.css
const colWidths = [
  {
    name: 1,
    percent: 8.333333,
  },
  {
    name: 2,
    percent: 16.666667,
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

module.exports = {
  classPrefixes,
  ROW,
  COL,
  BASE_CLASS,
  defaultPadding,
  defaultBreakpoints,
  colWidths,
}
