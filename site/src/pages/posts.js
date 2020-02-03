import { Layout, SEO } from "../components/elements"

import { PostCard } from "../components/post"
import React from "react"
import { useAllPosts } from "../components/hooks"

export default function PostsPage({ location }) {
  const { edges } = useAllPosts()

  return (
    <Layout location={location}>
      <SEO title="Posts" />
      {edges.map(edge => (
        <PostCard key={edge.node.id} post={edge.node} />
      ))}
    </Layout>
  )
}
