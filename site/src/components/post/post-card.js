import { Button, Link } from "../styles"

import React from "react"
import { kebabCase } from "lodash"
import { navigate } from "gatsby"
import styled from "styled-components"

const StyledPostCard = styled.div`
  margin-bottom: var(--space-xl);

  .post-title {
    font-weight: 900;
  }

  .nav-link {
    font-weight: bolder;
    font-family: var(--mono);
  }
`

export default function PostCard({ post }) {
  return (
    <StyledPostCard>
      <Link to={post.fields.slug} className="post-title-link" none="true">
        <h3 className="post-title">{post.frontmatter.title}</h3>
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
