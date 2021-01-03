import styled from "styled-components"
import HeaderLeft from "./HeaderLeft"
import HeaderRight from "./HeaderRight"

const HeaderWrapper = styled.div`
  position: fixed;
  background-color: rgba(255, 255, 255, 0.97);
  width: 100vw;
  top: 0px;
`

const HeaderContent = styled.div`
  max-width: 1032px;
  height: 65px;
  padding: 0 20px;
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Header = ({ user, status, publish, openDropdown }) => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <HeaderLeft userName={user.username} status={status} />
        <HeaderRight
          profileUrl={user.imageUrl}
          publish={publish}
          openDropdown={openDropdown}
        />
      </HeaderContent>
    </HeaderWrapper>
  )
}

export default Header
