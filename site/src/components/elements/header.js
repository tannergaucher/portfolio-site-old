import React from "react"
import styled from "styled-components"

import { ThemeButton } from "../elements"
import { Link } from "../styles"
import { useSiteMetadata } from "../hooks"

const StyledHeader = styled.header`
  padding: 0.5rem;
  max-width: var(--container);
  margin: 0 auto;

  .site-title {
    font-weight: 400;
    margin-top: 1rem;
    margin-bottom: 0;
  }

  .nav-link {
    margin-right: 2rem;
    margin-top: 0;
    font-weight: 400;
  }

  nav {
    display: flex;
    justify-content: space-between;
  }
`

export default function Header() {
  const { title } = useSiteMetadata()

  return (
    <StyledHeader>
      <nav>
        <Link to="/" className="title" none>
          <h4 className="site-title">{title}</h4>
        </Link>
        {/* <Link to="/posts">
          <h4 className="nav-link">Posts</h4>
        </Link>
        <Link to="/projects">
          <h4 className="nav-link">Projects</h4>
        </Link>
        <Link to="/photo">
          <h4 className="nav-link">Photo</h4>
        </Link>
        <Link to="/contact">
          <h4 className="nav-link">Contact</h4>
        </Link> */}
        <ThemeButton />
      </nav>
    </StyledHeader>
  )
}
