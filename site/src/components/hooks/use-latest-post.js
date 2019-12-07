import { useStaticQuery, graphql } from "gatsby"

export const useLatestPost = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query USE_LATEST_POSTS {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/posts/" } }
          sort: { fields: frontmatter___date, order: DESC }
          limit: 1
        ) {
          edges {
            node {
              ...PostFragment
            }
          }
        }
      }
    `
  )
  return allMarkdownRemark
}
