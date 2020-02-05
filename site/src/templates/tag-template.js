import { Layout, SEO } from "../components/elements"

import { PostCard } from "../components/post"
import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

const StyledTagPage = styled.div`
  max-width: var(--container);
  margin: var(--space-lg) auto;
`

export default function TagPage({ location, pageContext, data }) {
  return (
      {data.allMarkdownRemark.edges.map(edge => (
    <Layout location={location} noContainer="true">
      <StyledTagPage>
        <SEO title={pageContext.tag} />
        <h1>{pageContext.tag}</h1>
        {data.allMarkdownRemark.edges.map(edge => (
          <PostCard post={edge.node} key={edge.node.id} />
        ))}
      </StyledTagPage>
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
