import { graphql } from "gatsby"

export const POST_FRAGMENT = graphql`
  fragment PostFragment on MarkdownRemark {
    id
    excerpt
    html
    timeToRead
    frontmatter {
      title
      date(formatString: "MM/DD/YYYY")
      description
      tags
    }
    fields {
      slug
    }
  }
`

export const PROJECT_FRAGMENT = graphql`
  fragment ProjectFragment on MarkdownRemark {
    id
    frontmatter {
      title
      description
      technologies
      problemsSolved
      projectUrl
      screenRecordingUrl
      githubRepo
      cardImage {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    fields {
      slug
    }
  }
`

export const MY_IMAGE_FRAGMENT = graphql`
  fragment MyImageFragment on SanityMyImage {
    id
    slug {
      current
    }
    myImage {
      asset {
        _rawMetadata
        fluid(maxWidth: 800) {
          ...GatsbySanityImageFluid
        }
        metadata {
          location {
            lat
            lng
          }
        }
      }
    }
    tags {
      tag
      slug {
        current
      }
    }
  }
`
