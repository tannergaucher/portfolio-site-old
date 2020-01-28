import React from "react"
import styled from "styled-components"
import { Domain, Github } from "grommet-icons"

import { Button } from "../styles"

const StyledProjectCard = styled.div`
  margin-bottom: var(--space-xl);

  .project-title {
    color: var(--href-color);
  }

  .project-iframe {
    margin: var(--space-md) 0;
  }

  .href-btns {
    margin-top: var(--space-md);
  }

  .repo-btn {
    margin-right: var(--space-md);
  }

  .deployed-btn {
    margin-top: var(--space-md);
  }

  @media (max-width: 600px) {
    .repo-btn {
      margin-right: var(--space-md);
    }
  }
`

export default function ProjectCard({ project }) {
  return (
    <StyledProjectCard>
      <h4 className="project-title">{project.frontmatter.title}</h4>
      <small className="project-description">
        {project.frontmatter.description}
      </small>
      <br />
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
      <ul>
        {project.frontmatter.technologies.map(technology => (
          <li className="text--xs" key={technology}>
            {technology}
          </li>
        ))}
      </ul>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`${project.frontmatter.githubRepo}`}
      >
        <Button className="repo-btn" fillMobile="true">
          Github Repo
        </Button>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`${project.frontmatter.deployedUrl}`}
      >
        <Button className="deployed-btn" fillMobile="true">
          View Deployed
        </Button>
      </a>
    </StyledProjectCard>
  )
}
