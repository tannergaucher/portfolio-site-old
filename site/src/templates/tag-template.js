import React from "react"
import { graphql } from "gatsby"

import { Post } from "../components/post"

export default function Tags({ data, pageContext }) {
  return (
    <>
      <h1>{pageContext.tag}</h1>
      {data.allMarkdownRemark.edges.map(edge => (
        <Post post={edge.node} key={edge.node.id} />
      ))}
    </>
  )
}

export const pageQuery = graphql`
  query TAG_QUERY($tag: String!) {
    allMarkdownRemark(filter: { frontmatter: { tags: { eq: $tag } } }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM Do, YYYY")
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
