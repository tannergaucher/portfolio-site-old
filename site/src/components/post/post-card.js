import React from "react"
import styled from "styled-components"

import { Link } from "../styles"

const StyledPostCard = styled.div`
  margin-bottom: var(--space-xl);

  .post-date {
    margin-bottom: var(--space-sm);
  }

  .post-title {
    margin-top: 0;
    margin-bottom: var(--space-sm);
  }

  .post-description {
    margin-top: 0;
  }
`

export default function PostCard({ post }) {
  return (
    <StyledPostCard>
      <Link to={post.fields.slug} none inherit>
        <h4 className="post-date">{post.frontmatter.date}</h4>
        <h2 className="post-title">{post.frontmatter.title}</h2>
        <h4 className="post-description">{post.frontmatter.description}</h4>
      </Link>
    </StyledPostCard>
  )
}
