import { Button, Link, StyledPage } from "../components/styles"
import { graphql, navigate } from "gatsby"

import Img from "gatsby-image"
import { Layout } from "../components/elements"
import React from "react"
import moment from "moment"
import styled from "styled-components"

const StyledPhotoPage = styled.div`
  max-width: 1000px;
  margin-bottom: var(--space-xl);
  margin: 0 auto;

  .photo {
    margin-bottom: var(--space-lg);
  }

  .date-time {
    text-transform: uppercase;
    letter-spacing: var(--caps-letter-spacing);
    margin-right: var(--space-sm);
  }

  .next,
  .previous {
    text-transform: uppercase;
  }

  .next {
    margin-top: var(--space-xl);
    letter-spacing: var(--caps-letter-spacing);
  }

  .previous {
    margin-top: var(--space-lg);
    letter-spacing: var(--caps-letter-spacing);
  }

  .all {
    margin-top: var(--space-lg);
    text-transform: uppercase;
    letter-spacing: var(--caps-letter-spacing);
    margin-bottom: var(--space-xl);
  }

  @media (max-width: 600px) {
    margin-bottom: var(--space-md);
  }
`

export default function PhotoTemplatePage({ data, location, pageContext }) {
  const formatedDateTime = moment(
    data.sanityMyImage.myImage.asset._rawMetadata.exif.DateTimeOriginal
  ).format("MMMM Do, YYYY")

  return (
    <Layout location={location} noPadding="" noContainer="true">
      <StyledPhotoPage>
        <Img className="photo" fluid={data.sanityMyImage.myImage.asset.fluid} />
        <p className="date-time-description">
          <span className="text--sm date-time">{formatedDateTime}</span>{" "}
          <span className="text--md caption">{data.sanityMyImage.caption}</span>
        </p>
        {pageContext.next && (
          <Link
            none="true"
            className="next-link"
            to={`/photo/${pageContext.next.slug.current}`}
          >
            <h4 className="next text--sm">Next</h4>
          </Link>
        )}
        {pageContext.previous && (
          <Link
            none="true"
            className="previous-link"
            to={`/photo/${pageContext.previous.slug.current}`}
          >
            <h4 className="previous text--sm">Previous</h4>
          </Link>
        )}
        <Link none="true" to="/photos" className="all-link">
          <h4 className="all text--sm">All</h4>
        </Link>
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
