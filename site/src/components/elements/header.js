import React from "react"
import styled from "styled-components"

import { Link, Button } from "../styles"
import { useSiteMetadata } from "../hooks"

export default function Header({ location }) {
  const isIndexPage = location.pathname === "/"

  return isIndexPage ? <IndexHeader /> : <PlainHeader />
}

const StyledIndexHeader = styled.header`
  padding: var(--space-sm);
  max-width: var(--container);
  margin: 0 auto;
  margin-top: var(--space-xl);

  .site-title {
    font-size: var(--text-lg);
  }

  .site-description {
    color: var(--grey);
    font-weight: lighter;
    margin-right: var(--space-sm);
    font-size: var(--text-md);
  }

  a {
    text-decoration: none;
    margin-right: var(--space-md);
    font-size: var(--text-sm);
  }

  @media (max-width: 600px) {
    margin-top: var(--space-lg);
  }
`

function IndexHeader() {
  const { title, description, social } = useSiteMetadata()

  return (
    <StyledIndexHeader>
      <h3>
        <span className="site-title">{title}</span>{" "}
        <span className="site-description text--md">{description}</span>
        {"  "}
        <a href={social.github} target="_blank" rel="noopener noreferrer">
          <span className="github-href">Github</span>
        </a>
        <a href={social.linkedIn} target="_blank" rel="noopener noreferrer">
          <span>LinkedIn</span>
        </a>
      </h3>

      <hr
        style={{
          marginTop: `var(--space-xl)`,
          border: `none`,
        }}
      />
    </StyledIndexHeader>
  )
}

const StyledPlainHeader = styled.header`
  padding: var(--space-sm);
  background: var(--bg-1);
  /* Because gatsby image has a zIndex */
  z-index: 3;

  a {
    font-weight: bolder;
    font-size: var(--text-sm);
  }
`

function PlainHeader() {
  const { title } = useSiteMetadata()

  return (
    <StyledPlainHeader>
      <Link to="/">{title}</Link>
    </StyledPlainHeader>
  )
}
