import styled from "styled-components"

const Button = styled.button`
  font-size: var(--font-size-lg);
  font-family: var(--serif);
  padding: 0.5rem 1rem;
  border-radius: var(--radius);
  background: ${props => (props.primary ? "var(--btn-primary)" : "var(--btn)")};
  border: 2px solid var(--black);
  color: ${props =>
    props.primary ? "var(--btn-primary-text)" : "var(--btn-text)"};
  text-transform: uppercase;
`

export default Button
