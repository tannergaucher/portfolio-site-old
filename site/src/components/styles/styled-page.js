import styled from "styled-components"

const StyledPage = styled.div`
  margin: var(--space-md) auto;

  .container {
    max-width: var(--container);
    margin: 0 auto;
  }

  iframe {
    display: block;
  }

  @media (max-width: 600px) {
    margin: var(--space-sm) auto;
  }
`

export default StyledPage
