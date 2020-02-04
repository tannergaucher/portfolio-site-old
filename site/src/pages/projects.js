import { Layout, SEO } from "../components/elements"

import { ProjectCard } from "../components/project"
import React from "react"
import styled from "styled-components"
import { useProjects } from "../components/hooks"

const StyledProjectsPage = styled.div`
  max-width: var(--container);
  margin: var(--space-xl) auto;
`

export default function Projects({ location }) {
  const { edges } = useProjects()

  return (
    <Layout location={location} noContainer="true">
      <StyledProjectsPage>
        <SEO title="Projects" />
        {edges.map(edge => (
          <ProjectCard key={edge.node.id} project={edge.node} />
        ))}
      </StyledProjectsPage>
    </Layout>
  )
}
