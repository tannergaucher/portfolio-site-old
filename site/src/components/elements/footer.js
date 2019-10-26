import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { useSiteMetadata } from "../hooks"

const StyledFooter = styled.div`
  padding: 0 0.5rem 0 0.5rem;

  .container {
    max-width: var(--container);
    margin: 0 auto;
  }
`

export default function Footer() {
  const { title } = useSiteMetadata()

  return (
    <StyledFooter>
      <div className="container">
        <Link to="/" style={{ color: `inherit`, textDecoration: `none` }}>
          <h3 className="site-title">{title}</h3>
        </Link>
      </div>
    </StyledFooter>
  )
}
