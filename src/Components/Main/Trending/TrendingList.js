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
      <TrendingBlock index={0} story={trendingPosts[0]} />
      <TrendingBlock index={1} story={trendingPosts[1]} />
      <TrendingBlock index={2} story={trendingPosts[2]} />
      <TrendingBlock index={3} story={trendingPosts[3]} />
      <TrendingBlock index={4} story={trendingPosts[4]} />
      <TrendingBlock index={5} story={trendingPosts[5]} />
      {trendingPosts.map((story, index) => {
        return <TrendingBlock index={index} story={story} key={index} />
      })}
    </TrendingListStyle>
  )
}

export default TrendingList
