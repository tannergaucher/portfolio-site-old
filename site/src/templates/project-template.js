import React from "react"
import { graphql } from "gatsby"

import { Layout } from "../components/elements"
import { StyledPage } from "../components/styles"

export default function ProjectTemplate({ data }) {
  const project = data.markdownRemark

  return (
    <Layout>
      <StyledPage>
        <h1>{project.frontmatter.title}</h1>
      </StyledPage>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PROJECT_MARKDOWN_QUERY($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      ...ProjectFragment
    }
  }
`
