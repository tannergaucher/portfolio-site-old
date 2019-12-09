import React from "react"
import Img from "gatsby-image"

import { Layout } from "../components/elements"
import { StyledPage } from "../components/styles"

export default function PhotoTemplatePage({ data, location }) {
  const { sanityMyImage } = data

  return (
    <Layout location={location}>
      <StyledPage>
        <Img fluid={data.sanityMyImage.myImage.asset.fluid} />
      </StyledPage>
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
