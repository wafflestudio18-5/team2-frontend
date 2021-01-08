import { getStoryById } from "../../../api"

const getStory = async (id, setStory, token) => {
  try {
    const response = await getStoryById(id, token)
    setStory(response.data.body)
    return response
  } catch (error) {
    console.log(error.response.data)
    return error
  }
}

export default getStory
