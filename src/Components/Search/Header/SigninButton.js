import styled from "styled-components"
import Color from "../../../Constants/Color"

const ButtonStyle = styled.button`
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  color: ${Color.green};
  margin-right: 16px;
  font-size: 14px;

  &:hover {
    color: ${Color.hoverGreen};
  }

  @media (max-width: 767px) {
    display: none;
  }
`

const SignInButton = () => {
  return <ButtonStyle>Sign in</ButtonStyle>
}

export default SignInButton
