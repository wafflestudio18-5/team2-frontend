import { getUserMeStory } from "../../../api"

const fetchStories = async (token, type, setStories, setIsEnd, page = 1) => {
  const typeBool = type === "public"
  try {
    const response = await getUserMeStory(token, typeBool, page)
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
