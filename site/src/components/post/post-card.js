import React from "react"
import styled from "styled-components"

import { Link } from "../styles"

const StyledPostCard = styled.div`
  transition: var(--transition);
  margin-bottom: var(--space-xl);

  .post-title {
    color: var(--href-color);
  }

  .post-tag {
    margin-right: var(--space-md);
    text-transform: uppercase;
    font-family: var(--mono);
  }

  &:hover {
    .post-title {
      text-decoration: underline;
      transition: var(--transition);
    }
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
