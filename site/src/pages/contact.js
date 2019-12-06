import React from "react"

import { Layout, ContactSection } from "../components/elements"
import { StyledPage } from "../components/styles"

export default function ContactPage({ location }) {
  return (
    <Layout location={location}>
      <StyledPage>
        <ContactSection />
      </StyledPage>
    </Layout>
  )
}
