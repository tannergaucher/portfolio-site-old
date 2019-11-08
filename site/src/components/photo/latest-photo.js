import React from "react"

import { PhotoCard } from "."
import { useLatestMyImages } from "../hooks"
import { StyledSection, Link, Divider } from "../styles"

export default function LatestPhoto() {
  const { edges } = useLatestMyImages()

  return (
    <StyledSection>
      <Divider />
      <h2 className="section-title">Photos</h2>
      {edges.map(edge => (
        <PhotoCard sanityMyImage={edge.node} key={edge.node.id} />
      ))}
      <Link to={`/photo`}>
        <h3>View All Photos</h3>
      </Link>
    </StyledSection>
  )
}
