import React from "react"
import styled from "styled-components"
import { Github, Twitter } from "grommet-icons"

import { IconLinkHref } from "../styles"

const StyledFooter = styled.div`
  padding: var(--space-sm);
`

export default function Footer() {
  return (
    <StyledFooter>
      <IconLinkHref href="#">
        <Github size="var(--text-md)" color="var(--black)" />
      </IconLinkHref>
      <IconLinkHref href="#">
        <Twitter size="var(--text-md)" color="var(--black)" />
      </IconLinkHref>
    </StyledFooter>
  )
}
