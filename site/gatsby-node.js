const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `content` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const allPostsQuery = await graphql(`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/posts/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
          next {
            id
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
          previous {
            id
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  allPostsQuery.data.allMarkdownRemark.edges.forEach(edge => {
    // Create post pages.
    createPage({
      path: edge.node.fields.slug,
      component: path.resolve(`./src/templates/post-template.js`),
      context: {
        slug: edge.node.fields.slug,
        // Why is this backwards!?
        next: edge.previous,
        previous: edge.next,
      },
    })
  })

  const allProjectsQuery = await graphql(`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/projects/" } }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  allProjectsQuery.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      path: `/projects${edge.node.fields.slug}`,
      component: path.resolve(`./src/templates/project-template.js`),
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })

  // query all images from sanity cms
  const allMyImagesQuery = await graphql(`
    query {
      allSanityMyImage {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `)

  // create page for each image
  allMyImagesQuery.data.allSanityMyImage.edges.forEach(edge => {
    createPage({
      path: `/photo/${edge.node.slug.current}`,
      component: path.resolve(`./src/templates/photo-template.js`),
      context: {
        slug: edge.node.slug.current,
      },
    })
  })
}
