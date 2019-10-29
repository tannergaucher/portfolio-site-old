import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import { Link } from "../styles"

const StyledProject = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 4rem;

  .img-wrapper {
    flex: 1;
  }

  .project-details {
    flex: 3;
    margin-left: 3rem;
  }

  .project-title {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  .project-description {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
`

export default function ProjectCard({ project }) {
  console.log(project)

  return (
    <Link to={`/projects${project.fields.slug}`}>
      <StyledProject>
        <div className="img-wrapper">
          <Img fluid={project.frontmatter.thumbnail.childImageSharp.fluid} />
        </div>
        <div className="project-details">
          <h3 className="project-title">{project.frontmatter.title}</h3>
          <p className="project-description">
            {project.frontmatter.description}
          </p>
          <ul>
            {project.frontmatter.technologies.map(technology => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </div>
      </StyledProject>
    </Link>
  )
}
