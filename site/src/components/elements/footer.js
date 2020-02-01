import { Button, Link } from "../styles"

import React from "react"
import styled from "styled-components"
import { useSiteMetadata } from "../hooks"

const StyledFooter = styled.div`
  padding: var(--space-sm);

  .site-title {
    color: var(--text-color);
  }
`

export default function Footer({ location }) {
  const isIndexPage = location.pathname === "/"

  const { title } = useSiteMetadata()

  return isIndexPage ? null : (
    <StyledFooter>
      <Link to="/" none="">
        <small className="site-title">{title}</small>
      </Link>
    </StyledFooter>
  )
}
