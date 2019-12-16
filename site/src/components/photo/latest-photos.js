import React from "react"
import styled from "styled-components"

import { PhotoCard } from "."
import { useLatestMyImages } from "../hooks"
import { ContentGrid } from "../styles"
import { ViewAll } from "../elements"

const StyledLatestPhotos = styled.div`
  margin-bottom: var(--space-xl);

  .container {
    max-width: var(--container);
    margin: 0 auto;
  }

  .section-title {
    font-weight: 900;
  }
`

export default function LatestPhotos() {
  const { edges } = useLatestMyImages()

  return (
    <StyledLatestPhotos>
      <div className="container">
        <h4 className="section-title"> Photos</h4>
        <p>Some description here.</p>
        <ViewAll to="/photos" />
        <br />
      </div>
      <ContentGrid>
        {edges.map(edge => (
          <PhotoCard sanityMyImage={edge.node} key={edge.node.id} />
        ))}
      </ContentGrid>
      <br />
    </StyledLatestPhotos>
  )
}
