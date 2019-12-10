import React from "react"
import styled from "styled-components"
import { FormNextLink } from "grommet-icons"

import { useLatestPost } from "../hooks"
import { PostCard } from "../post"
import { Link, AnimatedTitleArrow } from "../styles"

const StyledPosts = styled.div`
  margin-bottom: var(--space-xl);

  .container {
    max-width: var(--container);
    margin: 0 auto;
  }

  .posts-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: var(--space-md);
  }
`

export default function Posts() {
  const { edges } = useLatestPost()

  return (
    <StyledPosts>
      <div className="container">
        <Link to="/posts" inherit>
          <AnimatedTitleArrow>
            <h4 className="section-title">Posts</h4>
            <FormNextLink className="arrow" size="var(--text-lg)" />
          </AnimatedTitleArrow>
        </Link>
        <p className="posts-section-description">
          On self-learning, modern JavaScript, web development.
        </p>

        <br />

        <div className="posts-grid">
          {edges.map(edge => (
            <PostCard post={edge.node} key={edge.node.id} />
          ))}
        </div>
      </div>
    </StyledPosts>
  )
}
