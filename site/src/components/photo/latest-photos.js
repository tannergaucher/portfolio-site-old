import { Button, ContentGrid, Link } from "../styles"

import { PhotoCard } from "."
import React from "react"
import { ViewAllLink } from "../elements"
import styled from "styled-components"
import { useLatestMyImages } from "../hooks"

const StyledLatestPhotos = styled.div`
  margin-bottom: var(--space-xl);

  .all-photos {
    font-weight: 900;
    margin-bottom: var(--space-xl);
    color: var(--text-color);
  }
`

const StyledLatestPhotosGrid = styled(ContentGrid)`
  margin-bottom: var(--space-xl);
`

export default function LatestPhotos() {
  const { edges } = useLatestMyImages()

  return (
    <StyledLatestPhotos>
      <Link to="/photos">
        <h2 className="all-photos">All Photos</h2>
      </Link>
      <StyledLatestPhotosGrid>
        {edges.map(edge => (
          <Link to={`/photo/${edge.node.slug.current}`} key={edge.node.id}>
            <PhotoCard sanityMyImage={edge.node} />
          </Link>
        ))}
      </StyledLatestPhotosGrid>
    </StyledLatestPhotos>
  )
}
