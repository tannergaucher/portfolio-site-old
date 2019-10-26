import { graphql } from "gatsby"

export const POST_FRAGMENT = graphql`
  fragment PostFragment on MarkdownRemark {
    id
    excerpt
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
      url
      thumbnail {
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
    datePosted
    caption
    myImage {
      asset {
        fluid(maxWidth: 800) {
          ...GatsbySanityImageFluid
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
