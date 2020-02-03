import { Layout, SEO } from "../components/elements"

import { Link } from "../components/styles"
import React from "react"
import { graphql } from "gatsby"
import { kebabCase } from "lodash"
import styled from "styled-components"

const StyledPost = styled.div`
  .post-title {
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: var(--caps-letter-spacing);
    margin-bottom: 0;
  }

  .post-description {
    margin-top: var(--space-lg);
    font-weight: 500;
  }

  .post-date {
    margin-top: var(--space-lg);
    text-transform: uppercase;
    letter-spacing: var(--caps-letter-spacing);
    font-weight: 500;
  }

  .post-body {
    margin-top: var(--space-xl);
  }

  .more-posts-links {
    margin-bottom: var(--space-lg);
  }

  .next-post-title,
  .previous-post-title {
    margin-bottom: var(--space-lg);
    font-weight: 900;
  }

  @media (max-width: 600px) {
    .post-title {
      font-size: var(--text-lg);
    }
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
        <h2 className="post-description text--md">
          {post.frontmatter.description}
        </h2>
        <h4 className="post-date text--sm">{post.frontmatter.date}</h4>
        <div className="post-body">
          <article dangerouslySetInnerHTML={{ __html: post.html }}></article>
        </div>
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
