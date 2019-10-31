import React from "react"
import styled from "styled-components"

import { Link } from "../styles"

const StyledPost = styled.div`
  margin-bottom: 4rem;

  .post-date {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: lighter;
    font-family: var(--mono);
  }
  .post-title {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  .post-description {
    margin-top: 0;
    font-weight: lighter;
    font-family: var(--mono);
  }
`

export default function Post({ post }) {
  return (
    <StyledPost>
      <Link to={post.fields.slug}>
        <h5 className="post-date">{post.frontmatter.date}</h5>
        <h2 className="post-title">{post.frontmatter.title}</h2>
        <p className="post-description">{post.frontmatter.description}</p>
      </Link>
    </StyledPost>
  )
}
