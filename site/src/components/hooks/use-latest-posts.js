import { useStaticQuery, graphql } from "gatsby"

export const useLatestPosts = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query USE_LATEST_POSTS {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/posts/" } }
          sort: { fields: frontmatter___date, order: DESC }
          limit: 4
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
