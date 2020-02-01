import { Button, Link } from "../styles"

import React from "react"
import styled from "styled-components"
import { useSiteMetadata } from "../hooks"

export default function Header({ location }) {
  const isIndexPage = location.pathname === "/"

  return isIndexPage ? <IndexHeader /> : <PlainHeader />
}

const StyledIndexHeader = styled.header`
  padding: 0 var(--space-sm);
  max-width: var(--container);
  margin: 0 auto var(--space-xl) auto;

  .site-title {
    font-weight: 900;
  }

  .site-description {
  }
`

function IndexHeader() {
  const { title, description, social } = useSiteMetadata()

  return (
    <StyledIndexHeader>
      <h1 className="site-title">{title}</h1>
      <p className="site-description">{description}</p>
      <nav>
        <a
          className="nav-link"
          href={social.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          className="nav-link"
          href={social.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>LinkedIn</span>
        </a>
      </nav>
    </StyledIndexHeader>
  )
}

const StyledPlainHeader = styled.header`
  padding: var(--space-sm);

  .site-title {
    color: var(--text-color);
  }
`

function PlainHeader() {
  const { title } = useSiteMetadata()

  return (
    <StyledPlainHeader>
      <Link to="/">
        <small className="site-title">{title}</small>
      </Link>
    </StyledPlainHeader>
  )
}
