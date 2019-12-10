import React from "react"
import styled from "styled-components"
import { FormNextLink } from "grommet-icons"

import { useLatestPost } from "../hooks"
import { PostCard } from "../post"
import { Link, ContentGrid } from "../styles"
import { ViewAll } from "../elements"

const StyledPosts = styled.div`
  margin-bottom: var(--space-xl);

  .section-title {
    font-weight: 900;
  }
`

export default function Posts() {
  const { edges } = useLatestPost()

  return (
    <StyledPosts>
      <h4 className="section-title">Posts</h4>

      <p className="posts-section-description">
        On self-learning, modern JavaScript, web development.
      </p>

      <ViewAll to="/posts" />

      {/* <Link to="/posts" inherit>
        <AnimatedTitleArrow>
          <p className="view-all">View all</p>
          <FormNextLink className="arrow" size="var(--text-lg)" />
        </AnimatedTitleArrow>
      </Link> */}

      <br />
      <ContentGrid>
        {edges.map(edge => (
          <PostCard post={edge.node} key={edge.node.id} />
        ))}
      </ContentGrid>
    </StyledPosts>
  )
}
