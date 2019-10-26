import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import { SEO, Layout } from "../components/elements"
import { StyledPage } from "../components/styles"

const StyledPost = styled(StyledPage)`
  .post-title {
    font-weight: 900;
  }

  .post-date {
    font-weight: lighter;
  }

  .post-body {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }

  .next-previous {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }

  .next-post-title,
  .previous-post-title {
    h3 {
      margin: 2.5rem 0;
    }
  }
`

const Post = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { next, previous } = pageContext

  return (
    <Layout>
      <StyledPost>
        <SEO title={post.frontmatter.title} />
        <h1 className="post-title">{post.frontmatter.title}</h1>
        <h4 className="post-date">{post.frontmatter.date}</h4>
        <div
          className="post-body"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        {/* <div className="next-previous">
          {previous && (
            <Link className="previous-post-title" to={previous.fields.slug}>
              <h3>Last Post: {previous.frontmatter.title}</h3>
            </Link>
          )}
          {next && (
            <Link className="next-post-title" to={next.fields.slug}>
              <h3>Next Post: {next.frontmatter.title}</h3>
            </Link>
          )}
        </div> */}
      </StyledPost>
    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
  query POST_MARKDOWN_QUERY($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MM/DD/YYYY")
        tags
        description
      }
    }
  }
`
