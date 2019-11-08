import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import { SEO, Layout } from "../components/elements"
import { StyledPage, Link } from "../components/styles"

const StyledPost = styled(StyledPage)`
  .post-title {
    font-weight: 900;
    margin-top: 0;
    margin-bottom: 3rem;
  }

  .post-date {
    margin-bottom: 1rem;
    margin-top: 0;
  }

  .post-description {
    margin-top: 1rem;
  }

  .post-body {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }

  .next-prev-links {
    margin-bottom: 3rem;
  }

  .next-prev {
    margin-top: 0;
    margin-bottom: 1rem;
    text-align: center;
  }

  .next-prev-title {
    margin-bottom: 2rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: 768px) {
    .post-title {
      margin-top: 3rem;
      margin-bottom: 2rem;
    }

    .post-body {
      margin-top: 3rem;
      margin-bottom: 3rem;
    }
  }
`

export default function Post({ data, pageContext }) {
  const post = data.markdownRemark
  const { next, previous } = pageContext

  return (
    <Layout>
      <StyledPost>
        <SEO title={post.frontmatter.title} />
        {/* <h4 className="post-date">{post.frontmatter.date}</h4> */}
        <h1 className="post-title">{post.frontmatter.title}</h1>
        <p className="post-description">{post.frontmatter.description}</p>
        <div
          className="post-body"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <div className="next-prev-links">
          {next && (
            <Link to={`/${next.fields.slug}`}>
              <h3 className="next-prev-title">{next.frontmatter.title}</h3>
            </Link>
          )}
          {previous && (
            <Link to={`/${previous.fields.slug}`}>
              <h3 className="next-prev-title">{previous.frontmatter.title}</h3>
            </Link>
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
