import React from "react"

import { Layout, ContactForm } from "../components/elements"
import { StyledPage } from "../components/styles"

export default function ContactPage() {
  return (
    <Layout>
      <StyledPage>
        <ContactForm />
      </StyledPage>
    </Layout>
  )
}
