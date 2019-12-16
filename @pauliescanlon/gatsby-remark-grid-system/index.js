const containers = require("remark-containers")

const {
  createColClassNames,
  ROW,
  COL,
  BASE_CLASS,
} = require("./src/create-col-class-names")

module.exports = ({ markdownAST }) => markdownAST

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
            className: `${BASE_CLASS} ${COL} ${createColClassNames(
              COL,
              config
            )}`,
          }
        }
      },
    },
  ],
}

module.exports.setParserPlugins = () => [[containers, options]]
