import React from "react"
import styled from "styled-components"
import { FormNextLink } from "grommet-icons"

import { ProjectCard } from "."
import { Link, AnimatedTitleArrow, ContentGrid } from "../styles"
import { useProjects } from "../hooks"

const StyledProjects = styled.div`
  margin-bottom: var(--space-xl);
`

export default function Projects() {
  const { edges } = useProjects()

  return (
    <StyledProjects>
      <Link to="/projects">
        <AnimatedTitleArrow>
          <h4 className="section-title">Projects</h4>
          <FormNextLink className="arrow" size="var(--text-lg)" />
        </AnimatedTitleArrow>
      </Link>
      <p>
        Some technologies I like to use are React, GraphQL, Gatsby, Apollo
        Client, Apollo Server, AWS Lambda functions, MongoDB, Prisma, Styled
        Components.
      </p>
      <br />
      <ContentGrid>
        {edges.map(edge => (
          <ProjectCard key={edge.node.id} project={edge.node} />
        ))}
      </ContentGrid>
    </StyledProjects>
  )
}
