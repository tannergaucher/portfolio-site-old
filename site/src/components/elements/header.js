import React from "react"
import styled from "styled-components"

import { Link } from "../styles"
import { useSiteMetadata } from "../hooks"

const StyledHeader = styled.header``

// TODO: Location === /  ?  index header : regular header

export default function Header({ location }) {
  console.log(location)
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
