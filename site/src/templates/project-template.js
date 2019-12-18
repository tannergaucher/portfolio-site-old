import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Code, Domain } from "grommet-icons"

import { Layout } from "../components/elements"
import { StyledPage, IconLinkHref } from "../components/styles"

const StyledProjectPage = styled(StyledPage)`
  display: grid;
  grid-template-areas: "content aside";
  grid-gap: var(--space-md);

  @media (max-width: 1024px) {
  }

  .content {
    grid-area: content;
  }

  aside {
    grid-area: aside;
    margin-top: var(--space-lg);
  }

  .project-hrefs {
    margin-bottom: var(--space-md);
  }
`

export default function ProjectTemplate({ data, location }) {
  const project = data.markdownRemark

  return (
    <Layout location={location}>
      <StyledProjectPage>
        <div className="content">
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
            height="640"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></iframe>
        </div>
        <aside>
          <h4>Technologies Used:</h4>
          <ul>
            {project.frontmatter.technologies.map(technology => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
          <br />

          <h4>Problems Solved:</h4>
          <ul>
            {project.frontmatter.problemsSolved.map(problem => (
              <li key={problem}>{problem}</li>
            ))}
          </ul>
        </aside>
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
