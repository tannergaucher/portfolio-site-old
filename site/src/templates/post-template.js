import { Layout, SEO } from "../components/elements"
import { Link, StyledPage } from "../components/styles"

import React from "react"
import { graphql } from "gatsby"
import { kebabCase } from "lodash"
import styled from "styled-components"

const StyledPost = styled(StyledPage)`
  .post-title {
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: var(--caps-letter-spacing);
    margin-bottom: 0;
  }

  .post-description {
    margin-top: var(--space-lg);
    font-weight: 400;
  }

  .post-date {
    margin-top: var(--space-lg);
    margin-bottom: var(--space-lg);
    text-transform: uppercase;
    letter-spacing: var(--caps-letter-spacing);
    font-weight: 400;
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
        <h1 className="post-title  text--xl">{post.frontmatter.title}</h1>
        <h2 className="post-description text--md">
          {post.frontmatter.description}
        </h2>
        <h4 className="post-date text--sm">{post.frontmatter.date}</h4>
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
