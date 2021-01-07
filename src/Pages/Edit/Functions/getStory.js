import { getStoryById } from "../../../api"

const getStory = async (id, setStory) => {
  try {
    const response = await getStoryById(id)
    setStory(response.data.body)
    return response
  } catch (error) {
    console.log(error)
    return error
  }
}

export default getStory
