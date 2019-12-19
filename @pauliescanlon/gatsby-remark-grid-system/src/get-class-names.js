const { classPrefixes, COL } = require("./const")

/** getClassNames splits the config by pipe "|" and returns something like col-1 or col-6 depending on what's been passed from markdown */

const getClassNames = config => {
  const configArray = config
    .split(`${COL} `)
    .join("")
    .split("|")

  return [configArray[0], ...configArray]
    .map((col, index) => `${COL}-${classPrefixes[index]}${col}`)
    .join(" ")
}

module.exports = {
  getClassNames,
}
