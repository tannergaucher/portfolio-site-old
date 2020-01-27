import React from "react"
import styled from "styled-components"
import { Github, LinkedinOption } from "grommet-icons"

import { Link, Button } from "../styles"
import { useSiteMetadata } from "../hooks"

export default function Header({ location }) {
  const { title, social } = useSiteMetadata()

  return (
    <>
      {location.pathname === "/" ? (
        <IndexHeader title={title} social={social} />
      ) : (
        <PlainHeader title={title} social={social} />
      )}
    </>
  )
}

const StyledIndexHeader = styled.header`
  margin: var(--space-xl) auto;
  padding: var(--space-sm);
  max-width: var(--container);

  .site-title {
    font-weight: 900;
    margin-top: var(--space-lg);
    color: var(--href-color);
  }

  .github-btn {
    margin-right: var(--space-sm);
  }

  .header-btn {
    /* background: var(--bg-1); */
    border: none;
  }

  @media (max-width: 600px) {
    margin: var(--space-lg) auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .intro-text {
      text-align: center;
    }
  }
`

const IndexHeader = ({ title, social }) => (
  <StyledIndexHeader>
    <h1 className="site-title text--lg">{title}</h1>
    <p className="intro-text">
      Full stack software developer. Currently seeking a position in New York
      City / remote.
    </p>
    <div className="social-hrefs">
      <a href={social.github} target="_blank" rel="noopener noreferrer">
        <Button className="github-btn header-btn">
          <Github size="var(--text-md)" color="var(--href-color)" />
        </Button>
      </a>
      <a href={social.linkedIn} target="_blank" rel="noopener noreferrer">
        <Button className="header-btn">
          <LinkedinOption size="var(--text-md)" color="var(--href-color)" />
        </Button>
      </a>
    </div>
  </StyledIndexHeader>
)

const StyledPlainHeader = styled.header`
  padding: var(--space-sm);
  position: sticky;
  top: 0;
  background: var(--bg-1);
  opacity: 0.85;
  /* TODO: Set elevation on scroll  */
  /* box-shadow: var(--elevation-1); */
  /* Because gatsby image has a zIndex */
  z-index: 3;

  .site-title {
    font-weight: 900;
    color: var(--href-color);
  }
`

const PlainHeader = ({ title }) => (
  <StyledPlainHeader>
    <Link to="/" none="true" inherit="true">
      <small className="site-title">{title}</small>
    </Link>
  </StyledPlainHeader>
)
