import React from "react"
import styled from "styled-components"

import { Link } from "../styles"

const StyledPostCard = styled.div`
  margin-bottom: var(--space-lg) 0;
  border-radius: var(--radius-lg);
  margin-bottom: var(--space-md);
  padding: var(--space-md);
  background: var(--bg-2);
  border-radius: var(--radius-lg);
  transition: var(--transition);

  .post-title {
    margin-top: 0;
    margin-bottom: var(--space-md);
    color: var(--href-color);
  }

  .post-tag {
    margin-right: var(--space-md);
    text-transform: uppercase;
    font-family: var(--mono);
  }

  .post-description {
    margin-bottom: var(--space-md);
  }

  &:hover {
    box-shadow: var(--elevation-2);
  }
`

export default function PostCard({ post }) {
  return (
    <StyledPostCard>
      <Link to={post.fields.slug} none inherit>
        <h4 className="post-title">{post.frontmatter.title}</h4>
        <p className="post-description">{post.frontmatter.description}</p>
        {post.frontmatter.tags.map(tag => (
          <small className="post-tag" key={tag}>
            {tag}
          </small>
        ))}
      </Link>
    </StyledPostCard>
  )
}
