import "./index.css"

import { Footer, Header } from "."

import React from "react"

export default function Layout({ children, location }) {
  return (
    <>
      <Header location={location} />
      <main className="main"> {children}</main>
      <Footer location={location} />
    </>
  )
}
