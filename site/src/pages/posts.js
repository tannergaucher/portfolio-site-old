import { Layout, SEO } from "../components/elements"

import { PostCard } from "../components/post"
import React from "react"
import styled from "styled-components"
import { useAllPosts } from "../components/hooks"

const StyledPostsPage = styled.div`
  margin: var(--space-xl) auto;
  max-width: var(--container);
`

export default function PostsPage({ location }) {
  const { edges } = useAllPosts()

  return (
    <Layout location={location} noContainer="true">
      <StyledPostsPage>
        {edges.map(edge => (
          <PostCard key={edge.node.id} post={edge.node} />
        ))}
      </StyledPostsPage>
    </Layout>
  )
}
