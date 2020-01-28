import React from "react"
import styled from "styled-components"

import { PhotoCard } from "."
import { useLatestMyImages } from "../hooks"
import { ContentGrid, Link } from "../styles"
import { SectionTitle } from "../elements"

const StyledLatestPhotos = styled.div`
  margin-bottom: var(--space-xl);
`

export default function LatestPhotos() {
  const { edges } = useLatestMyImages()

  return (
    <StyledLatestPhotos>
      <SectionTitle to="/photos" sectionTitle="Photos" />
      <ContentGrid>
        {edges.map(edge => (
          <Link to={`/photo/${edge.node.slug.current}`} key={edge.node.id}>
            <PhotoCard sanityMyImage={edge.node} />
          </Link>
        ))}
      </ContentGrid>
      <br />
    </StyledLatestPhotos>
  )
}
