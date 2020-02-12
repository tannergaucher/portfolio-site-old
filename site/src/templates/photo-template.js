import { Link, graphql, navigate } from "gatsby"

import Img from "gatsby-image"
import { Layout } from "../components"
import React from "react"
import moment from "moment"

export default function PhotoTemplatePage({ data, location, pageContext }) {
  const formatedDateTime = moment(
    data.sanityMyImage.myImage.asset._rawMetadata.exif.DateTimeOriginal
  ).format("MMMM Do, YYYY")

  return (
    <Layout location={location}>
      <article className="container res-padding center page">
        <figure className="figure">
          <div className="only-fullscreen-padding">
            <Img
              className="photo"
              fluid={data.sanityMyImage.myImage.asset.fluid}
            />
          </div>
          <figcaption className="figcaption padding">
            <time className="date-time text--sm">{formatedDateTime}</time>{" "}
            <span className="caption text--md">
              {data.sanityMyImage.caption}
            </span>
          </figcaption>
        </figure>
        <nav className="padding">
          {pageContext.next && (
            <Link
              none="true"
              className="nav-link"
              to={`/photo/${pageContext.next.slug.current}`}
            >
              <h4 className="next text--sm">Next</h4>
            </Link>
          )}
          {pageContext.previous && (
            <Link
              none="true"
              className="nav-link"
              to={`/photo/${pageContext.previous.slug.current}`}
            >
              <h4 className="previous text--sm">Previous</h4>
            </Link>
          )}
          <Link none="true" to="/photos" className="nav-link">
            <h4 className="text--sm">All</h4>
          </Link>
        </nav>
      </article>
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
