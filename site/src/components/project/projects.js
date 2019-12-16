import React from "react"
import styled from "styled-components"

import { ProjectCard } from "."
import { ContentGrid } from "../styles"
import { useLatestProjects } from "../hooks"
import { ViewAll } from "../elements"

const StyledProjects = styled.div`
  margin-bottom: var(--space-xl);

  .container {
    max-width: var(--container);
    margin: 0 auto;
  }

  .section-title {
    font-weight: 900;
  }
`

export default function Projects() {
  const { edges } = useLatestProjects()

  return (
    <StyledProjects>
      <div className="container">
        <h4 className="section-title"> Projects</h4>
        <p>
          Some technologies I like to use are: React, GraphQL, Gatsby, Apollo
          Client, Apollo Server, AWS Lambda, MongoDB, Prisma, Styled Components,
          Netlify.
        </p>
        <ViewAll to="/projects" />
        <br />
      </div>
      <ContentGrid responsive>
        {edges.map(edge => (
          <ProjectCard key={edge.node.id} project={edge.node} />
        ))}
      </ContentGrid>
    </StyledProjects>
  )
}
