import React from "react"

import { PostCard } from "."
import { useLatestPosts } from "../hooks"
import { StyledSection, Link } from "../styles"

export default function LatestPosts() {
  const { edges } = useLatestPosts()
  return (
    <StyledSection>
      <h2 className="section-title">Posts</h2>
      {edges.map(edge => (
        <PostCard key={edge.node.id} post={edge.node} />
      ))}
      <Link className="view-all-btn" to={`/posts`} primary>
        <h3>View All Posts</h3>
      </Link>
    </StyledSection>
  )
}
