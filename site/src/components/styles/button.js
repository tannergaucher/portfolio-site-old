import styled from "styled-components"

const Button = styled.button`
  cursor: pointer;
  background: ${props =>
    props.primary ? "var(--primary-btn-bg)" : "var(--outline-btn-bg)"};
  color: ${props =>
    props.primary ? "var(--primary-btn-color)" : "var(--outline-btn-color)"};
  padding: var(--space-sm) var(--space-md);
  font-size: var(--text-size);
  font-weight: bolder;
  font-family: var(--sans);
  border: ${props =>
    props.plain
      ? "var(--thickness) solid var(--bg-1)"
      : "var(--thickness) solid var(--outline-btn-border)"};
  border-radius: var(--radius);
  opacity: ${props => (props.loading ? ".5" : "1")};
  transition: var(--transition);
  font-weight: bolder;
  font-family: var(--serif);

  @media (max-width: 600px) {
    width: ${props => (props.fillMobile ? `100%` : ``)};
  }
`

export default Button
