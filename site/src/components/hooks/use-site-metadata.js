import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetadata {
        site {
          siteMetadata {
            # TODO: MAKE SITE METADATA FRAGMENT
            title
            description
            author
            social {
              github
            }
          }
        }
      }
    `
  )
  return site.siteMetadata
}
