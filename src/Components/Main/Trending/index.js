import TrendingWrapper from "./TrendingWrapper"
import TrendingContent from "./TrendingContent"
import TrendingHeader from "./TrendingHeader"
import TrendingList from "./TrendingList"

const Trending = ({ trendingPosts }) => {
  return (
    <TrendingWrapper>
      <TrendingContent>
        <TrendingHeader />
        <TrendingList trendingPosts={trendingPosts} />
      </TrendingContent>
    </TrendingWrapper>
  )
}

export default Trending
