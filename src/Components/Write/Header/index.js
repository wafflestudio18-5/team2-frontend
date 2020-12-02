import styled from "styled-components"
import HeaderLeft from "./HeaderLeft"
import HeaderRight from "./HeaderRight"

const HeaderWrapper = styled.div`
  position: fixed;
  width: 100vw;
`

const HeaderContent = styled.div`
  max-width: 1032px;
  height: 65px;
  padding: 0 25px;
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: center;
`

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <HeaderLeft />
        <HeaderRight />
      </HeaderContent>
    </HeaderWrapper>
  )
}

export default Header
