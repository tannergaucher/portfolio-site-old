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

  article {
    margin: var(--space-xl) 0;
  }

  .more-posts-links {
    margin-bottom: var(--space-lg);
  }

  .next-post-title,
  .previous-post-title {
    margin-bottom: var(--space-lg);
    font-weight: 900;
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
            <div className="next-post">
              <small>Next</small>
              <Link
                className="next-post-link"
                to={`${next.fields.slug}`}
                none="true"
              >
                <h3 className="next-post-title">{next.frontmatter.title}</h3>
              </Link>
            </div>
          )}
          {previous && (
            <div className="previous-post">
              <small>Previous</small>
              <Link
                className="previous-post-link"
                to={`${previous.fields.slug}`}
                none="true"
              >
                <h3 className="previous-post-title">
                  {previous.frontmatter.title}
                </h3>
              </Link>
            </div>
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
