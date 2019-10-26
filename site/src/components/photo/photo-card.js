import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const StyledPhotoCard = styled.div``

function formatDate(dateString) {
  return dateString.split("T")[0]
}

export default function PhotoCard({ sanityMyImage }) {
  return (
    <StyledPhotoCard>
      <Img fluid={sanityMyImage.myImage.asset.fluid} />
      <p>{sanityMyImage.caption}</p>
      <h5>{formatDate(sanityMyImage.datePosted)}</h5>
      {/* TAGS */}
    </StyledPhotoCard>
  )
}
