import React, { useContext } from "react"
import { Button, Heading } from "rebass"

import { ThemeContext, SetThemeContext } from "../elements"

export default function ThemeButton() {
  const theme = useContext(ThemeContext)
  const setTheme = useContext(SetThemeContext)

  return (
    <Button
      bg="inherit"
      color="inherit"
      onClick={() => {
        document.body.classList.remove(theme)
        const toggledTheme = theme === "dark" ? "light" : "dark"
        localStorage.setItem("theme", toggledTheme)
        setTheme(toggledTheme)
      }}
    >
      <Heading fontWeight="400" fontSize={[3]} fontFamily="var(--sans)">
        {theme === "dark" ? "Light" : "Dark"}
      </Heading>
    </Button>
  )
}
