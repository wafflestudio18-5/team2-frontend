import { getStoryMain, getStoryTrending } from "../../../api"

const getMainTrending = async (
  login,
  setTrendingPosts,
  setCenterArticles = () => {},
  token = ""
) => {
  // Main page에서 main, trending stories를 불러오는 함수.
  // login: Boolean
  getStoryTrending(token)
    .then((response) => setTrendingPosts(response.data))
    .catch((error) => console.log(error))

  if (login) {
    getStoryMain(token)
      .then((response) => setCenterArticles(response.data))
      .catch((error) => console.log(error))
  }
}

export default getMainTrending
