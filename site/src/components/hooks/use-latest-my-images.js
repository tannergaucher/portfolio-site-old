import { useStaticQuery, graphql } from "gatsby"

export const useLatestMyImages = () => {
  const { allSanityMyImage } = useStaticQuery(
    graphql`
      query USE_LATEST_MY_IMAGES {
        allSanityMyImage(limit: 10) {
          edges {
            node {
              ...MyImageFragment
            }
          }
        }
      }
    `
  )
  return allSanityMyImage
}
