import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import { Link } from "../styles"

const StyledPostCard = styled.div`
  margin: var(--space-lg) 0;
  border-radius: var(--radius-lg);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  .post-title {
    font-weight: 900;
  }

  .post-info {
    padding: var(--space-sm);
    background: var(--white);
    border-radius: var(--radius-lg);
  }

  .post-image {
    border-top-left-radius: var(--radius-lg);
    border-top-right-radius: var(--radius-lg);
    max-height: 400px;
  }

  .post-time-to-read {
    text-transform: uppercase;
  }

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`

export default function PostCard({ post }) {
  return (
    <StyledPostCard>
      <Link to={post.fields.slug} none inherit>
        <Img
          className="post-image"
          fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
        />
        <div className="post-info">
          <h4 className="post-title">{post.frontmatter.title}</h4>
          <p className="post-description">{post.frontmatter.description}</p>
          <small className="post-time-to-read">
            {post.timeToRead} min read
          </small>
        </div>
      </Link>
    </StyledPostCard>
  )
}
