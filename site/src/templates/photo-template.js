import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import moment from "moment"

import { Layout } from "../components/elements"
import { StyledPage } from "../components/styles"

const StyledPhotoPage = styled(StyledPage)`
  max-width: var(--container);

  .image {
    margin-bottom: var(--space-md);
  }
`

export default function PhotoTemplatePage({ data, location }) {
  const formatedDateTime = moment(
    data.sanityMyImage.myImage.asset._rawMetadata.exif.DateTimeOriginal
  ).format("MMMM Do YYYY, h:mm:ss A")

  return (
    <Layout location={location}>
      <StyledPhotoPage>
        <Img className="image" fluid={data.sanityMyImage.myImage.asset.fluid} />
        <small className="image-dateTime-caption">
          {formatedDateTime}
          {". "}
          {data.sanityMyImage.caption}
        </small>
      </StyledPhotoPage>
    </Layout>
  )
}

export const PHOTO_QUERY = graphql`
  query PHOTO_QUERY($slug: String!) {
    sanityMyImage(slug: { current: { eq: $slug } }) {
      ...MyImageFragment
    }
  }
`
