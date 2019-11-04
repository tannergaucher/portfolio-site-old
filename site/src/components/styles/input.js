import styled from "styled-components"

const Input = styled.input`
  border: 2px solid var(--input-border);
  border-radius: var(--radius);
  color: var(--input-text);
  font-size: var(--font-size-lg);
  font-family: var(--sans);
  margin-bottom: 1rem;
  padding: 0.5rem;
  background: var(--input-bg);

  @media (max-width: 768px) {
    font-size: var(--font-size-sm);
  }
`

export default Input
