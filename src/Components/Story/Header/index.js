import styled from "styled-components"
import Color from "../../../Constants/Color"
import HeaderLeft from "./HeaderLeft"
import HeaderRight from "./HeaderRight"

const HeaderWrapper = styled.div`
  display: flex;
  margin-bottom: 36px;
  width: 100vw;
  border-bottom: solid 1px ${Color.lightGray};
  min-height: 115px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const HeaderBlock = styled.div`
    display: flex;
    max-width: 1192px;
    margin: 0 64px;
    width: 100%;
    box-sizing: inherit;
    min-height: 115px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const Header = () => {
    return (
      <HeaderWrapper>
          <HeaderBlock>
              <HeaderLeft />
              <HeaderRight />
          </HeaderBlock>
      </HeaderWrapper>
    )
  }
  
  export default Header