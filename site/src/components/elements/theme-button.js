import React, { useContext } from "react"

import { Button } from "../styles"
import { ThemeContext } from "../elements"

export default function ThemeButton() {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <Button
      onClick={() => {
        document.body.classList.remove(theme)
        const toggledTheme = theme === "dark" ? "light" : "dark"
        setTheme(toggledTheme)
        localStorage.setItem("theme", toggledTheme)
      }}
    >
      <h3>{theme === "dark" ? "Light" : "Dark"}</h3>
    </Button>
  )
}
