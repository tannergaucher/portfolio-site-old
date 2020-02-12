import { Layout, SEO } from "../components"

import React from "react"
import { useProjects } from "../hooks"

export default function Projects({ location }) {
  const { edges } = useProjects()

  return (
    <Layout location={location}>
      <SEO title="Projects" />
    </Layout>
  )
}
