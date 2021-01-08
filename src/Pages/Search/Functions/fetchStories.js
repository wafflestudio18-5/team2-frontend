import { getStory } from "../../../api"

const fetchStories = async (searchWord, setStories, setIsEnd, page = 1) => {
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
