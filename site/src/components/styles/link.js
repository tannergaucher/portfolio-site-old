import styled from "styled-components"
import { Link } from "gatsby"

const StyledLink = styled(Link)`
  color: ${props => (props.inherit ? "inherit" : "var(--href-color)")};
  text-decoration: ${props => (props.none ? "none" : "")};
`

export default StyledLink
