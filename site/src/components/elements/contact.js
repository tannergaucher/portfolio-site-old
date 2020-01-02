import React from "react"
import styled from "styled-components"

import { Form, Button, Input, TextArea } from "../styles"

const StyledContact = styled.div`
  max-width: var(--container);
  margin: var(--space-xl) auto;

  .contact {
    color: var(--href-color);
  }
`

export default function Contact() {
  return (
    <StyledContact>
      <h3 className="contact">Contact</h3>
      <br />

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
