import styled from "styled-components"
import GetStartedButton from "./GetStartedButton"
import SignInButton from "./SigninButton"

const Wrapper = styled.div``

const HeaderRight = ({ user }) => {
  if (user === undefined) {
    return (
      <Wrapper>
        <SignInButton />
        <GetStartedButton />
      </Wrapper>
    )
  }
}

export default HeaderRight
