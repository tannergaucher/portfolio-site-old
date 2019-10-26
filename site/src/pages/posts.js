import React from "react"

import { Layout } from "../components/elements"
import { StyledPage } from "../components/styles"
import { useAllPosts } from "../components/hooks"
import { PostCard } from "../components/post"

export default function PostsPage() {
  const { edges } = useAllPosts()

  return (
    <Layout>
      <StyledPage>
        <h1 className="page-title">Posts</h1>
        {edges.map(edge => (
          <PostCard key={edge.node.id} post={edge.node} />
        ))}
      </StyledPage>
    </Layout>
  )
}
