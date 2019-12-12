const containers = require("remark-containers")

const {
  createColClasses,
  ROW,
  COL,
  BASE_CLASS,
} = require("./src/create-col-classes")

module.exports = ({ markdownAST }) => markdownAST

const options = {
  default: true,
  custom: [
    {
      type: "div",
      transform: function(node, config, tokenize) {
        if (config.indexOf(`${ROW}`) === 0) {
          node.data.hProperties = {
            className: `${BASE_CLASS} ${ROW}`,
          }
        }

        if (config.indexOf(`${COL}`) === 0) {
          node.data.hProperties = {
            className: `${BASE_CLASS} ${COL} ${createColClasses(COL, config)}`,
          }
        }
      },
    },
  ],
}

module.exports.setParserPlugins = () => [[containers, options]]
