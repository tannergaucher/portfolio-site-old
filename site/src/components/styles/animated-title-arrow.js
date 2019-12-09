import styled from "styled-components"

const AnimatedTitleArrow = styled.div`
  display: flex;
  align-items: center;
  transition: var(--transition);

  .section-title {
    font-weight: 900;
  }

  &:hover {
    .arrow {
      margin-left: var(--space-sm);
      transition: var(--transition);
    }
  }
`

export default AnimatedTitleArrow
