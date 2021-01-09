import { deleteStoryStoryId } from "../../../api"

const deleteStory = async (token, selectedStoryId, history) => {
  try {
    const response = await deleteStoryStoryId(token, selectedStoryId)
    history.push('/main')
    return response
  } catch (error) {
    console.log(error)
  }
}

export default deleteStory