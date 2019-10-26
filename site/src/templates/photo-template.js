import React from "react"

import { Layout } from "../components/elements"
import { StyledPage } from "../components/styles"
import { PhotoCard } from "../components/photo"

export default function PhotoTemplatePage({ data }) {
  const { sanityMyImage } = data

  return (
    <Layout>
      <StyledPage>
        <PhotoCard sanityMyImage={sanityMyImage} />
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
