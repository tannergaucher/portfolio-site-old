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
        <h1 className="page-title">Posts</h1>
        <br />
        <ContentGrid>
          {edges.map(edge => (
            <PostCard key={edge.node.id} post={edge.node} />
          ))}
        </ContentGrid>
      </StyledPage>
    </Layout>
  )
}
