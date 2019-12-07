import styled from "styled-components"

const AnimatedTitleArrow = styled.div`
  display: flex;
  align-items: center;

  .section-title {
    font-weight: 900;
  }

  &:hover {
    .arrow {
      margin-left: var(--space-md);
      transition-duration: 0.2s;
    }
  }
`

export default AnimatedTitleArrow
