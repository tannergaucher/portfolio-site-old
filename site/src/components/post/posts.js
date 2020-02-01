import React from "react"
import styled from "styled-components"

import { useLatestPost } from "../hooks"
import { PostCard } from "../post"
import { Button, Link } from "../styles"
import { ViewAllLink } from "../elements"

const StyledPosts = styled.div`
  margin: var(--space-xl) 0;
`

export default function Posts() {
  const { edges } = useLatestPost()

  return (
    <StyledPosts>
      {edges.map(edge => (
        <PostCard post={edge.node} key={edge.node.id} />
      ))}
      <Link to="/posts" none="true">
        <h2>View All Posts </h2>
      </Link>
    </StyledPosts>
  )
}
