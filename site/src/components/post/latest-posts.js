import React from "react"
import { navigate } from "gatsby"

import { PostCard } from "."
import { useLatestPosts } from "../hooks"
import { StyledSection, Button } from "../styles"

export default function LatestPosts() {
  const { edges } = useLatestPosts()
  return (
    <StyledSection>
      <h2 className="section-title">
        <span role="img">✍️</span> Latest Posts{" "}
      </h2>
      {edges.map(edge => (
        <PostCard key={edge.node.id} post={edge.node} />
      ))}
      <Button onClick={() => navigate(`/posts`)}>View All Posts</Button>
    </StyledSection>
  )
}
