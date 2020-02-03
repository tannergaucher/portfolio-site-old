import { Button, Link } from "../styles"

import React from "react"
import styled from "styled-components"
import { useSiteMetadata } from "../hooks"

export default function Header({ location }) {
  const isIndexPage = location.pathname === "/"

  return isIndexPage ? <IndexHeader /> : <PlainHeader />
}

const StyledIndexHeader = styled.header`
  max-width: var(--container);
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .site-title {
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: var(--caps-letter-spacing);
  }

  .site-description {
    font-weight: 500;
    letter-spacing: var(--paragraph-letter-spacing);
  }

  .nav-link {
    font-weight: bolder;
  }
`

function IndexHeader() {
  const { title, description, social } = useSiteMetadata()

  return (
    <StyledIndexHeader>
      <h1 className="site-title">{title}</h1>
      <h2 className="site-description">{description}</h2>

      <nav>
        <a
          className="nav-link github"
          href={social.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          className="nav-link linkedin"
          href={social.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>LinkedIn</span>
        </a>
      </nav>
      <br />
    </StyledIndexHeader>
  )
}

const StyledPlainHeader = styled.header`
  .site-title {
    text-transform: uppercase;
    letter-spacing: var(--caps-letter-spacing);
  }
`

function PlainHeader() {
  const { title } = useSiteMetadata()

  return (
    <StyledPlainHeader>
      <Link to="/" none="true">
        <small className="site-title">{title}</small>
      </Link>
    </StyledPlainHeader>
  )
}
