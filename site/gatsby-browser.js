require("prism-themes/themes/prism-atom-dark.css")
const React = require("react")
const Layout = require("./src/components/elements/layout").default
const ThemeContext = require("./src/components/elements/theme-context").default

exports.wrapPageElement = ({ element, props }) => {
  return (
    <ThemeContext>
      {/* <Layout {...props}> */}
      {element}
      {/* </Layout> */}
    </ThemeContext>
  )
}
