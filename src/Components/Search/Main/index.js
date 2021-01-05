import StoryBlock from "./StoryBlock"
import UserBlock from "./UserBlock"
import styled from "styled-components"
import Color from "../../../Constants/Color"

const StoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 992px) {
    width: calc(75% + 10px);
    padding-right: 20px;
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

const NotFoundMessage = styled.p`
  padding-top: 100px;
  padding-bottom: 100px;
  margin: 0%;
  font-family: "Noto Sans";
  font-size: 18px;
  text-align: center;

  @media (min-width: 992px) {
    padding-top: 125px;
    border-top: 1px solid rgba(0, 0, 0, 0.15);
  }
`

const Main = ({ type, stories, people }) => {
  switch (type) {
    case "story":
      if (stories.length === 0) {
        return (
          <StoryWrapper>
            <NotFoundMessage>We couldn't find any posts.</NotFoundMessage>
          </StoryWrapper>
        )
      }
      return (
        <StoryWrapper>
          <StoryHeader>STORIES</StoryHeader>
          {stories.map((story, index) => {
            return <StoryBlock story={story} key={index} first={index === 0} />
          })}
        </StoryWrapper>
      )

    case "user":
      if (people.length === 0) {
        return (
          <StoryWrapper>
            <NotFoundMessage>We couldn't find any people.</NotFoundMessage>
          </StoryWrapper>
        )
      }
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
