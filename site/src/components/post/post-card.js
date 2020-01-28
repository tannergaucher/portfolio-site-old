import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby"
import { camelCase } from "lodash"

import { Link, Button } from "../styles"

const StyledPostCard = styled.div`
  margin-bottom: var(--space-xl);

  .post-title {
    color: var(--href-color);
    margin-bottom: var(--space-md);
  }

  .post-description {
    margin-bottom: 0;
    color: var(--grey);
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
      <Link to={post.fields.slug} none="true" inherit="true">
        <h3 className="post-title">{post.frontmatter.title}</h3>
        <p className="post-description">{post.frontmatter.description}</p>
      </Link>
      <br />
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
      <br />
    </StyledPostCard>
  )
}
