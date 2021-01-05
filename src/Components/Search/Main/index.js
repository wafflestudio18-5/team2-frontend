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
  width: 100%;
  box-sizing: border-box;
  padding-top: 10px;

  @media (min-width: 992px) {
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    padding-top: 35px;
    width: calc(75% - 10px);
  }
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
            return <UserBlock user={user} key={index} first={index === 0} />
          })}
        </UserWrapper>
      )

    default:
      break
  }
}

export default Main
