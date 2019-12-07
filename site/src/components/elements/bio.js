import React from "react"
import styled from "styled-components"

import { Button } from "../styles"

const StyledBio = styled.div``

export default function Bio() {
  return (
    <StyledBio>
      <div className="bio">
        <h1 className="bio-name">Tanner Gaucher</h1>
        <p className="bio-text">
          I'm a fullstack JavaScript developer, currently seeking a gig in New
          York City || remote.
        </p>
        <Button>Github</Button>
        <Button>Twitter</Button>
      </div>
    </StyledBio>
  )
}
