import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import moment from "moment"

import { Link } from "../styles"

const StyledPhotoCard = styled.div`
  margin-bottom: 5rem;

  .image-date-country {
    display: flex;
  }

  .image-date {
    margin-right: 1rem;
  }

  .image-tags {
    display: flex;
  }

  .image-dateTime {
    font-weight: lighter;
    margin-bottom: 1rem;
    font-family: var(--mono);
  }

  .image-tag {
    margin-right: 1rem;
    margin-top: 0.5rem;
  }
`

export default function PhotoCard({ sanityMyImage }) {
  const { aspectRatio } = sanityMyImage.myImage.asset.fluid

  const formattedDateTime = moment(
    sanityMyImage.myImage.asset._rawMetadata.exif.DateTimeOriginal
  ).format("MM/DD/YYYY hh:mm:ss")

  return (
    <StyledPhotoCard>
      <div
        className="image-wrapper"
        style={{
          maxWidth: aspectRatio < 1 ? "600px" : "",
        }}
      >
        <Link to={`/photo/${sanityMyImage.slug.current}`}>
          <Img fluid={sanityMyImage.myImage.asset.fluid} />
        </Link>
      </div>
      <h5 className="image-dateTime">{formattedDateTime}</h5>
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
