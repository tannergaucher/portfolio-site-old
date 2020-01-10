import React from "react"

import { Layout } from "../components/elements"
import { useAllPosts } from "../components/hooks"
import { PostCard } from "../components/post"
import { StyledPage } from "../components/styles"

export default function PostsPage({ location }) {
  const { edges } = useAllPosts()

  return (
    <Layout location={location}>
      <StyledPage>
        <h1>Posts</h1>
        <br />
        {edges.map(edge => (
          <PostCard key={edge.node.id} post={edge.node} />
        ))}
      </StyledPage>
    </Layout>
  )
}
