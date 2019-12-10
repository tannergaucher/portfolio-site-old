import { useStaticQuery, graphql } from "gatsby"

export const useLatestProjects = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query USE_LATEST_PROJECTS {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/projects/" } }
          # CHANGE SORT BC PROJECTS ARENT GOING TO HAVE A FRONTMATTER.DATE
          sort: { fields: frontmatter___date, order: DESC }
          limit: 3
        ) {
          edges {
            node {
              ...ProjectFragment
            }
          }
        }
      }
    `
  )
  return allMarkdownRemark
}
