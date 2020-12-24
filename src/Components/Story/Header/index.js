import styled from "styled-components"
import Color from "../../../Constants/Color"
import HeaderLeft from "./HeaderLeft"
import HeaderRight from "./HeaderRight"

const HeaderWrapper = styled.div`
  display: flex;
  margin-bottom: 36px;
  width: 100vw;
  background: blue;
  border-bottom: solid 1px ${Color.black};
  min-height: 115px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Header = () => {
    return (
      <HeaderWrapper>
          Header
      </HeaderWrapper>
    )
  }
  
  export default Header