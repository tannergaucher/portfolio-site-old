import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { kebabCase } from "lodash"

import { SEO, Layout } from "../components/elements"
import { StyledPage, Link } from "../components/styles"

const StyledPost = styled(StyledPage)`
  max-width: var(--container);

  .post-description {
    font-weight: 300;
    color: var(--grey);
    font-size: var(--text-lg);
    margin-right: var(--space-sm);
  }

  .post-date {
    font-size: var(--text-sm);
    font-weight: lighter;
  }

  .post-body {
    margin-top: var(--space-lg);
  }

  .next,
  .previous {
    font-size: var(--text-lg);
    margin-right: var(--space-sm);
    color: var(--grey);
    font-weight: lighter;
  }

  .next-title,
  .previous-title {
    font-size: var(--text-lg);
  }

  @media (max-width: 600px) {
    .post-title {
      margin-top: var(--space-md);
    }

    .post-body {
      margin-top: var(--space-md);
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
        <h1>
          <span className="post-title">{post.frontmatter.title}</span>{" "}
          <span className="post-description">
            {post.frontmatter.description}
          </span>
          <span className="post-date">{post.frontmatter.date}</span>
        </h1>
        <br />
        <div
          className="post-body"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <br />
        <div className="next-prev-links">
          {next && (
            <h2>
              <Link to={`${next.fields.slug}`}>
                <>
                  <span className="next">Next</span>
                  <span className="next-title">{next.frontmatter.title}</span>
                </>
              </Link>
            </h2>
          )}
          {previous && (
            <h2>
              <Link to={`${previous.fields.slug}`}>
                <h2 className="next-prev-title prev">
                  <span className="previous">Previous</span>
                  <span className="previous-title">
                    {previous.frontmatter.title}
                  </span>
                </h2>
              </Link>
            </h2>
          )}
        </div>
        <br />
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
