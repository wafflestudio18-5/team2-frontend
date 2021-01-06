import { postStory, putStoryStoryid } from "../../../api"
import getStoryInfo from "./getStoryInfo"
import SaveStatusConstants from "../../../Constants/SaveStatusConstants"

const saveStory = async (token, story, saveStatus, setSaveStatus, id) => {
  if (saveStatus === SaveStatusConstants.SAVING) {
    return
  }
  setSaveStatus(SaveStatusConstants.SAVING)
  const { title, subtitle, featured_image } = getStoryInfo(story)

  if (title === "") {
    setSaveStatus(SaveStatusConstants.INVALID_TITLE)
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
      setSaveStatus(SaveStatusConstants.SAVED)
      return response
    } catch (error) {
      console.log(error)
      console.log(error.response.data)
      setSaveStatus(SaveStatusConstants.SAVE_FAILED)
      return error
    }
  } else {
    try {
      const response = await postStory(token, body)
      id.current = response.data.id
      setSaveStatus(SaveStatusConstants.SAVED)
      return response
    } catch (error) {
      console.log(error)
      console.log(error.response.data)
      setSaveStatus(SaveStatusConstants.SAVE_FAILED)
      return error
    }
  }
}

export default saveStory
