import React, { useState } from "react"
import styled from "styled-components"

import { Button } from "../styles"

const StyledProject = styled.div`
  margin-bottom: var(--card-margin-bottom);
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border-radius: var(--radius);

  .project-title {
    margin-top: 0;
    margin-bottom: 1rem;
    font-weight: 900;
  }

  .project-description {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  .resp-container {
    position: relative;
    overflow: hidden;
    padding-top: 56.25%;
    background: black;
  }

  .resp-iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }

  .toggle-details-btn {
    margin-top: 1rem;
  }

  .technologies-title {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  .problems-title {
    margin-bottom: 1rem;
  }

  .view-deployed-btn {
    margin-top: 2rem;
    margin-right: 1rem;
  }

  ul {
    margin: 0;
  }

  @media (max-width: 768px) {
    button {
      width: 100%;
      margin-bottom: 1rem;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`

export default function ProjectCard({ project }) {
  const [show, setShow] = useState(false)

  return (
    <StyledProject>
      <h2 className="project-title">{project.frontmatter.title}</h2>
      <p className="project-description">{project.frontmatter.description}</p>
      <div className="resp-container">
        <iframe
          className="resp-iframe"
          src={project.frontmatter.screenRecordingUrl}
          title={project.frontmatter.title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
        />
      </div>

      <Button className="toggle-details-btn" onClick={() => setShow(!show)}>
        {show ? "Hide " : "View "} Project Details
      </Button>

      {show && (
        <div className="project-details">
          <h4 className="technologies-title">Technologies Used</h4>
          <ul>
            {project.frontmatter.technologies.map(technology => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
          <h4 className="problems-title">Problems Solved</h4>
          <ul>
            {project.frontmatter.problemsSolved.map(problem => (
              <li key={problem}>{problem}</li>
            ))}
          </ul>

          <Button className="view-deployed-btn" primary>
            View Deployed
          </Button>
          <Button className="github-repo-btn">Github Repo</Button>
        </div>
      )}
    </StyledProject>
  )
}
