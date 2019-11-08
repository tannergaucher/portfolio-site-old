import React from "react"
import styled from "styled-components"

import { ThemeButton } from "../elements"
import { Link } from "../styles"
import { useSiteMetadata } from "../hooks"

const StyledHeader = styled.header`
  max-width: var(--container);
  margin: 5rem auto;

  .site-title {
    font-weight: 400;
    margin-top: 0;
    margin-bottom: 0;
  }

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

  @media (max-width: 768px) {
    margin: 1rem auto;
  }
`

export default function Header() {
  const { title } = useSiteMetadata()

  return (
    <StyledHeader>
      <nav>
        <Link to="/" className="title" none inherit>
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
