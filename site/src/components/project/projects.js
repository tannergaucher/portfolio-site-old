import React from "react"
import styled from "styled-components"

import { ProjectCard } from "."
import { Link } from "../styles"
import { useProjects } from "../hooks"

const StyledProjects = styled.div`
  .container {
    max-width: var(--container);
    margin: 0 auto;
  }

  .section-title {
    font-weight: 900;
  }

  .project-cards-grid {
    padding: var(--space-md);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: var(--space-md);
  }
`

export default function Projects() {
  const { edges } = useProjects()

  return (
    <StyledProjects>
      <div className="container">
        <Link to="/projects" none>
          <h4 className="section-title">Projects</h4>
        </Link>
        <p>Some things that I've made.</p>
      </div>

      <div className="project-cards-grid">
        {edges.map(edge => (
          <ProjectCard key={edge.node.id} project={edge.node} />
        ))}
      </div>
    </StyledProjects>
  )
}
