const containers = require("remark-containers")

const { ROW, COL, BASE_CLASS } = require("./src/const")
const { getClassNames } = require("./src/get-class-names")

const options = {
  default: true,
  custom: [
    {
      type: "div",
      transform: function(node, config) {
        if (config.indexOf(`${ROW}`) === 0) {
          node.data.hProperties = {
            className: `${BASE_CLASS} ${ROW}`,
          }
        }

        if (config.indexOf(`${COL}`) === 0) {
          node.data.hProperties = {
            className: `${BASE_CLASS} ${COL} ${getClassNames(config)}`,
          }
        }
      },
    },
  ],
}

module.exports.setParserPlugins = () => [[containers, options]]
