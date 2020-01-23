import { graphql } from "gatsby"

export const POST_FRAGMENT = graphql`
  fragment PostFragment on MarkdownRemark {
    id
    excerpt
    html
    timeToRead
    frontmatter {
      title
      date(formatString: "MMMM Do, YYYY")
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
      deployedUrl
      vimeoUrl
      githubRepo
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
    caption
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

export const SiteInformation = graphql`
  fragment SiteMetadataFragment on Site {
    siteMetadata {
      title
      description
      author
      social {
        github
        linkedIn
      }
    }
  }
`
