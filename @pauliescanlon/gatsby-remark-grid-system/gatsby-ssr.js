const React = require("react")
const { createStyleSheet } = require("./src/create-style-sheet")
const { BASE_CLASS } = require("./src/const")

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  const { breakpoints, padding, debug } = pluginOptions

  return setHeadComponents([
    <style key={`${BASE_CLASS}`} className={`${BASE_CLASS}`} type="text/css">
      {`${createStyleSheet(breakpoints, padding, debug)}`}
    </style>,
  ])
}
