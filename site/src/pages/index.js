import React from "react"

import { SEO, ContactSection, Layout } from "../components/elements"
import { LatestPosts } from "../components/post"
import { LatestProjects } from "../components/project"
import { LatestPhoto } from "../components/photo"

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <LatestPosts />
      <LatestProjects />
      <LatestPhoto />
      <ContactSection />
    </Layout>
  )
}
