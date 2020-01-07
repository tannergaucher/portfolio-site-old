import React from "react"
import styled from "styled-components"

import { Button } from "../styles"

const StyledProjectCard = styled.div`
  margin-bottom: var(--space-xl);

  .project-title {
    color: var(--href-color);

    &:hover {
      text-decoration: underline;
    }
  }

  .href-btns {
    margin-top: var(--space-md);
  }

  .repo-btn {
    margin-right: var(--space-md);
  }
`

export default function ProjectCard({ project }) {
  return (
    <StyledProjectCard>
      <h4 className="project-title">{project.frontmatter.title}</h4>
      <small className="project-description">
        {project.frontmatter.description}
      </small>
      <div className="href-btns">
        <Button className="repo-btn">Repository</Button>
        <Button className="deployed-btn">Deployed</Button>
      </div>
    </StyledProjectCard>
  )
}
