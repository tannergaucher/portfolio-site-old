import styled from "styled-components"

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: 2px solid black;
  border-radius: var(--radius);
  font-family: var(--mono);
  font-size: var(--font-size-lg);
  background: ${props => (props.primary ? "black" : "inherit")};
  color: ${props => (props.primary ? "white" : "black")};
  text-transform: uppercase;
  transition-duration: 0.2s;

  &:hover {
    transition-duration: 0.2s;

    background: ${props => (props.primary ? "inherit" : "black")};
    color: ${props => (props.primary ? "blue" : "white")};
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-sm);
  }
`

export default Button
