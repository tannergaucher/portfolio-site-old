import React from "react"
import styled from "styled-components"

import { Header, Footer } from "../elements"
import "./index.css"

const Main = styled.main`
  margin: 0 auto;
  padding: 0 var(--space-sm);
  min-height: 100vh;
  max-width: var(--container);
`

export default function Layout({ children, location }) {
  return (
    <>
      <Header location={location} />
      <Main>{children}</Main>
      <Footer location={location} />
    </>
  )
}
