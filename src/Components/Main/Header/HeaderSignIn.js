import styled from "styled-components"
import Color from "../../../Constants/Color"

const HeaderSignIn = styled.a`
  margin-right: 25px;
  color: ${Color.borderBlack};
  font-size: 14px;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`

const HeaderLink = styled(HeaderSignIn)`
  @media (max-width: 727.98px) {
    display: none;
  }
`

export { HeaderSignIn, HeaderLink }
