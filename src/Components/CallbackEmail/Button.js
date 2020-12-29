import styled from "styled-components"
import Color from "../../Constants/Color"

const Button = styled.button`
  background: ${Color.green};
  height: 37px;
  line-height: 37px;
  padding: 0 18px;
  font-size: 15px;
  border: 0;
  border-radius: 4px;
  margin: 15px 0;
  color: #fff;
  cursor: pointer;

  :focus {
    outline: 0;
  }

  :hover {
    background-color: ${Color.hoverGreen};
  }
`

export default Button
