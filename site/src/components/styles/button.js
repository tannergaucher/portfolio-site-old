import styled from "styled-components"

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: 2px solid black;
  border-radius: var(--radius);
  font-family: var(--serif);
  font-size: var(--font-size);
  background: ${props => (props.primary ? "black" : "")};
  color: ${props => (props.primary ? "white" : "black")};
`

export default Button
