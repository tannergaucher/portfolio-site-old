import { Layout, SEO } from "../components"

import React from "react"
import { graphql } from "gatsby"

export default function TagPage({ location, pageContext, data }) {
  const { tag } = pageContext

  return (
    <Layout location={location}>
      <SEO title={tag} />
      <h1>{tag}</h1>
      <>
        {data.allMarkdownRemark.edges.map(edge => (
          <div key="">
            {/* Post Card  */}
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
