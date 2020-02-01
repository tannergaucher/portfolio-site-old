import { Layout, SEO } from "../components/elements"
import { Link, StyledPage } from "../components/styles"

import React from "react"
import { graphql } from "gatsby"
import { kebabCase } from "lodash"
import styled from "styled-components"

const StyledPost = styled(StyledPage)`
  .post-title {
    font-weight: 900;
  }

  .post-description {
  }

  article {
    margin: var(--space-xl) 0;
  }

  .more-posts-links {
    margin-bottom: var(--space-lg);
  }

  .next-post-title,
  .previous-post-title {
    margin-bottom: var(--space-lg);
  }
`

export default function PostTemplatePage({ data, pageContext, location }) {
  const post = data.markdownRemark
  const { next, previous } = pageContext

  return (
    <Layout location={location}>
      <StyledPost>
        <SEO title={post.frontmatter.title} />
        <h1 className="post-title">{post.frontmatter.title}</h1>
        <p className="post-description">{post.frontmatter.description}</p>
        <article
          className="post-body"
          dangerouslySetInnerHTML={{ __html: post.html }}
        ></article>
        <div className="more-posts-links">
          {next && (
            <>
              <small className="next">Next</small>
              <Link to={`${next.fields.slug}`}>
                <h2 className="next-post-title">{next.frontmatter.title}</h2>
              </Link>
            </>
          )}
          {previous && (
            <>
              <small className="previous">Previous</small>
              <Link to={`${previous.fields.slug}`}>
                <h2 className="previous-post-title">
                  {previous.frontmatter.title}
                </h2>
              </Link>
            </>
          )}
        </div>
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
