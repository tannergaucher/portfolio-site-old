import React from "react"
import styled from "styled-components"
import { Github, Twitter } from "grommet-icons"

import { Button } from "../styles"

const StyledFooter = styled.div`
  padding: var(--space-sm);

  .github-btn {
    margin-right: var(--space-sm);
  }
`

export default function Footer() {
  return (
    <StyledFooter>
      <Button className="github-btn">
        <Github size="var(--text-md)" color="var(--href-color)" />
      </Button>
      <Button>
        <Twitter size="var(--text-md)" color="var(--href-color)" />
      </Button>
    </StyledFooter>
  )
}
