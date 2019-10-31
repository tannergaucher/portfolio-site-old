import React from "react"
import { navigate } from "gatsby"

import { PhotoCard } from "."
import { useLatestMyImages } from "../hooks"
import { StyledSection, Link, Button } from "../styles"

export default function LatestPhoto() {
  const { edges } = useLatestMyImages()

  return (
    <StyledSection>
      <h2 className="section-title">Latest Photos</h2>
      {edges.map(edge => (
        <PhotoCard sanityMyImage={edge.node} key={edge.node.id} />
      ))}
      <Button
        className="view-all-btn"
        onClick={() => navigate(`/photo`)}
        primary
      >
        View All Photos
      </Button>
    </StyledSection>
  )
}
