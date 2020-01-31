import React from "react"
import styled from "styled-components"

import { Button, Link } from "../styles"
import { useSiteMetadata } from "../hooks"

const StyledFooter = styled.div`
  padding: var(--space-sm);

  a {
    font-weight: bolder;
  }
`

export default function Footer() {
  const { title } = useSiteMetadata()

  return (
    <StyledFooter>
      <Link className="nav-link site-title" to="/">
        {title}
      </Link>
    </StyledFooter>
  )
}
