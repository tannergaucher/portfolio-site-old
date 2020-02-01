import styled from "styled-components"
import { Link } from "gatsby"

const StyledLink = styled(Link)`
  text-decoration: ${props => (props.none ? "none" : "")};
`

export default StyledLink
