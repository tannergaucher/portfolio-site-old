import styled from "styled-components"

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: var(--space-sm);

  @media (max-width: 1024px) {
    grid-template-columns: ${props =>
      props.responsive ? `1fr` : `1fr 1fr 1fr`};
  }
`

export default ContentGrid
