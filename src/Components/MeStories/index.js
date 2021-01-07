import styled from "styled-components"
import Header from "./Header"

const MeStoriesStyle = styled.div``

const MeStories = ({ user, openDropdown }) => {
  return (
    <MeStoriesStyle>
      <Header user={user} openDropdown={openDropdown} />
    </MeStoriesStyle>
  )
}

export default MeStories
