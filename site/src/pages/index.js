import { Contact, Layout, SEO } from "../components/elements"

import { LatestPhotos } from "../components/photo"
import { Posts } from "../components/post"
import { Projects } from "../components/project"
import React from "react"

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
