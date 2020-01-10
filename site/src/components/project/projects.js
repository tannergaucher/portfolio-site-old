import React from "react"
import styled from "styled-components"

import { ProjectCard } from "."
import { useLatestProjects } from "../hooks"
import { SectionTitle } from "../elements"

const StyledProjects = styled.div`
  margin-bottom: var(--space-xl);
`

export default function Projects() {
  const { edges } = useLatestProjects()

  return (
    <StyledProjects>
      <SectionTitle to="/projects" sectionTitle="Projects" />
      {edges.map(edge => (
        <ProjectCard key={edge.node.id} project={edge.node} />
      ))}
      <br />
    </StyledProjects>
  )
}
