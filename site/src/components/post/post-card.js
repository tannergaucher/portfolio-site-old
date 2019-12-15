import React from "react"
import styled from "styled-components"

import { Link } from "../styles"

const StyledPostCard = styled.div`
  margin-bottom: var(--space-lg) 0;
  border-radius: var(--radius-lg);
  box-shadow: var(--elevation-1);
  margin-bottom: var(--space-md);
  padding: var(--space-md);
  background: var(--bg-2);
  border-radius: var(--radius-lg);
  transition: var(--transition);

  .post-title {
    font-weight: 900;
  }

  .post-date {
    font-family: var(--mono);
    filter: var(--opacity);
    transition: var(--transition);
  }

  .post-time-to-read {
    text-transform: uppercase;
  }

  .post-description {
    margin-bottom: 0;
    color: var(--text-color);
    filter: var(--opacity);
    transition: var(--transition);
  }

  &:hover {
    box-shadow: var(--elevation-2);

    .post-description,
    .post-date {
      filter: opacity(1);
    }
  }
`

export default function PostCard({ post }) {
  return (
    <Link to={post.fields.slug} none>
      <StyledPostCard>
        <small className="post-date">{post.frontmatter.date}</small>
        <h3 className="post-title">{post.frontmatter.title}</h3>
        <p className="post-description">{post.frontmatter.description}</p>
      </StyledPostCard>
    </Link>
  )
}
