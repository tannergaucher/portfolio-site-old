import React from "react"
import styled from "styled-components"

import { Link } from "../styles"

const StyledViewAllLink = styled.div`
  .heading {
  }

  .sub-heading {
    color: var(--grey);
    font-weight: lighter;
  }

  .fat-arrow {
    font-family: var(--mono);
  }
`

export default function ViewAllLink({ to, heading, subHeading }) {
  return (
    <StyledViewAllLink>
      <Link to={to}>
        <h3>
          <span className="heading text--lg">{heading} </span>{" "}
          <span className="sub-heading text--md">{subHeading} </span>
          <span className="fat-arrow"> => </span>
        </h3>
      </Link>
    </StyledViewAllLink>
  )
}
