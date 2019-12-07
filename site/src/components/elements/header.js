import React from "react"
import styled from "styled-components"
import { Github, Twitter } from "grommet-icons"

import { Link } from "../styles"
import { useSiteMetadata } from "../hooks"

export default function Header({ location }) {
  const { title } = useSiteMetadata()

  return (
    <>
      {location.pathname === "/" ? (
        <IndexHeader title={title} />
      ) : (
        <PlainHeader title={title} />
      )}
    </>
  )
}

const StyledIndexHeader = styled.header`
  max-width: var(--container);
  margin: var(--space-xl) auto;

  .site-title {
    font-weight: 900;
  }

  .intro-text {
    margin-bottom: var(--space-md);
  }

  .github-btn {
    margin-right: var(--space-md);
  }
`

const IndexHeader = ({ title }) => (
  <StyledIndexHeader>
    <br />
    <br />
    <br />
    <Link to="/" none>
      <h1 className="site-title text--lg">{title}</h1>
    </Link>
    <p className="intro-text">
      I'm a fullstack JavaScript developer, currently seeking a full-time
      position in New York City / remote.
    </p>

    <div className="social-btns">
      <button className="github-btn">
        <Github size="var(--text-sm)" color="var(--black)" />
      </button>

      <button>
        <Twitter size="var(--text-sm)" color="var(--black)" />
      </button>
    </div>
  </StyledIndexHeader>
)

const StyledPlainHeader = styled.header`
  padding: var(--space-sm);
  position: sticky;
  top: 0;
  background: var(--white);

  .site-title {
    font-weight: 900;
  }
`

const PlainHeader = ({ title }) => (
  <StyledPlainHeader>
    <Link to="/" none>
      <small className="site-title">{title}</small>
    </Link>
  </StyledPlainHeader>
)
