import styled from "styled-components"
import Color from "../../../Constants/Color"

const ButtonStyle = styled.button`
  background: none;
  outline: none;
  border: 1px solid ${Color.green};
  border-radius: 4px;
  padding: 0 16px;
  vertical-align: middle;
  cursor: pointer;
  color: ${Color.green};
  height: 37px;
  line-height: 37px;
  box-sizing: border-box;
  font-size: 14px;

  &:hover {
    color: ${Color.hoverGreen};
    border-color: ${Color.hoverGreen};
  }

  @media (max-width: 767px) {
    padding: 0 14px;
    height: 33px;
    line-height: 33px;
  }
`

const GetStartedButton = () => {
  return <ButtonStyle>Get started</ButtonStyle>
}

export default GetStartedButton
