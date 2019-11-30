import React from "react"
import styled from "styled-components"

import { Link } from "../styles"

const StyledPost = styled.div``

export default function Post({ post }) {
  return (
    <StyledPost>
      <Link to={post.fields.slug} none inherit>
        <h5 className="post-date">{post.frontmatter.date}</h5>
        <h2 className="post-title">{post.frontmatter.title}</h2>
        <p className="post-description">{post.frontmatter.description}</p>
      </Link>
    </StyledPost>
  )
}
