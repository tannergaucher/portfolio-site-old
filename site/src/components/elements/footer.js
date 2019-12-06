import React from "react"
import styled from "styled-components"

import { Link } from "../styles"
import { useSiteMetadata } from "../hooks"

const StyledFooter = styled.div``

export default function Footer() {
  const { title } = useSiteMetadata()

  return (
    <StyledFooter>
      <Link to="/" none inherit>
        <h4 className="site-title">{title}</h4>
      </Link>
    </StyledFooter>
  )
}
