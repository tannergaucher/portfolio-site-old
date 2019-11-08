import styled from "styled-components"

const StyledSection = styled.div`
  margin: var(--lg) 0;

  .section-title {
    margin-top: 0;
    margin-bottom: var(--lg);
  }

  span {
    margin-right: 1rem;
  }

  @media (max-width: 768px) {
    margin: var(--md) 0;

    .view-all-btn {
      width: -webkit-fill-available;
      margin-left: 0;
    }
  }
`

export default StyledSection
