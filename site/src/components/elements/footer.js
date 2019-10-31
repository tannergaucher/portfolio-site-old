import React from "react"
import styled from "styled-components"

import { Link } from "../styles"
import { useSiteMetadata } from "../hooks"

const StyledFooter = styled.div`
  padding: 0 0.5rem 0 0.5rem;

  .container {
    max-width: var(--container);
    margin: 0 auto;
  }

  .site-title {
    font-weight: 400;
  }
`

export default function Footer() {
  const { title } = useSiteMetadata()

  return (
    <StyledFooter>
      <div className="container">
        <Link to="/">
          <h3 className="site-title">{title}</h3>
        </Link>
      </div>
    </StyledFooter>
  )
}
