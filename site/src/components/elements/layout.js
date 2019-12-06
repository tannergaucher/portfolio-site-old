import React from "react"
import styled from "styled-components"

import { Header, Footer } from "../elements"
import "./index.css"

const Main = styled.main`
  min-height: 100vh;
  max-width: var(--container);
  margin: 0 auto;
`

export default function Layout({ children, location }) {
  console.log(location)

  return (
    <>
      <Header location={location} />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}
