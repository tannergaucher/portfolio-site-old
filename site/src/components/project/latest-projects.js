import React from "react"
import { navigate } from "gatsby"

import { ProjectCard } from "."
import { StyledSection, Button } from "../styles"
import { useLatestProjects } from "../hooks"

export default function LatestProjects() {
  const { edges } = useLatestProjects()

  return (
    <StyledSection>
      <h2 className="section-title">Latest Projects</h2>
      {edges.map(edge => (
        <ProjectCard key={edge.node.id} project={edge.node} />
      ))}
      <Button
        className="view-all-btn"
        onClick={() => navigate(`/projects`)}
        primary
      >
        View All Projects
      </Button>
    </StyledSection>
  )
}
