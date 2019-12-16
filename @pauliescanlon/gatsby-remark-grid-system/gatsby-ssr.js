const React = require("react")
const { createColClasses } = require("./src/create-col-classes")
const { BASE_CLASS } = require("./src/const")

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  const { breakpoints, padding, debug } = pluginOptions

  return setHeadComponents([
    <style key={`${BASE_CLASS}`} className={`${BASE_CLASS}`} type="text/css">
      {`${createColClasses(breakpoints, padding, debug)}`}
    </style>,
  ])
}
