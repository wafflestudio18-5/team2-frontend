import styled from "styled-components"

const MainButton = styled.button`
  margin-right: 22px;
  width: 32px;
  height: 32px;
  line-height: 30px;
  padding: 0;
  border: 1px solid rgba(0, 0, 0, 0.68);
  background: 0;
  border-radius: 50%;
  cursor: pointer;
  vertical-align: bottom;
  transition: transform 250ms;
  outline: none;

  &.opened {
    transform: rotate(45deg);
  }
`

export default MainButton
