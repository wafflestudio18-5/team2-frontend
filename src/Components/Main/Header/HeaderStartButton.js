import styled, { css } from "styled-components"
import Color from "../../../Constants/Color"

const HeaderStartButton = styled.button`
  background-color: black;
  color: white;
  font-size: 14px;
  width: 105.5px;
  height: 38px;
  border: 0;
  box-sizing: border-box;
  border-radius: 4px;
  transition: background-color 300ms linear;

  &:hover {
    cursor: pointer;
  }

  ${(props) =>
    props.reachScrollCheckPoint &&
    css`
      background-color: ${Color.green};

      &:hover {
        background-color: ${Color.hoverGreen};
      }
    `}
`

export default HeaderStartButton
