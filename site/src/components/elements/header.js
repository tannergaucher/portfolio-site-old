import React from "react"
import styled from "styled-components"

import { Link, Button } from "../styles"
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
`

const IndexHeader = ({ title }) => (
  <StyledIndexHeader>
    <Link to="/" none>
      <h1 className="site-title text--lg">{title}</h1>
    </Link>
    <p className="intro-text">
      I'm a fullstack JavaScript developer, currently seeking a full-time
      position in New York City / Remote.
    </p>
    <Button>Github</Button>
  </StyledIndexHeader>
)

const PlainHeader = ({ title }) => (
  <Link to="/" none>
    <h4>{title}</h4>
  </Link>
)
