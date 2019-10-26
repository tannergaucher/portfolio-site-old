import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledPost = styled.div`
  margin-bottom: 4rem;

  a {
    text-decoration: none;
    color: inherit;
  }

  .post-date {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: lighter;
  }
  .post-title {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  .post-description {
    margin-top: 0;
    font-weight: lighter;
  }
`

export default function Post({ post }) {
  return (
    <StyledPost>
      <Link to={post.fields.slug}>
        <h5 className="post-date">{post.frontmatter.date}</h5>
        <h3 className="post-title">{post.frontmatter.title}</h3>
        <p className="post-description">{post.frontmatter.description}</p>
      </Link>
    </StyledPost>
  )
}
