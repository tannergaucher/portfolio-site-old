import React from "react"
import styled from "styled-components"

import { useLatestPost } from "../hooks"
import { PostCard } from "../post"
import { ContentGrid } from "../styles"
import { ViewAll } from "../elements"

const StyledPosts = styled.div`
  margin-bottom: var(--space-xl);

  .section-title {
    font-weight: 900;
  }
`

export default function Posts() {
  const { edges } = useLatestPost()

  return (
    <StyledPosts>
      <h4 className="section-title">Posts</h4>
      <p className="posts-section-description">
        On self-learning, modern JavaScript, web development.
      </p>
      <ViewAll to="/posts" />
      <br />
      <ContentGrid>
        {edges.map(edge => (
          <PostCard post={edge.node} key={edge.node.id} />
        ))}
      </ContentGrid>
    </StyledPosts>
  )
}
