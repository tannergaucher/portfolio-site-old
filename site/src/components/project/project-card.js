import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import { Link } from "../styles"

const StyledProject = styled.div`
  overflow: hidden;
  box-shadow: var(--box-shadow);
  padding: var(--space-sm);
  border-radius: var(--radius-lg);
  background: var(--bg-2);

  .project-title {
    margin-top: 0;
  }

  .project-card-img {
    max-height: 300px;
    right: -30%;
    top: 30px;
    transform: rotate3d(0.342, -0.2, 0, 22deg) rotateZ(7deg);
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    transition: var(--transition);
    filter: var(--opacity);
  }

  &:hover {
    .project-card-img {
      box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.3);
      transform: rotate3d(0.342, -0.2, 0, 12deg) rotateZ(3deg);
      filter: opacity(1);
    }
  }
`

export default function ProjectCard({ project }) {
  return (
    <StyledProject>
      <Link to={`/projects/${project.fields.slug}`} none>
        <h4 className="project-title">{project.frontmatter.title}</h4>
        <Img
          className="project-card-img"
          fluid={project.frontmatter.cardImage.childImageSharp.fluid}
        />
      </Link>
    </StyledProject>
  )
}
