import React from "react"
import styled from "styled-components"
import { Github, Twitter } from "grommet-icons"

import { Link, IconLinkHref } from "../styles"
import { useSiteMetadata } from "../hooks"
import { Avatar } from "../elements"

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
  margin: var(--space-xl) auto;
  padding: var(--space-sm);
  max-width: var(--container);

  .site-title {
    font-weight: 900;
    margin-top: var(--space-lg);
  }

  .intro-text {
    margin-bottom: var(--space-md);
  }

  @media (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .intro-text {
      text-align: center;
      max-width: 600px;
    }
  }
`

const IndexHeader = ({ title }) => (
  <StyledIndexHeader>
    <Avatar />
    <h1 className="site-title text--lg">{title}</h1>
    <p className="intro-text">
      Full stack software developer. Currently seeking a position in New York
      City / remote.
    </p>
    <div className="social-hrefs">
      <IconLinkHref href="#">
        <Github size="var(--text-md)" color="var(--href-color)" />
      </IconLinkHref>
      <IconLinkHref href="#">
        <Twitter size="var(--text-md)" color="var(--href-color)" />
      </IconLinkHref>
    </div>
  </StyledIndexHeader>
)

const StyledPlainHeader = styled.header`
  padding: var(--space-sm);
  position: sticky;
  top: 0;
  background: var(--bg-1);
  opacity: 0.9;
  /* Because gatsby image has a zIndex */
  z-index: 3;
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
