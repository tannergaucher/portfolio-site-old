import React from "react"
import styled from "styled-components"

import { Link } from "../styles"
import { useSiteMetadata } from "../hooks"

const StyledHeader = styled.header``

    margin-top: 0;
// TODO: Location === /  ?  index header : regular header

export default function Header() {
  const { title } = useSiteMetadata()

  return (
    <StyledHeader>
      <nav>
        <Link to="/" none inherit>
          <h4 className="site-title">{title}</h4>
        </Link>
        {/* GITHUB ICON LINK */}
      </nav>
    </StyledHeader>
  )
}
