import styled from "styled-components"
import Header from "./Header"
import UserDropdown from "../MainLogin/UserDropdown"

const SettingsStyle = styled.div``

const MeSettings = ({
  user,
  isDropdownOpened,
  openDropdown,
  hideDropdown,
  signOut,
  isSearchboxOpen,
  onClickSearchButton,
  onChangeSearchbox,
  search,
}) => {
  return (
    <SettingsStyle>
      <Header
        user={user}
        openDropdown={openDropdown}
        isSearchboxOpen={isSearchboxOpen}
        onClickSearchButton={onClickSearchButton}
        onChangeSearchbox={onChangeSearchbox}
        search={search}
      />
      {isDropdownOpened && (
        <UserDropdown
          user={user}
          signOut={signOut}
          hideDropdown={hideDropdown}
        />
      )}
    </SettingsStyle>
  )
}

export default MeSettings
