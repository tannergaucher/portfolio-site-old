import styled from "styled-components"

const Button = styled.button`
  cursor: pointer;
  background: ${props => (props.primary ? "var(--bg-2)" : "var(--bg-1)")};
  color: ${props => (props.primary ? "var(--text-color)" : "var(--bg-2)")};
  padding: var(--space-sm) var(--space-md);
  font-family: var(--sans);
  font-weight: bolder;
  border: ${props =>
    props.plain
      ? "var(--thickness) solid var(--bg-1)"
      : "var(--thickness) solid var(--bg-2)"};
  border-radius: var(--radius-lg);
  text-transform: uppercase;
  opacity: ${props => (props.loading ? ".5" : "1")};
  transition: var(--transition);
`

export default Button
