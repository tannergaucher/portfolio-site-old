import React from "react"
import styled from "styled-components"
import {} from "@reach/router"

import { Link } from "../styles"
import { useSiteMetadata } from "../hooks"

const StyledHeader = styled.header`
  padding: 0.5rem;
  max-width: var(--container);
  margin: 0 auto;

  .site-title {
    font-weight: 400;
  }

  .nav-link {
    margin-right: 2.5rem;
    margin-top: 0;
    font-weight: 400;
  }

  .title-theme {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  nav {
    display: flex;
  }
`

export default function Header() {
  const { title } = useSiteMetadata()

  return (
    <StyledHeader>
      <div className="title-theme">
        <Link to="/" className="title">
          <h3 className="site-title">{title}</h3>
        </Link>
      </div>
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
