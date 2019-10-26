import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const StyledPhotoCard = styled.div``

export default function PhotoCard({ sanityMyImage }) {
  return (
    <StyledPhotoCard>
      <Img fluid={sanityMyImage.myImage.asset.fluid} />
      <p>{sanityMyImage.caption}</p>
      <h6>{sanityMyImage.datePosted}</h6>
      {/* TAGS */}
    </StyledPhotoCard>
  )
}
