import React from "react"
import styled from "styled-components"

import { Form, Button, Input, TextArea } from "../styles"

const StyledContactSection = styled.div`
  max-width: var(--container);
  margin: var(--space-lg) auto;

  .contact-section-title {
    color: var(--href-color);
  }

  @media (max-width: 600px) {
    margin: 0 auto;
  }
`

export default function Contact() {
  return (
    <StyledContactSection>
      <h3 className="contact-section-title">Contact</h3>
      <br />
      <Form name="contact-form" method="post" data-netlify="true">
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
          htmlFor="message"
          placeholder="Message"
          required
        ></TextArea>
        <Button type="submit" primary>
          Send
        </Button>
      </Form>
      <br />
    </StyledContactSection>
  )
}
