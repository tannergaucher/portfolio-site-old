import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import { SEO, Layout } from "../components/elements"
import { StyledPage, Link } from "../components/styles"

const StyledPost = styled(StyledPage)`
  .post-title {
    font-weight: 900;
    margin-top: 0;
    margin-bottom: 1rem;
  }

  .post-date {
    font-weight: lighter;
    font-family: var(--mono);
    margin-bottom: 1rem;
  }

  .post-description {
    font-family: var(--mono);
  }

  .post-body {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }
`

export default function Post({ data, pageContext }) {
  const post = data.markdownRemark
  const { next, previous } = pageContext

  return (
    <Layout>
      <StyledPost>
        <SEO title={post.frontmatter.title} />
        <h4 className="post-date">{post.frontmatter.date}</h4>
        <h1 className="post-title">{post.frontmatter.title}</h1>
        <p className="post-description">{post.frontmatter.description}</p>
        <div
          className="post-body"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        {next && (
          <Link to={next.fields.slug}>
            <h3>Next Post: {next.frontmatter.title}</h3>
          </Link>
        )}
        {previous && (
          <Link to={previous.fields.slug}>
            <h3>Previous Post: {previous.frontmatter.title}</h3>
          </Link>
        )}
      </StyledPost>
    </Layout>
  )
}

export const pageQuery = graphql`
  query POST_MARKDOWN_QUERY($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      ...PostFragment
    }
  }
`
