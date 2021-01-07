import styled from "styled-components"
import UserProfile from "../../MainLogin/Header/UserProfile"
import Search from "../../MainLogin/Header/Search"
import default_profile_image from "../../../Images/default_profile_image.png"

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const HeaderRight = ({
  user,
  openDropdown,
  isSearchboxOpen,
  onClickSearchButton,
  onChangeSearchbox,
  search,
}) => {
  let { profileImage } = user
  if (profileImage === "" || profileImage === undefined) {
    profileImage = default_profile_image
  }
  return (
    <Wrapper>
      <Search
        isSearchboxOpen={isSearchboxOpen}
        onClickSearchButton={onClickSearchButton}
        onChangeSearchbox={onChangeSearchbox}
        search={search}
      />
      <UserProfile profileImage={profileImage} openDropdown={openDropdown} />
    </Wrapper>
  )
}

export default HeaderRight
