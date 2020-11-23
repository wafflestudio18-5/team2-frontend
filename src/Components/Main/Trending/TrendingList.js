import styled from "styled-components"
import TrendingBlock from "./TrendingBlock"

const TrendingListStyle = styled.div`
  display: flex;
  width: 100%;
`

const TrendingList = ({ trendingPosts }) => {
  return (
    <TrendingListStyle>
      {trendingPosts.map((post, index) => {
        return (
          <TrendingBlock
            index={index}
            title={post.title}
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
