import React from "react"
import styled from "styled-components"

import { Layout } from "../components/elements"
import { useAllPosts } from "../components/hooks"
import { PostCard } from "../components/post"

const StyledPostsPage = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: var(--space-xl) auto;
  max-width: var(--container);
  grid-gap: var(--space-md);
  padding-left: var(--space-sm);
  padding-right: var(--space-sm);
`

export default function PostsPage({ location }) {
  const { edges } = useAllPosts()

  return (
    <Layout location={location}>
      <StyledPostsPage>
        {edges.map(edge => (
          <PostCard key={edge.node.id} post={edge.node} />
        ))}
      </StyledPostsPage>
    </Layout>
  )
}
