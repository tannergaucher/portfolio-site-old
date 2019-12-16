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
    margin-top: 0;
  }

  .post-tag {
    margin-right: var(--space-md);
    text-transform: uppercase;
    font-family: var(--mono);
    filter: var(--opacity);
    transition: var(--transition);
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
    .post-tag {
      filter: opacity(1);
    }
  }
`

export default function PostCard({ post }) {
  return (
    <Link to={post.fields.slug} none>
      <StyledPostCard>
        {/* <small className="post-date">{post.frontmatter.date}</small> */}
        <h3 className="post-title">{post.frontmatter.title}</h3>
        <p className="post-description">{post.frontmatter.description}</p>
        <br />
        {post.frontmatter.tags.map(tag => (
          <small className="post-tag" key={tag}>
            {tag}
          </small>
        ))}
      </StyledPostCard>
    </Link>
  )
}
