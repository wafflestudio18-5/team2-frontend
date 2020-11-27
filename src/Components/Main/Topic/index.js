import TopicWrapper from "./TopicWrapper"
import TopicTitle from "./TopicTitle"
import TopicList from "./TopicList"
import TopicEnd from "./TopicEnd"

const Topic = ({ Topics }) => {
    return (
        <TopicWrapper>
            <TopicTitle />
            <TopicList Topics = { Topics }/>
            <TopicEnd />
        </TopicWrapper>
    )
}

export default Topic