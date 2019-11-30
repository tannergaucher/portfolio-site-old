import React from "react"
import styled from "styled-components"

import { ThemeButton } from "../elements"
import { Link } from "../styles"
import { useSiteMetadata } from "../hooks"

const StyledHeader = styled.header`
  max-width: var(--container);
  margin: 0 auto;

  .nav-link {
    margin-right: 2rem;
    margin-top: 0;
    font-weight: 400;
  }

  nav {
    padding: 0 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export default function Header() {
  const { title } = useSiteMetadata()

  return (
    <StyledHeader>
      <nav>
        <Link to="/" none inherit>
          <h4 className="site-title">{title}</h4>
        </Link>
        <ThemeButton />
      </nav>
    </StyledHeader>
  )
}
