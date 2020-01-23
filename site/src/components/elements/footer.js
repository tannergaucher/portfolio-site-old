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
`

export default function Footer() {
  const { social } = useSiteMetadata()

  return (
    <StyledFooter>
      <a href={social.github}>
        <Button className="github-btn">
          <Github size="var(--text-md)" color="var(--href-color)" />
        </Button>
      </a>
      <a href={social.linkedIn}>
        <Button>
          <LinkedinOption size="var(--text-md)" color="var(--href-color)" />
        </Button>
      </a>
    </StyledFooter>
  )
}
