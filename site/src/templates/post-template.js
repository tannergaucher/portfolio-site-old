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

  .next,
  .prev {
    &:hover {
      text-decoration: underline;
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
            <Link to={`/${next.fields.slug}`} none>
              <h3 className="next-prev-title next">{next.frontmatter.title}</h3>
            </Link>
          )}
          {previous && (
            <Link to={`/${previous.fields.slug}`} none>
              <h3 className="next-prev-title prev">
                {previous.frontmatter.title}
              </h3>
            </Link>
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
