import styled from "styled-components"
import Color from "../../../Constants/Color"

const TopicTitleWrapper = styled.div`
    margin-bottom: 16px;
    display: block;
`

const TopicTitleStyle = styled.p`
    letter-spacing: 0.083em;
    line-height: 16px;
    font-size: 12px;
    font-weight: 700;
    font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: ${Color.borderBlack};
    margin: 0;

`

const TopicTitle = () => {
    return (
        <TopicTitleWrapper>
           <TopicTitleStyle>DISCOVER MORE OF WHAT MATTERS TO YOU</TopicTitleStyle>
        </TopicTitleWrapper>
    )
}

export default TopicTitle