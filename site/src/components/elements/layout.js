import React from "react"
import styled from "styled-components"

import { Header, Footer } from "../elements"
import "./index.css"

const Main = styled.main`
  min-height: 100vh;
  max-width: var(--container);
  margin: 0 auto;
`

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}
