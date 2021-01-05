import { getStory } from "../../../api"

const fetchStories = async (searchWord, setStories, page = 1) => {
  // story 검색 결과를 패치
  try {
    const response = await getStory({ page, title: searchWord })
    setStories((stories) => {
      return [...stories, ...response.data]
    })
  } catch (error) {
    console.log(error)
  }
}

export default fetchStories
