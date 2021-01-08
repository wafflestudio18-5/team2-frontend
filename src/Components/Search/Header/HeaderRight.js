import styled from "styled-components"
import GetStartedButton from "./GetStartedButton"
import SignInButton from "./SigninButton"
import UserProfile from "../../MainLogin/Header/UserProfile"
import default_profile_image from "../../../Images/default_profile_image.png"

const Wrapper = styled.div``

const HeaderRight = ({ user, openDropdown, showModal }) => {
  if (user === undefined) {
    return (
      <Wrapper>
        <SignInButton showModal={showModal} />
        <GetStartedButton showModal={showModal} />
      </Wrapper>
    )
  } else {
    let { profile_image } = user
    if (profile_image === "" || profile_image === undefined) {
      profile_image = default_profile_image
    }
    return (
      <UserProfile profileImage={profile_image} openDropdown={openDropdown} />
    )
  }
}

export default HeaderRight
