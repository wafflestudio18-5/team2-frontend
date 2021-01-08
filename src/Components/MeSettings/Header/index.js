import styled from "styled-components"
import Logo from "../../Search/Header/Logo"
import SmallLogo from "../../Search/Header/SmallLogo"
import HeaderRight from "./HeaderRight"

const HeaderShadow = styled.div`
  position: absolute;
  width: 100%;
  height: 65px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05) !important;
  @media (max-width: 767px) {
    height: 56px;
  }
`

const HeaderStyle = styled.div`
  max-width: 1032px;
  padding: 0 20px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Header = (props) => {
  return (
    <HeaderShadow>
      <HeaderStyle>
        <a href="/main">
          <Logo />
          <SmallLogo />
        </a>
        <HeaderRight {...props} />
      </HeaderStyle>
    </HeaderShadow>
  )
}

export default Header
