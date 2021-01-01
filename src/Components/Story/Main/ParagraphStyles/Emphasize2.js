import styled from "styled-components"
import Color from '../../../../Constants/Color';

const Emphasize2 = styled.blockquote`
  padding-left: 30px;
  margin-top: 2.75em;
  font-size: 28px;
  font-weight: lighter;
  letter-spacing: -0.009em;
  line-height: 40px;
  margin-bottom: -0.46em;
  font-style: normal;
  color: ${Color.gray};   
  font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
  word-break: break-word;
  box-sizing: border-box;
  :focus {
    outline: 0;
  }
  a {
    color: inherit
  }
`

export default Emphasize2
