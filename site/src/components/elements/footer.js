import React from "react"
import styled from "styled-components"
import { Github, LinkedinOption } from "grommet-icons"

import { Button } from "../styles"
import { useSiteMetadata } from "../hooks"

const StyledFooter = styled.div`
  padding: var(--space-sm);

  .github-btn {
    margin-right: var(--space-sm);
  }

  .footer-btn {
    border: none;
  }
`

export default function Footer() {
  const { social } = useSiteMetadata()

  return (
    <StyledFooter>
      <a href={social.github}>
        <Button className="github-btn footer-btn">
          <Github size="var(--text-md)" color="var(--grey)" />
        </Button>
      </a>
      <a href={social.linkedIn}>
        <Button className="footer-btn">
          <LinkedinOption size="var(--text-md)" color="var(--grey)" />
        </Button>
      </a>
    </StyledFooter>
  )
}
