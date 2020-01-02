import React from "react"
import styled from "styled-components"
import { FormNextLink } from "grommet-icons"

import { Link } from "../styles"

const StyledSectionTitle = styled.div`
  .arrow {
    transition: var(--transition);
  }

  .animated-arrow {
    display: flex;
    align-items: center;
  }

  &:hover {
    .arrow {
      margin-left: var(--space-sm);
    }
  }
`

export default function SectionTitle({ to, sectionTitle }) {
  return (
    <StyledSectionTitle>
      <Link none to={to}>
        <div className="animated-arrow">
          <h3 className="section-title">{sectionTitle}</h3>
          <FormNextLink
            className="arrow"
            size="var(--text-lg)"
            color="var(--href-color)"
          />
        </div>
      </Link>
      <br />
    </StyledSectionTitle>
  )
}
