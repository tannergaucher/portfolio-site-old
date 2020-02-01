import React from "react"
import styled from "styled-components"

import { PhotoCard } from "."
import { useLatestMyImages } from "../hooks"
import { ContentGrid, Link, Button } from "../styles"
import { ViewAllLink } from "../elements"

const StyledLatestPhotos = styled.div`
  margin-bottom: var(--space-xl);
`

const StyledLatestPhotosGrid = styled(ContentGrid)`
  margin-bottom: var(--space-xl);
`

export default function LatestPhotos() {
  const { edges } = useLatestMyImages()

  return (
    <StyledLatestPhotos>
      <StyledLatestPhotosGrid>
        {edges.map(edge => (
          <Link to={`/photo/${edge.node.slug.current}`} key={edge.node.id}>
            <PhotoCard sanityMyImage={edge.node} />
          </Link>
        ))}
      </StyledLatestPhotosGrid>
      <Link to="/photos" none="true">
        <h2>View All Photos</h2>
      </Link>
    </StyledLatestPhotos>
  )
}
