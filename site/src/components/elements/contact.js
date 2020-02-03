import { Button, Form, Input, TextArea } from "../styles"

import React from "react"
import styled from "styled-components"

const StyledContactSection = styled.div`
  margin: var(--space-lg) left;
  padding: 0 var(--space-sm);
  max-width: var(--container);

  .contact-title {
    text-transform: uppercase;
    font-weight: 900;
    letter-spacing: var(--caps-letter-spacing);
  }

  .btn {
    /* Because some bug in styled component  */
    font-family: var(--sans);
  }
`

export default function Contact() {
  return (
    <StyledContactSection>
      <h2 className="contact-title">Contact Me </h2>
      <Form name="netlify-contact-form" method="POST" data-netlify="true">
        {/* This hidden form needs to be here for netlify form */}
        <input type="hidden" name="form-name" value="netlify-contact-form" />
        <Input
          type="email"
          name="contact-form-email"
          placeholder="Your Email"
          required
        />
        <TextArea
          type="text"
          name="contact-form-message"
          cols="10"
          rows="10"
          placeholder="Message"
          required
          style={{ resize: `vertical` }}
        ></TextArea>
        <Button type="submit" primary="true" className="btn">
          Send
        </Button>
      </Form>
      <br />
    </StyledContactSection>
  )
}
