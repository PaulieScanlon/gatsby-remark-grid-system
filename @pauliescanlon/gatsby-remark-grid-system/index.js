const visit = require("unist-util-visit")

const { createGrid } = require("./utils/create-grid")

const VISITOR = "code"

module.exports = ({ markdownAST }, pluginOptions) => {
  const { breakpoints, gutterWidth } = pluginOptions

  visit(markdownAST, `${VISITOR}`, node => {
    let html = null
    console.log("node: ", node)
    if (node.type === `${VISITOR}`) {
      html = createGrid(node)
    } else {
      return
    }

    node.type = "html"
    node.children = undefined
    node.value = html
  })

  return markdownAST
}
