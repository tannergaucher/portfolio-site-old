import React from "react"
import styled from "styled-components"

const StyledContactForm = styled.form``

export default function ContactForm() {
  return (
    <StyledContactForm>
      <input type="email" placeholder="Your Email" />
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Message"
      ></textarea>

      <button>Send</button>
    </StyledContactForm>
  )
}
