import { getStory } from "../../../api"

const fetchStories = async (searchWord, setStories, page = 1) => {
  console.log(page)
  // story 검색 결과를 패치
  try {
    const response = await getStory({ page, title: searchWord })
    setStories((stories) => {
      return [...stories, ...response.data.stories]
    })
  } catch (error) {
    console.log(error)
  }
}

export default fetchStories
