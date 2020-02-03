import { Layout, SEO } from "../components/elements"

import { ProjectCard } from "../components/project"
import React from "react"
import { useProjects } from "../components/hooks"

export default function Projects({ location }) {
  const { edges } = useProjects()

  return (
    <Layout location={location}>
      <SEO title="Projects" />
      {edges.map(edge => (
        <ProjectCard key={edge.node.id} project={edge.node} />
      ))}
    </Layout>
  )
}
