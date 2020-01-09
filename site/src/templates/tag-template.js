import React from "react"
import { graphql } from "gatsby"

import { Layout } from "../components/elements"
import { StyledPage } from "../components/styles"
import { PostCard } from "../components/post"

export default function Tags({ location, pageContext, data }) {
  return (
    <Layout location={location}>
      <StyledPage>
        <h1>{pageContext.tag}</h1>
        {data.allMarkdownRemark.edges.map(edge => (
          <PostCard post={edge.node} key={edge.node.id} />
        ))}
      </StyledPage>
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
