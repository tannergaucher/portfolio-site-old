import styled from "styled-components"

const Button = styled.button`
  cursor: pointer;
  background: ${props =>
    props.primary ? "var(--primary-btn-bg)" : "var(--outline-btn-bg)"};
  color: ${props =>
    props.primary ? "var(--primary-btn-color)" : "var(--outline-btn-color)"};
  padding: var(--space-sm) var(--space-md);
  font-family: var(--serif);
  /* font-weight: bolder; */
  border: ${props =>
    props.plain
      ? "var(--thickness) solid var(--bg-1)"
      : "var(--thickness) solid var(--bg-2)"};
  border-radius: var(--radius);
  text-transform: uppercase;
  opacity: ${props => (props.loading ? ".5" : "1")};
  transition: var(--transition);
  font-weight: bolder;

  @media (max-width: 600px) {
    width: ${props => (props.fillMobile ? `100%` : ``)};
  }
`

export default Button
