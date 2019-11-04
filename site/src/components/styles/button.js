import styled from "styled-components"

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: 2px solid black;
  border-radius: var(--radius);
  font-size: var(--font-size-lg);
  /* change to CSS VARS FOR DARK MODE */
  background: ${props => (props.primary ? "var(--btn-primary)" : "var(--btn)")};
  border-color: var(--btn-text);
  color: ${props =>
    props.primary ? "var(--btn-primary-text)" : "var(--btn-text)"};
  text-transform: uppercase;
  transition-duration: 0.2s;
  
  &:hover {
    /* transition-duration: 0.2s; */
    /* background: ${props => (props.primary ? "inherit" : "black")};
    color: ${props => (props.primary ? "blue" : "white")}; */
  }

  

  @media (max-width: 768px) {
    font-size: var(--font-size-sm);
  }
`

export default Button
