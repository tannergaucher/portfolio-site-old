import React from "react"
import styled from "styled-components"

import { Link } from "../styles"

const StyledProjectCard = styled.div`
  margin-bottom: var(--space-xl);

  .project-title {
    color: var(--href-color);

    &:hover {
      text-decoration: underline;
    }
  }
`

export default function ProjectCard({ project }) {
  return (
    <StyledProjectCard>
      <Link to={`/projects/${project.fields.slug}`} none inherit>
        <h4 className="project-title">{project.frontmatter.title}</h4>
        <small className="project-description">
          {project.frontmatter.description}
        </small>
      </Link>
    </StyledProjectCard>
  )
}
