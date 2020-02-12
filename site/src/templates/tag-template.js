import { Layout, SEO } from "../components"

import React from "react"
import { graphql } from "gatsby"

export default function TagPage({ location, pageContext, data }) {
  return (
    <Layout location={location}>
      <SEO title={pageContext.tag} />
      <h1>{pageContext.tag}</h1>
      <>
        {data.allMarkdownRemark.edges.map(edge => (
          <div>
            {/* Tag  */}
            {/*  */}
          </div>
        ))}
      </>
    </Layout>
  )
}

export const pageQuery = graphql`
  query TagPageQuery($tag: [String]!) {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/posts/" }
        frontmatter: { tags: { in: $tag } }
      }
    ) {
      edges {
        node {
          ...PostFragment
        }
      }
    }
  }
`
