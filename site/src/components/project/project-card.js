import React from "react"
import styled from "styled-components"

import { Link, Button } from "../styles"

const StyledProject = styled.div`
  margin-bottom: 6rem;

  .project-title {
  }

  .project-description {
  }

  .view-deployed-btn {
    margin-right: 1rem;
  }
`

export default function ProjectCard({ project }) {
  return (
    <Link to={`/projects${project.fields.slug}`}>
      <StyledProject>
        <h3 className="project-title">{project.frontmatter.title}</h3>
        <p className="project-description">{project.frontmatter.description}</p>
        {/* CHANGE THIS TO EMBEDDED YOUTUBE VIDEO */}
        {/* <Img fluid={project.frontmatter.thumbnail.childImageSharp.fluid} /> */}
        <h4>Techonogies Used: </h4>
        <ul>
          {project.frontmatter.technologies.map(technology => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <Button className="view-deployed-btn" primary>
          View Deployed
        </Button>
        <Button>Github Repo</Button>
      </StyledProject>
    </Link>
  )
}
