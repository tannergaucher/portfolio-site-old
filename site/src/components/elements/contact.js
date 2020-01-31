import React from "react"
import styled from "styled-components"

import { Form, Button, Input, TextArea } from "../styles"

const StyledContactSection = styled.div`
  max-width: var(--container);
  margin: var(--space-md) auto;

  @media (max-width: 600px) {
    margin: var(--space-sm) auto;
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
        <Button type="submit" primary>
          Contact
        </Button>
      </Form>
      <br />
    </StyledContactSection>
  )
}
