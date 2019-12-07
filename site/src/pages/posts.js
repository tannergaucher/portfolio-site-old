import React from "react"

import { Layout } from "../components/elements"
import { StyledPage } from "../components/styles"
import { useAllPosts } from "../components/hooks"
import { PostCard } from "../components/post"

export default function PostsPage({ location }) {
  const { edges } = useAllPosts()

  return (
    <Layout location={location}>
      <StyledPage>
        {edges.map(edge => (
          <PostCard key={edge.node.id} post={edge.node} />
        ))}
      </StyledPage>
    </Layout>
  )
}
