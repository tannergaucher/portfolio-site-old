import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const StyledPhotoCard = styled.div`
  margin-bottom: 5rem;
`

export default function PhotoCard({ sanityMyImage }) {
  const { aspectRatio } = sanityMyImage.myImage.asset.fluid

  return (
    <StyledPhotoCard>
      <div
        className="image-wrapper"
        style={{
          maxWidth: aspectRatio < 1 ? "600px" : "",
        }}
      >
        <Img fluid={sanityMyImage.myImage.asset.fluid} />
      </div>
      <p>{sanityMyImage.caption}</p>
      <h5>{sanityMyImage.datePosted}</h5>
    </StyledPhotoCard>
  )
}
