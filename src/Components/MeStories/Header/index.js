import styled from "styled-components"
import Logo from "../../Search/Header/Logo"
import SmallLogo from "../../Search/Header/SmallLogo"
import HeaderRight from "./HeaderRight"

const HeaderShadow = styled.div`
  position: absolute;
  width: 100%;
  height: 65px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05) !important;
  display: flex;
  justify-content: center;
  @media (max-width: 767px) {
    height: 56px;
  }
`

const HeaderStyle = styled.div`
  max-width: 1192px;
  width: 100%;
  margin: 0 64px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 903.98px) {
    margin-right: 48px;
    margin-left: 48px;
  }

  @media (max-width: 767px) {
    margin-bottom: 24px;
  }

  @media (max-width: 552px) {
    margin-right: 24px;
    margin-left: 24px;
  }
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
