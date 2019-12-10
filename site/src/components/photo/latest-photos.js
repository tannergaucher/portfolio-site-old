import React from "react"
import styled from "styled-components"

import { PhotoCard } from "."
import { useLatestMyImages } from "../hooks"
import { ContentGrid } from "../styles"
import { ViewAll } from "../elements"

const StyledLatestPhotos = styled.div`
  padding: var(--space-md);
  margin-bottom: var(--space-xl);

  .section-title {
    font-weight: 900;
  }
`

export default function LatestPhotos() {
  const { edges } = useLatestMyImages()

  return (
    <StyledLatestPhotos>
      <h4 className="section-title"> Photos</h4>
      <p>Some description here.</p>
      <ViewAll to="/photos" />
      <br />
      <ContentGrid>
        {edges.map(edge => (
          <PhotoCard sanityMyImage={edge.node} key={edge.node.id} />
        ))}
      </ContentGrid>
      <br />
    </StyledLatestPhotos>
  )
}
