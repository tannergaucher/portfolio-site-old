import React from "react"
import styled from "styled-components"
import { FormNextLink } from "grommet-icons"

import { ProjectCard } from "."
import { Link, AnimatedTitleArrow } from "../styles"
import { useProjects } from "../hooks"

const StyledProjects = styled.div`
  margin-bottom: var(--space-xl);

  .container {
    max-width: var(--container);
    margin: 0 auto;
  }

  .project-cards-grid {
    padding: 0 var(--space-md) 0 var(--space-md);
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
        <Link to="/projects">
          <AnimatedTitleArrow>
            <h4 className="section-title">Projects</h4>
            <FormNextLink className="arrow" size="var(--text-md)" />
          </AnimatedTitleArrow>
        </Link>
        <p>
          I like to use React, GraphQL, Gatsby, Apollo Client, Apollo Server,
          AWS Lambda functions, MongoDB, Prisma, Styled Components.
        </p>
      </div>

      <br />

      <div className="project-cards-grid">
        {edges.map(edge => (
          <ProjectCard key={edge.node.id} project={edge.node} />
        ))}
      </div>
    </StyledProjects>
  )
}