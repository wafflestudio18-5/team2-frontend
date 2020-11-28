import styled from "styled-components"
import TopicBlock from "./TopicBlock"

const TopicListStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`

const TopicList = ({ Topics }) => {
    return (
        <TopicListStyle>
            {Topics.map((topic) => {
                return <TopicBlock topic={topic} />
            })}
        </TopicListStyle>
    )
}

export default TopicList
