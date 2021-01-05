import StoryBlock from "./StoryBlock"
import UserBlock from "./UserBlock"
import styled from "styled-components"

const StoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Main = ({ type, stories, people }) => {
  switch (type) {
    case "story":
      return (
        <StoryWrapper>
          {stories.map((story, index) => {
            return <StoryBlock story={story} key={index} />
          })}
        </StoryWrapper>
      )

    case "user":
      return (
        <UserWrapper>
          {people.map((user, index) => {
            return <UserBlock user={user} key={index} />
          })}
        </UserWrapper>
      )

    default:
      break
  }
}

export default Main
