import React from "react"
import styled from "styled-components"

import { useLatestPost } from "../hooks"
import { PostCard } from "../post"
import { SectionTitle } from "../elements"

const StyledPosts = styled.div`
  margin: var(--space-xl) 0;
`

export default function Posts() {
  const { edges } = useLatestPost()

  return (
    <StyledPosts>
      <SectionTitle to="/posts" sectionTitle="Posts" />
      {edges.map(edge => (
        <PostCard post={edge.node} key={edge.node.id} />
      ))}
    </StyledPosts>
  )
}
