import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby"
import { kebabCase } from "lodash"

import { Link, Button } from "../styles"

const StyledPostCard = styled.div`
  margin-bottom: var(--space-xl);
  transition: var(--transition);

  .post-description {
    color: var(--grey);
    font-weight: lighter;
    margin-right: var(--space-sm);
  }

  .post-tag {
    margin-right: var(--space-md);
  }
`

export default function PostCard({ post }) {
  return (
    <StyledPostCard>
      <div className="text-flex">
        <h3 className="post-title">
          <Link to={post.fields.slug}>
            {post.frontmatter.title}{" "}
            <span className="post-description text--md">
              {post.frontmatter.description}{" "}
            </span>
          </Link>
          {post.frontmatter.tags.map(tag => (
            <Link className="post-tag text--sm" to={`/posts/${kebabCase(tag)}`}>
              {tag}
            </Link>
          ))}
        </h3>
      </div>
    </StyledPostCard>
  )
}
