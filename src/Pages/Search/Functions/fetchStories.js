import { getStory } from "../../../api"

const fetchStories = async (searchWord, setStories, setIsEnd, page = 1) => {
  // story 검색 결과를 패치
  console.log(page)
  try {
    const response = await getStory({ page, title: searchWord })
    setStories((stories) => {
      return [...stories, ...response.data.stories]
    })
    if (response.data.next === null) {
      setIsEnd(true)
    }
  } catch (error) {
    console.log(error)
  }
}

export default fetchStories
