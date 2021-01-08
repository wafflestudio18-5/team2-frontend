import { getStoryById } from "../../../api"

const getStory = async (id, setStory, token, userId, history) => {
  try {
    const response = await getStoryById(id, token)
    if (userId !== undefined && response.data.writer.id !== userId) {
      history.push("/")
      return
    }
    setStory(response.data.body)
    return response
  } catch (error) {
    history.push("/")
    return error
  }
}

export default getStory
