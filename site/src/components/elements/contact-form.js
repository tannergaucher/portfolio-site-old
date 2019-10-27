import React from "react"

import { Form, Button, Input, TextArea } from "../styles"

export default function ContactForm() {
  return (
    <Form name="contact" netlify>
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
    </Form>
  )
}
