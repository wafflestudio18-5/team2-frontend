import { postStoryStoryidPublish } from "../../../api"
import saveStory from "./saveStory"

const publish = async (token, story, saveStatus, id, history) => {
  try {
    const saveResponse = await saveStory(token, story, saveStatus, id)
    const storyId = saveResponse.data.id
    await postStoryStoryidPublish(token, storyId)
    history.push("/story/" + storyId)
  } catch (error) {
    console.log(error)
    console.log(error.response.data)
    return error
  }
}

export default publish
