import Color from "../../../Constants/Color"
import styled from "styled-components"

const HeaderWrapper = styled.div`
  background: ${Color.yellow};
  width: 100%;
  height: 76px;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: solid 1px ${Color.black};
  position: fixed;
  top: 0;
  z-index: 1;

  @media (min-width: 904px) {
    padding: 0 64px;
  }
  @media (max-width: 903.98px) and (min-width: 728px) {
    padding: 0 48px;
  }
  @media (max-width: 727.98px) {
    padding: 0 24px;
  }
`

export default HeaderWrapper
