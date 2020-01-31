import React from "react"
import styled from "styled-components"
import { Domain, Github } from "grommet-icons"

import { Button } from "../styles"

const StyledProjectCard = styled.div`
  margin-bottom: var(--space-xl);

  .project-description {
    color: var(--grey);
    font-weight: lighter;
  }

  a {
    margin: 0 var(--space-sm);
    text-decoration: none;
  }

  .tech-item {
    color: var(--grey);
  }
`

export default function ProjectCard({ project }) {
  return (
    <StyledProjectCard>
      <h3 className="project-title">
        {project.frontmatter.title}{" "}
        <span className="project-description text--md">
          {project.frontmatter.description}
        </span>
        <span>
          <a
            href={project.frontmatter.githubRepo}
            className="project-link text--sm"
          >
            Source Code
          </a>
        </span>
        <span>
          <a
            href={project.frontmatter.deployedUrl}
            className="project-link text--sm"
          >
            View Deployed
          </a>
        </span>
      </h3>

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
      {/* <ul>
        {project.frontmatter.technologies.map(technology => (
          <li className="tech-item text--sm" key={technology}>
            {technology}
          </li>
        ))}
      </ul> */}
      {/* <a
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
      </a> */}
    </StyledProjectCard>
  )
}
