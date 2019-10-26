import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const StyledPhotoCard = styled.div`
  margin-bottom: 5rem;
`

export default function PhotoCard({ sanityMyImage }) {
  return (
    <StyledPhotoCard>
      <Img fluid={sanityMyImage.myImage.asset.fluid} />
      <p>{sanityMyImage.caption}</p>
      <h5>{sanityMyImage.datePosted}</h5>
      {/* TAGS */}
    </StyledPhotoCard>
  )
}
