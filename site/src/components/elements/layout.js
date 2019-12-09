import React from "react"
import styled from "styled-components"

import { Header, Footer } from "../elements"
import "./index.css"

const Main = styled.main`
  min-height: 100vh;
  margin: 0 auto;
`

export default function Layout({ children, location }) {
  return (
    <>
      <Header location={location} />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}
