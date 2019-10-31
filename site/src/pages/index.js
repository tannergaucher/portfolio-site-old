import React from "react"
import styled from "styled-components"

import { SEO, ContactSection, Bio } from "../components/elements"
import { StyledPage, StyledSection } from "../components/styles"
import { LatestPosts } from "../components/post"
import { LatestProjects } from "../components/project"
import { LatestPhoto } from "../components/photo"

export default function IndexPage() {
  return (
    <StyledPage>
      <SEO title="Home" />
      <Bio />
      <LatestPosts />
      <LatestProjects />
      <LatestPhoto />
      <ContactSection />
    </StyledPage>
  )
}
