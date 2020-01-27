import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import { SEO, Layout } from "../components/elements"
import { StyledPage, Link } from "../components/styles"

const StyledPost = styled(StyledPage)`
  max-width: var(--container);

  .post-title {
    font-weight: 900;
  }

  .next-prev-title {
    font-weight: 900;
  }

  .next-prev {
    text-transform: uppercase;
  }

  .next,
  .prev {
    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 600px) {
    .post-title {
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
        <h1 className="post-title">{post.frontmatter.title}</h1>
        <p className="post-date">{post.frontmatter.date}</p>
        {/* <small className="post-description">
          {post.frontmatter.description}
        </small> */}
        <br />
        <div
          className="post-body"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <br />
        <div className="next-prev-links">
          {next && (
            <>
              <h4 className="next-prev">Next </h4>
              <Link to={`${next.fields.slug}`} none="true">
                <h2 className="next-prev-title next">
                  {next.frontmatter.title}
                </h2>
              </Link>
            </>
          )}

          {previous && (
            <>
              <h4 className="next-prev">Previous</h4>
              <Link to={`${previous.fields.slug}`} none="true">
                <h2 className="next-prev-title prev">
                  {previous.frontmatter.title}
                </h2>
              </Link>
            </>
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
