import React from "react"
import styled from "styled-components"

import { ProjectCard } from "."
import { useLatestProjects } from "../hooks"
import { Link } from "../styles"

const StyledProjects = styled.div`
  margin-bottom: var(--space-xl);
`

export default function Projects() {
  const { edges } = useLatestProjects()

  return (
    <StyledProjects>
      {edges.map(edge => (
        <ProjectCard key={edge.node.id} project={edge.node} />
      ))}
      <Link to="/projects" none="true">
        <h2>View All Projects</h2>
      </Link>
    </StyledProjects>
  )
}
