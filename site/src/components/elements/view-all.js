import React from "react"
import styled from "styled-components"
import { FormNextLink } from "grommet-icons"

import { Link } from "../styles"

const StyledViewAll = styled.div`
  .text {
    margin: 0;
    font-weight: bolder;
  }

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

export default function ViewAll({ to }) {
  return (
    <StyledViewAll>
      <Link to={to}>
        <div className="animated-arrow">
          <p className="text">View All</p>
          <FormNextLink
            className="arrow"
            size="var(--text-lg)"
            color="var(--href-color)"
          />
        </div>
      </Link>
      <br />
    </StyledViewAll>
  )
}
