import styled from "styled-components"
import Header from "./Header"
import Main from "./Main"
import UserDropdown from "../MainLogin/UserDropdown"

const SettingsStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

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
  userSpec,
  onChangeInput,
  save,
  errorMessage,
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
      <Main
        userSpec={userSpec}
        onChangeInput={onChangeInput}
        save={save}
        errorMessage={errorMessage}
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
