import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import { Layout } from "../components/elements"
import { StyledPage } from "../components/styles"

const StyledPhotoPage = styled(StyledPage)`
  max-width: var(--container);
`

export default function PhotoTemplatePage({ data, location }) {
  return (
    <Layout location={location}>
      <StyledPhotoPage>
        <Img fluid={data.sanityMyImage.myImage.asset.fluid} />
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
