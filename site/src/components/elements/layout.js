import "./index.css"

import { Footer, Header } from "../elements"

import React from "react"
import styled from "styled-components"

const StyledLayout = styled.div`
  padding: ${props => (props.noPadding ? 0 : `var(--space-sm)`)};
  max-width: ${props => (props.noContainer ? "100%" : `var(--container)`)};
`

const Main = styled.main`
  margin: var(--space-lg) auto;
  min-height: 100vh;
`

export default function Layout({ children, location, noContainer, noPadding }) {
  return (
    //Do a styledLayout here that accepts a padding prop
    <StyledLayout noContainer={noContainer} noPadding={noPadding}>
      <Header location={location} />
      <Main>{children}</Main>
      <Footer location={location} />
    </StyledLayout>
  )
}
