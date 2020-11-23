import styled from "styled-components"
import TrendingBlock from "./TrendingBlock"

const TrendingListStyle = styled.div``

const TrendingList = ({ trendingPosts }) => {
  return (
    <TrendingListStyle>
      {trendingPosts.map((post, index) => {
        return (
          <div>
            <TrendingBlock
              index={index}
              title={post.title}
              summary={post.summary}
              writer={post.writer}
              date={post.date}
              time={post.time}
            />
          </div>
        )
      })}
    </TrendingListStyle>
  )
}

export default TrendingList
