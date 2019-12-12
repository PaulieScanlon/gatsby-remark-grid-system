const classPrefixes = ["", "sm-", "md-", "lg-", "xl-"]

const ROW = "row"
const COL = "col"
const BASE_CLASS = "gatsby-remark-grid-system"

const createColClasses = (name, config) => {
  const configArray = config
    .split(`${name} `)
    .join("")
    .split("|")

  return [configArray[0], ...configArray]
    .map((col, index) => `${COL}-${classPrefixes[index]}${col}`)
    .join(" ")
}

module.exports = {
  createColClasses,
  ROW,
  COL,
  BASE_CLASS,
}
