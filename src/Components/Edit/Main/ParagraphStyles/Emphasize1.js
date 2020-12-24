import styled from "styled-components"
import Color from "../../../../Constants/Color"

const Emphasize1 = styled.blockquote`
  max-width: 740px;
  width: 100%;
  min-height: 30px;
  padding: 0 17px;
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;
  word-break: berak-word;
  margin-top: 10px;
  font-family: "Lora";
  font-style: italic;
  font-size: 19px;
  line-height: 1.58;
  letter-spacing: -0.003em;
  color: ${Color.black};
  border-left: 3px solid ${Color.black};
  :focus {
    outline: 0;
  }
`

export default Emphasize1
