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
    color: var(--href-color);
  }
`

const IndexHeader = ({ title }) => (
  <StyledIndexHeader>
    <h1 className="site-title text--lg">{title}</h1>
    <p className="intro-text">
      Full stack software developer. Currently seeking a position in New York
      City / remote.
    </p>
    <br />
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
    color: var(--href-color);
  }
`

const PlainHeader = ({ title }) => (
  <StyledPlainHeader>
    <Link to="/" none inherit>
      <small className="site-title">{title}</small>
    </Link>
  </StyledPlainHeader>
)
