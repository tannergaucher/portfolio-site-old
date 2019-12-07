import React from "react"
import styled from "styled-components"
import { Github, Twitter } from "grommet-icons"

const StyledFooter = styled.div`
  padding: var(--space-sm);
`

export default function Footer() {
  return (
    <StyledFooter>
      <button>
        <Github />
      </button>
      <button>
        <Twitter />
      </button>
    </StyledFooter>
  )
}
