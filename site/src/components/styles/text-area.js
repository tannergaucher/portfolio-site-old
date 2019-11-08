import styled from "styled-components"

const TextArea = styled.textarea`
  border: 2px solid var(--input-border);
  background: var(--input-background);
  color: var(--input-text);
  border-radius: var(--radius);
  font-size: var(--font-size-lg);
  font-family: var(--sans);
  margin-bottom: 1rem;
  padding: 0.5rem;

  @media (max-width: 768px) {
    font-size: var(--font-size-sm);
  }
`

export default TextArea
