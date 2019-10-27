import React from "react"
import styled from "styled-components"

import { Link } from "../styles"
import { useSiteMetadata } from "../hooks"

const StyledHeader = styled.header`
  padding: 0.5rem;
  max-width: var(--container);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  nav {
    display: flex;
  }

  .nav-link {
    margin-right: 2.5rem;
  }
`

export default function Header() {
  const { title } = useSiteMetadata()

  return (
    <StyledHeader>
      <Link to="/" className="title">
        <h3>{title}</h3>
      </Link>
      <nav>
        <Link to="/posts">
          <h3 className="nav-link">Posts</h3>
        </Link>
        <Link to="/projects">
          <h3 className="nav-link">Projects</h3>
        </Link>
        <Link to="/photo">
          <h3 className="nav-link">Photo</h3>
        </Link>
        <Link to="/contact">
          <h3 className="nav-link">Contact</h3>
        </Link>
      </nav>
    </StyledHeader>
  )
}
