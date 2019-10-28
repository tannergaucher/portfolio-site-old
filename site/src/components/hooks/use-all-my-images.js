import { useStaticQuery, graphql } from "gatsby"

export const useAllMyImages = () => {
  const { allSanityMyImage } = useStaticQuery(
    graphql`
      query USE_ALL_MY_IMAGES {
        allSanityMyImage {
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
