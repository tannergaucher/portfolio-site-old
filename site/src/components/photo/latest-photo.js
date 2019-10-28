import React from "react"
import { navigate } from "gatsby"

import { PhotoCard } from "."
import { useLatestMyImages } from "../hooks"
import { StyledSection, Link, Button } from "../styles"

export default function LatestPhoto() {
  const { edges } = useLatestMyImages()

  return (
    <StyledSection>
      <h2 className="section-title">
        <span role="img">📷</span>Latest Photo
      </h2>
      {edges.map(edge => (
        <Link key={edge.node.id} to={`/photo/${edge.node.slug.current}`}>
          <PhotoCard sanityMyImage={edge.node} />
        </Link>
      ))}
      <Button onClick={() => navigate(`/photo`)}>View All</Button>
    </StyledSection>
  )
}
