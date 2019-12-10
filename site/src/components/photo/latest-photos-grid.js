import React from "react"
import styled from "styled-components"
import { FormNextLink } from "grommet-icons"

import { PhotoCard } from "."
import { useLatestMyImages } from "../hooks"
import { AnimatedTitleArrow, Link, ContentGrid } from "../styles"

const StyledLatestPhotosGrid = styled.div`
  padding: var(--space-md);
  margin-bottom: var(--space-xl);

  .container {
    max-width: var(--container);
    margin: 0 auto;
  }

  .section-title {
    font-weight: 900;
  }
`

export default function LatestPhotosGrid() {
  const { edges } = useLatestMyImages()

  return (
    <StyledLatestPhotosGrid>
      <div className="container">
        <Link to="/photos">
          <AnimatedTitleArrow>
            <h4 className="section-title">Photos</h4>
            <FormNextLink className="arrow" size="var(--text-lg)" />
          </AnimatedTitleArrow>
        </Link>
        <p>Some description here.</p>

        <br />

        <ContentGrid>
          {edges.map(edge => (
            <PhotoCard sanityMyImage={edge.node} key={edge.node.id} />
          ))}
        </ContentGrid>

        <br />
      </div>
    </StyledLatestPhotosGrid>
  )
}
