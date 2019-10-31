import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import moment from "moment"

import { Link } from "../styles"

const StyledPhotoCard = styled.div`
  margin-bottom: var(--card-margin-bottom);

  .image-tags {
    display: flex;
    margin-top: 2rem;
  }

  .image-dateTime {
    margin-bottom: 1rem;
    font-weight: lighter;
    font-family: var(--mono);
    color: grey;
  }

  .image-tag {
    margin-right: 1rem;
    margin-top: 0;
    margin-bottom: 0;
    font-weight: 500;
  }
`

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
          maxWidth: aspectRatio < 1 ? "600px" : "",
        }}
      >
        {/* <h5 className="image-dateTime">{formattedDateTime}</h5> */}
        <Link to={`/photo/${sanityMyImage.slug.current}`}>
          <Img fluid={sanityMyImage.myImage.asset.fluid} />
        </Link>
      </div>
      <div className="image-tags">
        {sanityMyImage.tags.map(tag => (
          <Link key={tag.slug.current} to={`photo/${tag.slug.current}`}>
            <h5 className="image-tag">#{tag.tag}</h5>
          </Link>
        ))}
      </div>
    </StyledPhotoCard>
  )
}
