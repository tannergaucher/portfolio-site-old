import React from "react"

import { Layout, ContactForm } from "../components/elements"
import { StyledPage } from "../components/styles"

export default function ContactPage() {
  return (
    <Layout>
      <StyledPage>
        <h1 className="page-title">Get in Touch</h1>
        <ContactForm />
      </StyledPage>
    </Layout>
  )
}
