import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby"
import { kebabCase } from "lodash"

import { Link, Button } from "../styles"

const StyledPostCard = styled.div`
  margin-bottom: var(--space-xl);
  transition: var(--transition);

  .post-title {
    font-weight: 900;
    color: var(--text-color);
  }
`

export default function PostCard({ post }) {
  return (
    <StyledPostCard>
      <Link to={post.fields.slug} className="inherit none">
        <h2 className="post-title">{post.frontmatter.title}</h2>
      </Link>
      <p className="post-description">{post.frontmatter.description}</p>
      {post.frontmatter.tags.map(tag => (
        <Link key={tag} className="nav-link" to={`/posts/${kebabCase(tag)}`}>
          {tag}
        </Link>
      ))}
    </StyledPostCard>
  )
}
