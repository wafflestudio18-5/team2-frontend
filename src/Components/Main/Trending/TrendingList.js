import styled from "styled-components"
import TrendingBlock from "./TrendingBlock"

const TrendingListStyle = styled.div`
  display: flex;
  width: calc(100%+32px);
  margin: 0 -16px;
  align-items: flex-start;
  flex-wrap: wrap;
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
            profileurl={post.profileurl}
          />
        )
      })}
    </TrendingListStyle>
  )
}

export default TrendingList
