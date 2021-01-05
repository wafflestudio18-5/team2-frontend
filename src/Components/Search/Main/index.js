import StoryBlock from "./StoryBlock"
import UserBlock from "./UserBlock"
import styled from "styled-components"
import Color from "../../../Constants/Color"

const StoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 992px) {
    width: calc(75% - 10px);
  }
`

const StoryHeader = styled.header`
  padding-top: 15px;
  margin-bottom: 10px;
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  font-size: 15px;
  font-family: "Noto Sans";
  color: ${Color.black};
  letter-spacing: 0.1em;
  line-height: 1.4;

  @media (max-width: 991.98px) {
    display: none;
  }
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
          <StoryHeader>STORIES</StoryHeader>
          {stories.map((story, index) => {
            return <StoryBlock story={story} key={index} first={index === 0} />
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
