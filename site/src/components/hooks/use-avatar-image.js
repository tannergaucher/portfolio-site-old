import { useStaticQuery, graphql } from "gatsby"

export const useAvatarImage = () => {
  const { file } = useStaticQuery(
    graphql`
      query AvatarImage {
        file(relativePath: { regex: "/avatar/" }) {
          childImageSharp {
            fixed(height: 200, width: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  return file.childImageSharp
}
