import React from "react"

import { SEO, Contact, Layout } from "../components/elements"
import { LatestPosts } from "../components/post"
import { LatestProjects } from "../components/project"
import { LatestPhoto } from "../components/photo"

export default function IndexPage({ location }) {
  console.log(location)

  return (
    <Layout location={location}>
      <SEO title="Home" />
      {/* LatestPost */}
      <LatestPosts />
      <LatestProjects />
      {/* LatestPhotosGrid */}
      <LatestPhoto />
      <Contact />
    </Layout>
  )
}
