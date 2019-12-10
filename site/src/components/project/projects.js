import React from "react"
import styled from "styled-components"

import { ProjectCard } from "."
import { ContentGrid } from "../styles"
import { useLatestProjects } from "../hooks"
import { ViewAll } from "../elements"

const StyledProjects = styled.div`
  margin-bottom: var(--space-xl);
`

export default function Projects() {
  const { edges } = useLatestProjects()

  return (
    <StyledProjects>
      <h4 className="section-title"> Projects</h4>
      <p>
        Some technologies I like to use are React, GraphQL, Gatsby, Apollo
        Client, Apollo Server, AWS Lambda functions, MongoDB, Prisma, Styled
        Components.
      </p>

      <ViewAll to="/projects" />

      <br />
      <ContentGrid>
        {edges.map(edge => (
          <ProjectCard key={edge.node.id} project={edge.node} />
        ))}
      </ContentGrid>
    </StyledProjects>
  )
}
