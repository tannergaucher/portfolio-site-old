import React from "react"
import styled from "styled-components"

import { Button, Input, TextArea } from "../styles"

const StyledContactForm = styled.form`
  display: flex;
  flex-direction: column;
`

export default function ContactForm() {
  return (
    <StyledContactForm name="contact" netlify>
      <Input type="email" name="email" placeholder="Your Email" />
      <TextArea
        name="message"
        id=""
        cols="30"
        rows="10"
        htmlFor="message"
        placeholder="Message"
      ></TextArea>
      <Button type="submit" primary>
        Send
      </Button>
    </StyledContactForm>
  )
}
