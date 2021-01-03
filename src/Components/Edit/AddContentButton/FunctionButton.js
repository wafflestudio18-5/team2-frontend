import styled from "styled-components"

const FunctionButton = styled.button`
  margin-right: 9px;
  width: 32px;
  height: 32px;
  line-height: 30px;
  padding: 0;
  border: 1px solid rgba(0, 0, 0, 0.68);
  background: 0;
  border-radius: 50%;
  cursor: pointer;
  vertical-align: bottom;
  outline: none;
  opacity: 0;
  visibility: hidden;

  &.opened {
    opacity: 1;
    visibility: visible;
    transform: scale(1);
    transition-duration: 0.2s;
  }
`

export default FunctionButton
