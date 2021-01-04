import { getStoryMain, getStoryTrending } from "../../../api"

const getMainTrending = async (
  login,
  setTrendingPosts,
  setCenterArticles = () => {},
  token = ""
) => {
  // Main page에서 main, trending stories를 불러오는 함수.
  // login: Boolean
  try {
    const trendingResponse = await getStoryTrending(token)
    setTrendingPosts(trendingResponse.data)
    if (login) {
      const centerResponse = await getStoryMain(token)
      setCenterArticles(centerResponse.data)
    }
  } catch (error) {
    console.log(error)
  }
}

export default getMainTrending
