import React from "react"

import { SEO, ContactSection, Bio, Footer } from "../components/elements"
import { StyledPage } from "../components/styles"
import { LatestPosts } from "../components/post"
import { LatestProjects } from "../components/project"
import { LatestPhoto } from "../components/photo"

export default function IndexPage() {
  return (
    <>
      <StyledPage>
        <SEO title="Home" />
        <Bio />
        <LatestPosts />
        <LatestProjects />
        <LatestPhoto />
        <ContactSection />
      </StyledPage>
      <Footer />
    </>
  )
}
