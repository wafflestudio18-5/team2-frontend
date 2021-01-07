import styled from "styled-components"
import Color from "../../../Constants/Color"

const MainListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const StoryBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  border-bottom: 1px solid rgb(230, 230, 230);
`

const Title = styled.a`
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  max-height: 40px;
  font-weight: 700;
  margin: 0;
  color: ${Color.borderBlack};
  text-decoration: none;
  font-size: 16px;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Subtitle = styled.a`
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  max-height: 40px;
  font-weight: 400;
  margin: 0;
  color: ${Color.gray};
  text-decoration: none;
  font-size: 16px;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 4px;
`

const LastLine = styled.div`
  display: flex;
`

const Time = styled.p`
  margin: 0;
  margin-top: 8px;
  color: ${Color.gray};
  font-size: 14px;
  line-height: 20px;
`

const ActionButton = styled.button`
  border: 0;
  margin: 0;
  margin-left: 8px;
  margin-top: 6px;
  background: 0;
  padding: 0;
  height: 21px;
  cursor: pointer;
`

const SvgStyle = styled.svg`
  fill: ${Color.gray};
  width: 21px;
  height: 21px;
  vertical-align: middle;
`

const MainList = ({ stories, type, openActionButton }) => {
  var link
  if (type === "public") {
    link = "/story/"
  } else if (type === "drafts") {
    link = "/edit/"
  }
  return (
    <MainListWrapper>
      {stories.map((story, index) => {
        return (
          <StoryBlock key={index}>
            <Title href={link + story.id}>{story.title}</Title>
            <Subtitle href={link + story.id}>{story.subtitle}</Subtitle>
            <LastLine>
              <Time>{story.updated_at}</Time>
              <ActionButton
                onClick={() => {
                  openActionButton(story.id)
                }}
              >
                <SvgStyle>
                  <path d="M4 7.33L10.03 14l.5.55.5-.55 5.96-6.6-.98-.9-5.98 6.6h1L4.98 6.45z"></path>
                </SvgStyle>
              </ActionButton>
            </LastLine>
          </StoryBlock>
        )
      })}
    </MainListWrapper>
  )
}

export default MainList
