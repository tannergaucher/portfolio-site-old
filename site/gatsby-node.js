const path = require(`path`)
const { kebabCase } = require("lodash")
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
            frontmatter {
              tags
            }
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

  const allPostTags = []

  allPostsQuery.data.allMarkdownRemark.edges.forEach(edge => {
    edge.node.frontmatter.tags.forEach(tag => allPostTags.push(tag))

    // create post pages
    createPage({
      path: edge.node.fields.slug,
      component: path.resolve(`./src/templates/post-template.js`),
      context: {
        slug: edge.node.fields.slug,
        // why is this backwards!?
        next: edge.previous,
        previous: edge.next,
      },
    })

    // create tag pages
    const uniqueTags = new Set(allPostTags)

    uniqueTags.forEach(tag => {
      createPage({
        path: `/tags/${kebabCase(tag)}`,
        component: path.resolve(`./src/templates/tag-template.js`),
        context: {
          tag,
        },
      })
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
