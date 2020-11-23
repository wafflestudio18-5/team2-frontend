import styled from "styled-components"
import TrendingBlock from "./TrendingBlock"

const TrendingListStyle = styled.div``

const TrendingList = ({ trendingPosts }) => {
  return (
    <TrendingListStyle>
      {trendingPosts.map((post) => {
        return (
          <TrendingBlock
            title={post.title}
            summary={post.summary}
            writer={post.writer}
            date={post.date}
            time={post.time}
          />
        )
      })}
    </TrendingListStyle>
  )
}

export default TrendingList
