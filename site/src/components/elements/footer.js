import React from "react"
import styled from "styled-components"

import { Link } from "../styles"
import { useSiteMetadata } from "../hooks"

const StyledFooter = styled.div`
  padding: var(--space-sm);

  .site-title {
    font-weight: 900;
  }
`

export default function Footer() {
  const { title } = useSiteMetadata()

  return (
    <StyledFooter>
      <Link to="/" none inherit>
        <small className="site-title">{title}</small>
      </Link>
    </StyledFooter>
  )
}
