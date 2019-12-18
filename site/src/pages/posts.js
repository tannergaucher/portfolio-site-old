import React from "react"

import { Layout } from "../components/elements"
import { useAllPosts } from "../components/hooks"
import { PostCard } from "../components/post"
import { ContentGrid, StyledPage } from "../components/styles"

export default function PostsPage({ location }) {
  const { edges } = useAllPosts()

  return (
    <Layout location={location}>
      <StyledPage>
        <div className="container">
          <h1 className="page-title">Posts</h1>
        </div>
        <br />
        {edges.map(edge => (
          <PostCard key={edge.node.id} post={edge.node} />
        ))}
      </StyledPage>
    </Layout>
  )
}
