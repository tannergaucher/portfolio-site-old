import { Button, Link } from "../styles"

import { PostCard } from "../post"
import React from "react"
import { ViewAllLink } from "../elements"
import styled from "styled-components"
import { useLatestPost } from "../hooks"

const StyledPosts = styled.div`
  margin: var(--space-xl) 0;

  .view-all {
    font-weight: 900;
  }
`

export default function Posts() {
  const { edges } = useLatestPost()

  return (
    <StyledPosts>
      {edges.map(edge => (
        <PostCard post={edge.node} key={edge.node.id} />
      ))}
      <Link to="/posts" none="true">
        <h2 className="view-all">All Posts &#8594;</h2>
      </Link>
    </StyledPosts>
  )
}
