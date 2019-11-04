import styled from "styled-components"
import { Link } from "gatsby"

const StyledLink = styled(Link)`
  color: var(--link);
  text-decoration: ${props => (props.none ? "none" : "")};
`

export default StyledLink
