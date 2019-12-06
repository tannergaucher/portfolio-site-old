import React from "react"

import { ProjectCard } from "."
import { Divider, Link } from "../styles"
import { useLatestProjects } from "../hooks"

export default function LatestProjects() {
  const { edges } = useLatestProjects()

  return (
    <>
      <Divider />
      <h2 className="section-title">Projects</h2>
      {edges.map(edge => (
        <ProjectCard key={edge.node.id} project={edge.node} />
      ))}
      <Link to={`/projects`}>
        <h3>View All Projects</h3>
      </Link>
    </>
  )
}
