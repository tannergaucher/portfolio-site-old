import React from "react"
import styled from "styled-components"

import { Link } from "../styles"

const StyledPost = styled.div`
  margin-bottom: var(--card-margin-bottom);

  .post-date {
    margin-top: 0;
    margin-bottom: 1rem;
    font-weight: lighter;
    font-family: var(--mono);
  }

  .post-title {
    margin-top: 0;
    margin-bottom: 1rem;
    font-weight: 900;
  }

  .post-description {
    margin-top: 0;
    margin-bottom: 0;
    font-weight: lighter;
    font-family: var(--mono);
  }
`

export default function Post({ post }) {
  return (
    <StyledPost>
      <Link to={post.fields.slug} none inherit>
        {/* <h5 className="post-date">{post.frontmatter.date}</h5> */}
        <h2 className="post-title">{post.frontmatter.title}</h2>
        <p className="post-description">{post.frontmatter.description}</p>
      </Link>
    </StyledPost>
  )
}
