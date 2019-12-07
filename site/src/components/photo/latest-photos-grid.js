import React from "react"
import styled from "styled-components"

import { PhotoCard } from "."
import { useLatestMyImages } from "../hooks"

const StyledLatestPhotosGrid = styled.div`
  padding: var(--space-md);

  .container {
    max-width: var(--container);
    margin: 0 auto;
  }

  .section-title {
    font-weight: 900;
  }

  .photos-grid {
    display: grid;
    grid-gap: var(--space-md);
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export default function LatestPhotosGrid() {
  const { edges } = useLatestMyImages()

  return (
    <StyledLatestPhotosGrid>
      <div className="container">
        <h4 className="section-title">Photos</h4>
      </div>

      <div className="photos-grid">
        {edges.map(edge => (
          <PhotoCard sanityMyImage={edge.node} key={edge.node.id} />
        ))}
      </div>
    </StyledLatestPhotosGrid>
  )
}
