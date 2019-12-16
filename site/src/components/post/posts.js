import React from "react"
import styled from "styled-components"

import { useLatestPost } from "../hooks"
import { PostCard } from "../post"
import { ViewAll } from "../elements"
import { ContentGrid } from "../styles"

const StyledPosts = styled.div`
  margin-bottom: var(--space-xl);

  .container {
    max-width: var(--container);
    margin: 0 auto;
  }

  .section-title {
    font-weight: 900;
  }
`

export default function Posts() {
  const { edges } = useLatestPost()

  return (
    <StyledPosts>
      <div className="container">
        <h4 className="section-title">Posts</h4>
        <p className="posts-section-description">
          On self-learning, modern JavaScript, web development.
        </p>
        <ViewAll to="/posts" />
        <br />
      </div>
      <ContentGrid responsive>
        {edges.map(edge => (
          <PostCard post={edge.node} key={edge.node.id} />
        ))}
      </ContentGrid>
    </StyledPosts>
  )
}
