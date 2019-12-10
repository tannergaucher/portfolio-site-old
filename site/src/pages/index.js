import React from "react"

import { SEO, Layout, Contact } from "../components/elements"
import { Posts } from "../components/post"
import { Projects } from "../components/project"
import { LatestPhotos } from "../components/photo"

export default function IndexPage({ location }) {
  return (
    <Layout location={location}>
      <SEO title="Home" />
      <Posts />
      <Projects />
      <LatestPhotos />
      <Contact />
    </Layout>
  )
}
