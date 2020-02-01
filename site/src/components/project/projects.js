import { Link } from "../styles"
import { ProjectCard } from "."
import React from "react"
import styled from "styled-components"
import { useLatestProjects } from "../hooks"

const StyledProjects = styled.div`
  margin-bottom: var(--space-xl);

  .view-all {
    font-weight: 900;
  }
`

export default function Projects() {
  const { edges } = useLatestProjects()

  return (
    <StyledProjects>
      {edges.map(edge => (
        <ProjectCard key={edge.node.id} project={edge.node} />
      ))}
      <Link to="/projects" none="true">
        <h2 className="view-all">All Projects &#8594;</h2>
      </Link>
    </StyledProjects>
  )
}
