import Header from "./Header"
import Center from "./Center"
import Trending from "./Trending"

const Main = ({ TrendingPosts }) => {
  return (
    <div>
      <Header />
      <Center />
      <Trending trendingPosts={TrendingPosts} />
    </div>
  )
}

export default Main
