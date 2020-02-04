import { Link } from "../styles"
import { ProjectCard } from "."
import React from "react"
import styled from "styled-components"
import { useLatestProjects } from "../hooks"

const StyledProjects = styled.div`
  margin-bottom: var(--space-xl);
  margin: 0 auto;
  padding: var(--space-sm);
  max-width: var(--container);

  .all-projects {
    font-weight: 900;
    margin-bottom: var(--space-xl);
    text-transform: uppercase;
    letter-spacing: var(--caps-letter-spacing);
  }
`

export default function Projects() {
  const { edges } = useLatestProjects()

  return (
    <StyledProjects>
      <Link to="/projects" none="true">
        <h2 className="all-projects">All Projects</h2>
      </Link>
      {edges.map(edge => (
        <ProjectCard key={edge.node.id} project={edge.node} />
      ))}
    </StyledProjects>
  )
}
