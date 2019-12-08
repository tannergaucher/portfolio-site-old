import React from "react"
import styled from "styled-components"

import { Form, Button, Input, TextArea } from "../styles"

const StyledContact = styled.div`
  max-width: var(--container);
  margin: 0 auto;
  margin-bottom: var(--space-xl);

  .section-title {
    font-weight: 900;
    margin-bottom: var(--space-md);
  }
`

export default function Contact() {
  return (
    <StyledContact>
      <h4 className="section-title">Contact</h4>
      <ContactForm />
    </StyledContact>
  )
}

function ContactForm() {
  return (
    <Form name="contact" netlify>
      <Input type="email" name="email" placeholder="Your Email" required />
      <TextArea
        name="message"
        id=""
        cols="30"
        rows="10"
        htmlFor="message"
        placeholder="Message"
        required
      ></TextArea>
      <Button type="submit" primary>
        Send
      </Button>
    </Form>
  )
}
