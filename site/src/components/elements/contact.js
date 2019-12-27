import React from "react"
import styled from "styled-components"

import { Form, Button, Input, TextArea } from "../styles"

const StyledContact = styled.div`
  max-width: var(--container);
  margin: var(--space-xl) auto;

  .section-title {
    margin-bottom: var(--space-md);
  }
`

export default function Contact() {
  return (
    <StyledContact>
      <h3 className="section-title">Contact</h3>
      <Form name="contact" netlify>
        <Input type="email" name="email" placeholder="Email" required />
        <TextArea
          name="message"
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
    </StyledContact>
  )
}
