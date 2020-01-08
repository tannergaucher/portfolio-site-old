import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import moment from "moment"

import { Link } from "../styles"

const StyledPhotoCard = styled.div``

export default function PhotoCard({ sanityMyImage }) {
  const { aspectRatio } = sanityMyImage.myImage.asset.fluid

  const formattedDateTime = moment(
    sanityMyImage.myImage.asset._rawMetadata.exif.DateTimeOriginal
  ).format("MM.DD.YYYY")

  return (
    <StyledPhotoCard>
      <div
        className="image-wrapper"
        style={{
          // Explain
          maxWidth: aspectRatio < 1 ? "600px" : "",
        }}
      >
        <Img className="img" fluid={sanityMyImage.myImage.asset.fluid} />
      </div>
    </StyledPhotoCard>
  )
}
