import styled from "styled-components"

const StyledSection = styled.div`
  margin: 10rem 0;

  .section-title {
    margin-bottom: 4rem;
    font-weight: 500;
  }

  span {
    margin-right: 1rem;
  }

  @media (max-width: 600px) {
    margin: 6rem 0;

    .section-title {
      margin-bottom: 2rem;
    }
  }
`

export default StyledSection
