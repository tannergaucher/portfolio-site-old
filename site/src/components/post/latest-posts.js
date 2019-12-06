import React from "react"

import { PostCard } from "."
import { useLatestPosts } from "../hooks"
import { Link } from "../styles"

export default function LatestPosts() {
  const { edges } = useLatestPosts()
  return (
    <>
      {edges.map(edge => (
        <PostCard key={edge.node.id} post={edge.node} />
      ))}
      <Link className="view-all-btn" to={`/posts`} primary>
        <h3>View All Posts</h3>
      </Link>
    </>
  )
}
