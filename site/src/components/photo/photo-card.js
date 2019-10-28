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

  .image-tag {
    margin-right: 1rem;
  }
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
        <Link to={`/photo/${sanityMyImage.slug.current}`}>
          <Img fluid={sanityMyImage.myImage.asset.fluid} />
        </Link>
      </div>
      <div className="image-date-country">
        <h5 className="image-date">{formattedDate}</h5>
        <Link to={`/photo/${sanityMyImage.country.slug.current}`}>
          <h5 className="image-country">{sanityMyImage.country.name}</h5>
        </Link>
      </div>

      <p className="image-caption">{sanityMyImage.caption}</p>

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
