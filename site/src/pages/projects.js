import React from "react"

import { SEO, Layout } from "../components/elements"
import { StyledPage } from "../components/styles"
import { useProjects } from "../components/hooks"
import { ProjectCard } from "../components/project"

export default function Projects({ location }) {
  const { edges } = useProjects()

  return (
    <Layout location={location}>
      <SEO title="Projects" />
      <StyledPage>
        <br />
        {edges.map(edge => (
          <ProjectCard key={edge.node.id} project={edge.node} />
        ))}
      </StyledPage>
    </Layout>
  )
}
