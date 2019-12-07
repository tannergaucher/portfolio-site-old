import React from "react"
import styled from "styled-components"

import { useLatestPost } from "../hooks"
import { PostCard } from "../post"
import { Link } from "../styles"

const StyledPosts = styled.div`
  max-width: var(--container);
  margin: 0 auto;

  .section-title {
    font-weight: 900;
  }
`

export default function Posts() {
  const { edges } = useLatestPost()

  return (
    <StyledPosts>
      <Link to="/posts" inherit none>
        <h4 className="section-title">Posts</h4>
      </Link>
      <p>On self-learning, modern JavaScript, web development.</p>
      {edges.map(edge => (
        <PostCard post={edge.node} key={edge.node.id} />
      ))}
    </StyledPosts>
  )
}
