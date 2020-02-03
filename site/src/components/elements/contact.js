import { Button, Form, Input, TextArea } from "../styles"

import React from "react"
import styled from "styled-components"

const StyledContactSection = styled.div`
  max-width: var(--container);
  margin: var(--space-lg) auto;

  .btn {
    /* Because some bug in styled component  */
    font-family: var(--sans);
  }
`

export default function Contact() {
  return (
    <StyledContactSection>
      <Form name="netlify-contact-form" method="POST" data-netlify="true">
        {/* This hidden form needs to be here for netlify form */}
        <input type="hidden" name="form-name" value="netlify-contact-form" />
        <Input
          type="email"
          name="contact-form-email"
          placeholder="Email"
          required
        />
        <TextArea
          type="text"
          name="contact-form-message"
          cols="10"
          rows="10"
          placeholder="Message"
          required
        ></TextArea>
        <Button type="submit" primary="true" className="btn">
          Contact
        </Button>
      </Form>
      <br />
    </StyledContactSection>
  )
}
