import { Contact, Layout, SEO } from "../components/elements"

import { LatestPhotos } from "../components/photo"
import { Posts } from "../components/post"
import { Projects } from "../components/project"
import React from "react"
import styled from "styled-components"

export default function IndexPage({ location }) {
  return (
    <Layout location={location} noPadding="true" noContainer="true">
      <SEO title="Home" />
      <Posts />
      <Projects />
      <LatestPhotos />
      <Contact />
    </Layout>
  )
}
