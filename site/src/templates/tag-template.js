import React from "react"
import { graphql } from "gatsby"

export default function Tags({ data, pageContext }) {
  console.log(data)

  return (
    <>
      <h1>{pageContext.tag}</h1>
    </>
  )
}

export const pageQuery = graphql`
  query TAG_TEMPLATE_QUERY($tag: String!) {
    allMarkdownRemark(filter: { frontmatter: { tags: { eq: $tag } } }) {
      edges {
        node {
          ...PostFragment
        }
      }
    }
  }
`
