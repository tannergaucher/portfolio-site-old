import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import { Layout } from "../components/elements"
import { StyledPage } from "../components/styles"

const StyledPhotoPage = styled(StyledPage)`
  max-width: var(--container);

  .image {
    margin-bottom: var(--space-md);
  }
`

export default function PhotoTemplatePage({ data, location }) {
  console.log(data)

  return (
    <Layout location={location}>
      <StyledPhotoPage>
        <Img className="image" fluid={data.sanityMyImage.myImage.asset.fluid} />
        <small>
          {data.sanityMyImage.myImage.asset._rawMetadata.exif.DateTimeOriginal}
        </small>
        <br />
        <small>{data.sanityMyImage.caption}</small>
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
