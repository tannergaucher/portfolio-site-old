import React from "react"

import { Form, Button, Input, TextArea } from "../styles"

export default function ContactSection() {
  return (
    <>
      <div>
        <h2 className="section-title">Contact </h2>
      </div>
      <ContactForm />
    </>
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
