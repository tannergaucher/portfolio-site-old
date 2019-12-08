import styled from "styled-components"

const Button = styled.button`
  cursor: pointer;
  background: ${props => (props.primary ? "var(--black)" : "var(--white)")};
  color: ${props => (props.primary ? "var(--white)" : "var(--black)")};
  padding: var(--space-sm) var(--space-md);
  font-family: var(--sans);
  font-weight: bolder;
  border: ${props =>
    props.plain
      ? "var(--thickness) solid var(--white)"
      : "var(--thickness) solid var(--black)"};
  border-radius: var(--radius);
  text-transform: uppercase;
  opacity: ${props => (props.loading ? ".5" : "1")};
  transition-duration: var(--duration);
`

export default Button
