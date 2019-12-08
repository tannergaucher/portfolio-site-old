import React from "react"
import { graphql } from "gatsby"
import { Github, Domain } from "grommet-icons"

import { Layout } from "../components/elements"
import { StyledPage } from "../components/styles"

export default function ProjectTemplate({ data, location }) {
  const project = data.markdownRemark

  console.log(project)

  return (
    <Layout location={location}>
      <StyledPage>
        <h1>{project.frontmatter.title}</h1>
        <p>{project.frontmatter.description}</p>
        <button>
          <Github size="var(--text-md)" />
        </button>
        <button>
          <Domain size="var(--text-md)" />
        </button>
        <iframe
          src={project.frontmatter.screenRecordingUrl}
          width="640"
          height="1127"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></iframe>
        <br />
        <br />
        <h4>Problems Solved</h4>
        <ul>
          {project.frontmatter.problemsSolved.map(problem => (
            <li key={problem}>{problem}</li>
          ))}
        </ul>
        <br />
        <h4>Technologies Used</h4>
        <ul>
          {project.frontmatter.technologies.map(technology => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </StyledPage>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PROJECT_MARKDOWN_QUERY($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      ...ProjectFragment
    }
  }
`
