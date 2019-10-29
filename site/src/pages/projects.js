import React from "react"

import { Layout } from "../components/elements"
import { StyledPage } from "../components/styles"
import { useAllProjects } from "../components/hooks"
import { ProjectCard } from "../components/project"

export default function Projects() {
  const { edges } = useAllProjects()

  return (
    <Layout>
      <StyledPage>
        {edges.map(edge => (
          <ProjectCard key={edge.node.id} project={edge.node} />
        ))}
      </StyledPage>
    </Layout>
  )
}
