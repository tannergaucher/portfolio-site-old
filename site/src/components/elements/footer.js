import { Button, Link } from "../styles"

import React from "react"
import styled from "styled-components"
import { useSiteMetadata } from "../hooks"

const StyledFooter = styled.div`
  padding: var(--space-sm);
`

export default function Footer({ location }) {
  const isIndexPage = location.pathname === "/"

  const { title } = useSiteMetadata()

  return isIndexPage ? null : (
    <StyledFooter>
      <Link to="/" none="true">
        <h4 className="site-title">{title}</h4>
      </Link>
    </StyledFooter>
  )
}
