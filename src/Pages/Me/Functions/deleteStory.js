import { deleteStoryStoryId } from "../../../api"

const deleteStory = async (token, selectedStoryId) => {
  try {
    const response = await deleteStoryStoryId(token, selectedStoryId)
    return response
  } catch (error) {
    console.log(error)
  }
}

export default deleteStory
