import React from "react"
import styled from "styled-components"

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

const StyledContactSection = styled(StyledSection)`
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border-radius: var(--radius);

  .section-title {
    margin-top: 0;
    margin-bottom: 2rem;
  }
`

function ContactSection() {
  return (
    <StyledContactSection>
      <h2 className="section-title">
        <span role="img">💌</span> Contact Me
      </h2>
      <ContactForm />
    </StyledContactSection>
  )
}
