import styled from "styled-components"
import Color from "../../../Constants/Color"

const TopicEndWrapper = styled.div`
    margin-top: 12px;
    margin-bottom: 24px;
`

const TopicEndStyle = styled.a`
    letter-spacing: 0.083em;
    line-height: 20px;
    font-size: 14px;
    font-weight: 400;
    font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: ${Color.green};
    margin: 0;
    text-decoration: none;s
    &:hover {
      cursor: pointer;
    }
`

const TopicEnd = () => {
    return (
        <TopicEndWrapper>
           <TopicEndStyle href="https://medium.com/topics?source=home-------------------------------------">See all topics</TopicEndStyle>
        </TopicEndWrapper>
    )
}

export default TopicEnd