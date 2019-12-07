import React from "react"

import { Layout } from "../components/elements"
import { StyledPage } from "../components/styles"
import { useProjects } from "../components/hooks"
import { ProjectCard } from "../components/project"

export default function Projects({ location }) {
  const { edges } = useProjects()

  return (
    <Layout location={location}>
      <StyledPage>
        {edges.map(edge => (
          <ProjectCard key={edge.node.id} project={edge.node} />
        ))}
      </StyledPage>
    </Layout>
  )
}
