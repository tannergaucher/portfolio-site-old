import { Button, StyledPage } from "../components/styles"
import { FormNext, FormPrevious, Grid } from "grommet-icons"
import { graphql, navigate } from "gatsby"

import Img from "gatsby-image"
import { Layout } from "../components/elements"
import React from "react"
import moment from "moment"
import styled from "styled-components"

const StyledPhotoPage = styled(StyledPage)`
  max-width: var(--container);
  margin: var(--space-md) auto;
  margin-bottom: var(--space-xl);

  .photo {
    margin-bottom: var(--space-lg);
    box-shadow: var(--elevation-3);
  }
`

export default function PhotoTemplatePage({ data, location, pageContext }) {
  const formatedDateTime = moment(
    data.sanityMyImage.myImage.asset._rawMetadata.exif.DateTimeOriginal
  ).format("MMMM Do, YYYY")

  return (
    <Layout location={location}>
      <StyledPhotoPage>
        <Img className="photo" fluid={data.sanityMyImage.myImage.asset.fluid} />
        <p className="image-dateTime-caption">
          {formatedDateTime}. {data.sanityMyImage.caption}
        </p>
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
