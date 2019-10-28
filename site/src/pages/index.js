import React from "react"

import { SEO, ContactForm, Bio } from "../components/elements"
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

function ContactSection() {
  return (
    <StyledSection>
      <h2 className="section-title">
        <span role="img">💌</span> Get in Touch
      </h2>
      <ContactForm />
    </StyledSection>
  )
}
