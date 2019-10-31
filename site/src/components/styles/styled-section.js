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

  @media (max-width: 768px) {
    margin: 6rem 0;

    .emoji-title {
      display: flex;
    }

    .section-title {
      margin-bottom: 2rem;
      margin-left: 1rem;
    }

    .view-all-btn {
      margin-left: 1rem;
    }
  }
`

export default StyledSection
