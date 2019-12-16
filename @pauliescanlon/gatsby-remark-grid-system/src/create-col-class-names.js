const { classPrefixes, ROW, COL, BASE_CLASS } = require("./const")

const createColClassNames = (name, config) => {
  const configArray = config
    .split(`${name} `)
    .join("")
    .split("|")

  return [configArray[0], ...configArray]
    .map((col, index) => `${COL}-${classPrefixes[index]}${col}`)
    .join(" ")
}

module.exports = {
  createColClassNames,
  ROW,
  COL,
  BASE_CLASS,
}
