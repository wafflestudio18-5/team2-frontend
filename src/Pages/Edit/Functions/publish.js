import { postStoryStoryidPublish } from "../../../api"
import saveStory from "./saveStory"

const publish = async (token, story, saveStatus, setSaveStatus, id = -1) => {
  try {
    const saveResponse = await saveStory(
      token,
      story,
      saveStatus,
      setSaveStatus,
      id
    )
    const storyId = saveResponse.data.id
    const response = postStoryStoryidPublish(token, storyId)
    return response
  } catch (error) {
    console.log(error)
    return error
  }
}

export default publish
