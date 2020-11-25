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
        return <TrendingBlock index={index} post={post} />
      })}
    </TrendingListStyle>
  )
}

export default TrendingList
