import React, { useState, useLayoutEffect, createContext } from "react"

export default function UserThemeContext({ children }) {
  const [theme, setTheme] = useState("")
  // Because useEffect results in flash of unstyled content.
  useLayoutEffect(() => {
    const userTheme = localStorage.getItem("theme")
    setTheme(userTheme)
    document.body.classList.add(userTheme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

const ThemeContext = createContext()

export { ThemeContext }
