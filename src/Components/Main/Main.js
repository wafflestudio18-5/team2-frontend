import Header from "./Header"
import Center from "./Center"
import Trending from "./Trending"

const TrendingPosts = [
  {
    title: "title",
    summary: "summary",
    writier: "writer",
    data: "date",
    time: "time",
  },
]

const Main = () => {
  return (
    <div>
      <Header />
      <Center />
      <Trending trendingPosts={TrendingPosts} />
    </div>
  )
}

export default Main
