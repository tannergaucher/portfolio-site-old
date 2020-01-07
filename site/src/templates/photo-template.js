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
  margin: var(--space-sm) auto;

  .image {
    margin-bottom: var(--space-md);
  }

  .photo-btns {
    display: flex;
    margin-top: var(--space-md);
  }

  .photo-btn {
    font-size: var(--text-lg);
    width: 100%;
  }

  .previous {
    margin-right: var(--space-sm);
  }

  .grid {
    margin-top: var(--space-sm);
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
        <div className="photo-btns">
          {pageContext.previous && (
            <Button
              className="photo-btn previous"
              onClick={() =>
                navigate(`/photo/${pageContext.previous.slug.current}`)
              }
            >
              <FormPrevious size="var(--text-lg)" color="var(--text-color)" />
            </Button>
          )}
          {pageContext.next && (
            <Button
              className="photo-btn"
              onClick={() =>
                navigate(`/photo/${pageContext.next.slug.current}`)
              }
            >
              <FormNext size="var(--text-lg)" color="var(--text-color)" />
            </Button>
          )}
        </div>
        <Button className="photo-btn grid" onClick={() => navigate(`/photos`)}>
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
