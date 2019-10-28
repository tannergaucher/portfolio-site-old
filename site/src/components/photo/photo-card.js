import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import moment from "moment"

const StyledPhotoCard = styled.div`
  margin-bottom: 5rem;
`

export default function PhotoCard({ sanityMyImage }) {
  const { aspectRatio } = sanityMyImage.myImage.asset.fluid
  const formattedDate = moment(sanityMyImage.datePosted).format("MM/DD/YYYY")

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
      <h5>{formattedDate}</h5>
    </StyledPhotoCard>
  )
}
