import React, { useContext } from "react"

import { Button } from "../styles"
import { ThemeContext } from "../context/theme-context"

export default function ThemeButton() {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <Button
      style={{
        border: `none`,
      }}
      onClick={() => {
        document.body.classList.remove(theme)
        const toggledTheme = theme === "dark" ? "light" : "dark"
        setTheme(toggledTheme)
        localStorage.setItem("theme", toggledTheme)
      }}
    >
      {theme === "dark" ? "Light" : "Dark"}
    </Button>
  )
}
