import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Code, Domain } from "grommet-icons"

import { Layout } from "../components/elements"
import { StyledPage, IconLinkHref } from "../components/styles"

const StyledProjectPage = styled(StyledPage)`
  .project-hrefs {
    margin-bottom: var(--space-md);
  }
`

export default function ProjectTemplate({ data, location }) {
  const project = data.markdownRemark

  return (
    <Layout location={location}>
      <StyledProjectPage>
        <h1>{project.frontmatter.title}</h1>
        <p>{project.frontmatter.description}</p>
        <div className="project-hrefs">
          <IconLinkHref>
            <Code size="var(--text-md)" color="var(--text-color)" />
          </IconLinkHref>
          <IconLinkHref>
            <Domain size="var(--text-md)" color="var(--text-color)" />
          </IconLinkHref>
        </div>
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
      </StyledProjectPage>
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
