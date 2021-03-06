import { postStoryStoryidPublish } from "../../../api"
import saveStory from "./saveStory"

const publish = async (
  token,
  story,
  saveStatus,
  setSaveStatus,
  id,
  history
) => {
  try {
    const saveResponse = await saveStory(
      token,
      story,
      saveStatus,
      setSaveStatus,
      id
    )
    const storyId = saveResponse.data.id
    await postStoryStoryidPublish(token, storyId)
    history.push("/story/" + storyId)
  } catch (error) {
    console.log(error)
    return error
  }
}

export default publish
