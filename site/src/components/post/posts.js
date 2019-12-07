import React from "react"
import styled from "styled-components"
import { FormNextLink } from "grommet-icons"

import { useLatestPost } from "../hooks"
import { PostCard } from "../post"
import { Link, AnimatedTitleArrow } from "../styles"

const StyledPosts = styled.div`
  max-width: var(--container);
  margin: 0 auto;
`

export default function Posts() {
  const { edges } = useLatestPost()

  return (
    <StyledPosts>
      <Link to="/posts" inherit>
        <AnimatedTitleArrow>
          <h4 className="section-title">Posts</h4>
          <FormNextLink className="arrow" size="var(--text-md)" />
        </AnimatedTitleArrow>
      </Link>
      <p>On self-learning, modern JavaScript, web development.</p>
      {edges.map(edge => (
        <PostCard post={edge.node} key={edge.node.id} />
      ))}
      <br />
    </StyledPosts>
  )
}
