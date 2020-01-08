import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby"
import { camelCase } from "lodash"

import { Link, Button } from "../styles"

const StyledPostCard = styled.div`
  transition: var(--transition);
  margin-bottom: var(--space-xl);

  .post-title {
    color: var(--href-color);
  }

  .post-tags {
    margin-top: var(--space-md);
  }

  .post-tag {
    margin-right: var(--space-md);
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
        <small className="post-description">
          {post.frontmatter.description}
        </small>
        <br />
      </Link>
      <div className="post-tags">
        {post.frontmatter.tags.map(tag => (
          <Button
            className="post-tag"
            key={tag}
            onClick={() => {
              navigate(`/posts/${camelCase(tag)}`)
            }}
          >
            {tag}
          </Button>
        ))}
      </div>
    </StyledPostCard>
  )
}
