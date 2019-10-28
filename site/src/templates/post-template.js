import React from "react"
import { graphql } from "gatsby"
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
`

const Post = ({ data, pageContext }) => {
  const post = data.markdownRemark
  //TODO:  const { next, previous } = pageContext

  return (
    <Layout>
      <StyledPost>
        <SEO title={post.frontmatter.title} />
        <h1 className="post-title">{post.frontmatter.title}</h1>
        <p className="post-description">{post.frontmatter.description}</p>
        <h4 className="post-date">{post.frontmatter.date}</h4>
        <div
          className="post-body"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </StyledPost>
    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
  query POST_MARKDOWN_QUERY($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      ...PostFragment
    }
  }
`
