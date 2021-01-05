import styled from "styled-components"
import GetStartedButton from "./GetStartedButton"
import SignInButton from "./SigninButton"
import UserProfile from "../../MainLogin/Header/UserProfile"
import default_profile_image from "../../../Images/default_profile_image.png"

const Wrapper = styled.div``

const HeaderRight = ({ user, openDropdown }) => {
  if (user === undefined) {
    return (
      <Wrapper>
        <SignInButton />
        <GetStartedButton />
      </Wrapper>
    )
  } else {
    let { profileImage } = user
    if (profileImage === "" || profileImage === undefined) {
      profileImage = default_profile_image
    }
    return (
      <UserProfile profileImage={profileImage} openDropdown={openDropdown} />
    )
  }
}

export default HeaderRight
