import { Layout, SEO } from "../components"
import { Link, graphql } from "gatsby"

import React from "react"

export default function PostTemplatePage({ data, pageContext, location }) {
  const post = data.markdownRemark
  const { next, previous } = pageContext

  return (
    <Layout location={location}>
      <SEO title={post.frontmatter.title} />
      <article className="container padding">
        <h1>{post.frontmatter.title}</h1>
        <h2>{post.frontmatter.description}</h2>
        <time className="text--sm">{post.frontmatter.date}</time>
        <div
          className="post-body"
          dangerouslySetInnerHTML={{ __html: post.html }}
          style={{ marginTop: `var(--space-lg)` }}
        />
      </article>
      <div className="container padding">
        {next && (
          <div>
            <small>Next</small>
            <Link className="nav-link" to={`${next.fields.slug}`}>
              <h3 className="next-post-title">{next.frontmatter.title}</h3>
            </Link>
          </div>
        )}

        {previous && (
          <div>
            <small>Previous</small>
            <Link className="nav-link" to={`${previous.fields.slug}`}>
              <h3 className="previous-post-title">
                {previous.frontmatter.title}
              </h3>
            </Link>
          </div>
        )}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query POST_MARKDOWN_QUERY($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      ...PostFragment
    }
  }
`
