import React, { useState } from "react"
import styled from "styled-components"

const StyledProject = styled.div``

export default function ProjectCard({ project }) {
  return (
    <StyledProject>
      <h2 className="project-title">{project.frontmatter.title}</h2>
    </StyledProject>
  )
}
