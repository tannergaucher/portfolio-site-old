import React from "react"
import styled from "styled-components"
import { kebabCase } from "lodash"

import { Link } from "../styles"

const StyledInlineCard = styled.div`
  .heading {
  }

  .sub-heading {
    color: var(--grey);
    font-weight: lighter;
  }
`

export default function InlineCard({ to, heading, subHeading, links }) {
  return (
    <StyledInlineCard>
      <Link to={to}>
        <h3>
          <span className="heading text--lg">{heading}</span>{" "}
          <span className="sub-heading text--md">{subHeading}</span>
        </h3>
      </Link>
      {links &&
        links.map(link => (
          <Link key={link} to={kebabCase(link)}>
            {link}
          </Link>
        ))}
    </StyledInlineCard>
  )
}
