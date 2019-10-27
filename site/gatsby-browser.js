require("prism-themes/themes/prism-atom-dark.css")
const React = require("react")
const ThemeContext = require("./src/components/elements/theme-context").default

exports.wrapPageElement = ({ element }) => {
  return <ThemeContext>{element}</ThemeContext>
}
