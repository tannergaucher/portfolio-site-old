import React from "react"
import { graphql, navigate } from "gatsby"
import styled from "styled-components"

import { SEO, Layout } from "../components/elements"
import { StyledPage, Button } from "../components/styles"

const StyledPost = styled(StyledPage)`
  .post-title {
    font-weight: 900;
    margin-top: 0;
    margin-bottom: 1rem;
  }

  .post-date {
    font-weight: lighter;
    font-family: var(--mono);
    margin-bottom: 1rem;
    margin-top: 0;
  }

  .post-description {
    font-family: var(--mono);
  }

  .post-body {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }

  .next-prev-btns {
    margin-bottom: 3rem;
  }

  .next-prev {
    margin-top: 0;
    margin-bottom: 1rem;
    text-align: center;
  }

  .next-post-title,
  .prev-post-title {
    margin-top: 0;
    margin-bottom: 0;
  }

  .next-prev-btn {
    margin-bottom: 2rem;
    width: 100%;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: 768px) {
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
        <h4 className="post-date">{post.frontmatter.date}</h4>
        <h1 className="post-title">{post.frontmatter.title}</h1>
        <p className="post-description">{post.frontmatter.description}</p>
        <div
          className="post-body"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <div className="next-prev-btns">
          {next && (
            <Button
              className="next-prev-btn"
              onClick={() => navigate(`/${next.fields.slug}`)}
            >
              <h3 className="next-prev"> Next </h3>
              <h3 className="next-post-title">{next.frontmatter.title}</h3>
            </Button>
          )}
          {previous && (
            <Button
              className="next-prev-btn"
              onClick={() => navigate(`/${previous.fields.slug}`)}
            >
              <h3 className="next-prev"> Previous</h3>
              <h3 className="prev-post-title">{previous.frontmatter.title}</h3>
            </Button>
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
