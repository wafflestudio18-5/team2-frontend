import { getStoryMain, getStoryTrending } from "../../../api"

const getMainTrending = async (
  login,
  setTrendingPosts,
  setCenterArticles = () => {},
  token = ""
) => {
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
