import React from "react"
import styled from "styled-components"

import { Button } from "../styles"

const StyledProjectCard = styled.div`
  margin-bottom: var(--space-xl);

  .project-title {
    color: var(--href-color);

    &:hover {
      text-decoration: underline;
    }
  }

  .project-iframe {
    margin-top: var(--space-md);
  }

  .href-btns {
    margin-top: var(--space-md);
  }

  .repo-btn {
    margin-right: var(--space-md);
  }
`

export default function ProjectCard({ project }) {
  return (
    <StyledProjectCard>
      <h4 className="project-title">{project.frontmatter.title}</h4>
      <small className="project-description">
        {project.frontmatter.description}
      </small>
      <div
        className="project-iframe"
        style={{
          position: `relative`,
          paddingTop: `56.25%`,
        }}
      >
        <iframe
          src="https://player.vimeo.com/video/378214104"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            // maxWidth: `var(--container)`,
            width: `100%`,
            height: `100%`,
            padding: 0,
            margin: 0,
          }}
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></iframe>
      </div>

      <div className="href-btns">
        <Button className="repo-btn">Repository</Button>
        <Button className="deployed-btn">Deployed</Button>
      </div>
    </StyledProjectCard>
  )
}
