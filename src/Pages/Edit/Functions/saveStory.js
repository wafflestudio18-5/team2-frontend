import { postStory, putStoryStoryid } from "../../../api"
import getStoryInfo from "./getStoryInfo"
import SaveStatusConstants from "../../../Constants/SaveStatusConstants"

const saveStory = async (token, story, saveStatus, id) => {
  if (saveStatus.current === SaveStatusConstants.SAVING) {
    return
  }
  saveStatus.current = SaveStatusConstants.SAVING
  const { title, subtitle, featured_image } = getStoryInfo(story)

  if (title === "") {
    saveStatus.current = SaveStatusConstants.INVALID_TITLE
    return
  }

  const body = {
    title,
    subtitle,
    body: story,
    featured_image,
  }
  if (id.current !== -1) {
    try {
      const response = await putStoryStoryid(token, body, id.current)
      saveStatus.current = SaveStatusConstants.SAVED
      return response
    } catch (error) {
      console.log(error)
      console.log(error.response.data)
      saveStatus.current = SaveStatusConstants.SAVE_FAILED
      return error
    }
  } else {
    try {
      const response = await postStory(token, body)
      id.current = response.data.id
      saveStatus.current = SaveStatusConstants.SAVED
      return response
    } catch (error) {
      console.log(error)
      console.log(error.response.data)
      saveStatus.current = SaveStatusConstants.SAVE_FAILED
      return error
    }
  }
}

export default saveStory
