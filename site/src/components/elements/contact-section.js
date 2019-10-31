import React from "react"
import styled from "styled-components"

import { Form, Button, Input, TextArea, StyledSection } from "../styles"

const StyledContactSection = styled(StyledSection)`
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border-radius: var(--radius);

  .section-title {
    margin-top: 0;
    margin-bottom: 2rem;
    text-align: center;
  }
`

export default function ContactSection() {
  return (
    <StyledContactSection>
      <div>
        <h2 className="section-title">Contact </h2>
      </div>
      <ContactForm />
    </StyledContactSection>
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
