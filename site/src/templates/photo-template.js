import React from "react"
import { navigate } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import moment from "moment"
import { FormNext, FormPrevious, Grid } from "grommet-icons"

import { Layout } from "../components/elements"
import { StyledPage, Button } from "../components/styles"

const StyledPhotoPage = styled(StyledPage)`
  max-width: var(--container);

  .image {
    margin-bottom: var(--space-md);
  }

  .post-btn {
    width: 100%;
    margin-top: var(--space-md);
    font-size: var(--text-lg);
    border: var(--thickness) solid var(--bg-2);
  }
`

export default function PhotoTemplatePage({ data, location, pageContext }) {
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
        <br />
        <Button
          className="post-btn"
          onClick={() => navigate(`/photo/${pageContext.next.slug.current}`)}
        >
          <FormNext size="var(--text-lg)" color="var(--text-color)" />
        </Button>
        <br />
        <Button
          className="post-btn"
          onClick={() =>
            navigate(`/photo/${pageContext.previous.slug.current}`)
          }
        >
          <FormPrevious size="var(--text-lg)" color="var(--text-color)" />
        </Button>
        <Button className="post-btn" onClick={() => navigate(`/photos`)}>
          <Grid size="var(--text-md)" color="var(--text-color)" />
        </Button>
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
