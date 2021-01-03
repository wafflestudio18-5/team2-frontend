import { postStoryStoryidPublish } from "../../../api"
import saveStory from "./saveStory"

const publish = async (
  token,
  story,
  saveStatus,
  setSaveStatus,
  id,
  setId,
  history
) => {
  try {
    // const saveResponse = await saveStory(
    //   token,
    //   story,
    //   saveStatus,
    //   setSaveStatus,
    //   id,
    //   setId
    // )
    // const response = postStoryStoryidPublish(token, storyId)
    // return response
    setTimeout(() => {
      console.log(JSON.stringify(story))
      history.push("/story/1")
    }, 1000)
  } catch (error) {
    console.log(error)
    return error
  }
}

export default publish
