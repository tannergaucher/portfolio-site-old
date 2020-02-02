import { Button } from "../styles"
import React from "react"
import styled from "styled-components"

const StyledProjectCard = styled.div`
  margin-bottom: var(--space-xl);

  .project-title {
    font-weight: 900;
    color: var(--text-color);
  }

  .project-iframe {
    margin: var(--space-lg) 0;
  }
`

export default function ProjectCard({ project }) {
  return (
    <StyledProjectCard>
      <a
        className="project-url-link"
        href={project.frontmatter.deployedUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3 className="project-title">{project.frontmatter.title}</h3>
      </a>
      <p className="project-description">{project.frontmatter.description}</p>

      <a href={project.frontmatter.githubRepo} className="nav-link">
        View Source
      </a>

      <div
        className="project-iframe"
        style={{
          position: `relative`,
          paddingTop: `56.25%`,
        }}
      >
        <iframe
          title="project-screen-recording"
          src={`${project.frontmatter.vimeoUrl}`}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: `100%`,
            height: `100%`,
          }}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>
    </StyledProjectCard>
  )
}
