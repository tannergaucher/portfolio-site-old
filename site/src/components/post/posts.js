import { Button, Link } from "../styles"

import { PostCard } from "../post"
import React from "react"
import { ViewAllLink } from "../elements"
import styled from "styled-components"
import { useLatestPost } from "../hooks"

const StyledPosts = styled.div`
  margin: var(--space-xl) 0;

  .all-posts {
    font-weight: 900;
    margin-bottom: var(--space-xl);
    text-transform: uppercase;
  }
`

export default function Posts() {
  const { edges } = useLatestPost()

  return (
    <StyledPosts>
      <Link to="/posts" className="all-posts-link" none="true">
        <h2 className="all-posts">All Posts &#8594;</h2>
      </Link>
      {edges.map(edge => (
        <PostCard post={edge.node} key={edge.node.id} />
      ))}
    </StyledPosts>
  )
}
