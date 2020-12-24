import styled from "styled-components"
import HeaderLeft from "./HeaderLeft"
import HeaderRight from "./HeaderRight"

const HeaderWrapper = styled.div`
  display: block;
  margin-bottom: 36px;
  width: 100vw;
  background: blue;
`

const Header = () => {
    return (
      <HeaderWrapper>
          Header
      </HeaderWrapper>
    )
  }
  
  export default Header