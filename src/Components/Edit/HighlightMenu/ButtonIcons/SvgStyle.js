import styled, { css } from "styled-components"

const SvgStyle = styled.svg`
  width: 21px;
  height: 21px;
  overflow: hidden;
  fill: #fff;
  margin: 0 -3px;
  margin-top: -3px;

  ${(props) => {
    if (props.activated) {
      return css`
        fill: #b5e5a4;
      `
    }
  }}
`

export default SvgStyle
