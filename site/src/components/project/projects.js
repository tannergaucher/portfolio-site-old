import React from "react"
import styled from "styled-components"

import { ProjectCard } from "."
import { useLatestProjects } from "../hooks"
import { Button } from "../styles"
import { ViewAllLink } from "../elements"

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

      <ViewAllLink
        to="/projects"
        heading="More Projects"
        subHeading="Built with modern web tech including React, Apollo Client, Apollo Server, Gatsby, Styled Components, Node, Prisma, MongoDB, AWS Lambda"
      />

      <hr
        style={{
          border: `none`,
        }}
      />
    </StyledProjects>
  )
}
