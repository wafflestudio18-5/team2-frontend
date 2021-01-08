import styled from "styled-components"
import Color from "../../../Constants/Color"
import HeaderLeft from "./HeaderLeft"
import HeaderRight from "./HeaderRight"

const HeaderWrapper = styled.div`
  display: flex;
  margin: 0 0 36px;
  width: 100%;
  border-bottom: solid 1px ${Color.lightGray};
  min-height: 115px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 728px) {
    height: 231px;
  }
`

const HeaderBlock = styled.div`
  display: flex;
  width: 100%;
  max-width: 1192px;
  box-sizing: inherit;
  min-height: 115px;
  flex-direction: row;
  align-items: center;
  padding: 0 64px;
  @media (max-width: 728px) {
    padding: 0 24px;
    flex-direction: column;
  }
  @media (max-width: 904px) and (min-width: 728px) {
    padding: 0 48px;
  }
`

const Header = ({
  showModal,
  userinfo,
  logged_in,
  me,
  isSearchboxOpen,
  onClickSearchButton,
  onChangeSearchbox,
  search,
  openDropdown,
}) => {
  return (
    <HeaderWrapper>
      <HeaderBlock>
        <HeaderLeft userinfo={userinfo} />
        <HeaderRight
          showModal={showModal}
          logged_in={logged_in}
          me={me}
          isSearchboxOpen={isSearchboxOpen}
          onClickSearchButton={onClickSearchButton}
          onChangeSearchbox={onChangeSearchbox}
          search={search}
          openDropdown={openDropdown}
        />
      </HeaderBlock>
    </HeaderWrapper>
  )
}

export default Header
