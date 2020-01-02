import React from "react"
import styled from "styled-components"

import { useLatestPost } from "../hooks"
import { PostCard } from "../post"
import { Link } from "../styles"
import { SectionTitle } from "../elements"

const StyledPosts = styled.div`
  margin-top: var(--space-xl);
  margin-bottom: var(--space-xl);
`

export default function Posts() {
  const { edges } = useLatestPost()

  return (
    <StyledPosts>
      <SectionTitle to="/posts" sectionTitle="Posts" />
      {edges.map(edge => (
        <PostCard post={edge.node} key={edge.node.id} />
      ))}
      <br />
    </StyledPosts>
  )
}
