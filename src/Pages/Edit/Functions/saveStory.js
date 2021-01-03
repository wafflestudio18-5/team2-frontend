import { postStory, putStoryStoryid } from "../../../api"
import getStoryInfo from "./getStoryInfo"
import SaveStatusConstants from "../../../Constants/SaveStatusConstants"

const saveStory = async (
  token,
  story,
  saveStatus,
  setSaveStatus,
  id,
  setId
) => {
  if (saveStatus === SaveStatusConstants.SAVING) {
    return
  }
  await setSaveStatus(SaveStatusConstants.SAVING)
  const { title, subtitle, featured_image } = getStoryInfo(story)
  const body = {
    title,
    subtitle,
    body: story,
    featured_image,
  }
  if (id !== -1) {
    try {
      const response = await putStoryStoryid(token, body, id)
      await setSaveStatus(SaveStatusConstants.SAVED)
      return response
    } catch (error) {
      console.log(error)
      return error
    }
  } else {
    try {
      const response = await postStory(token, body)
      await setSaveStatus(SaveStatusConstants.SAVED)
      await setId(response.data.id)
      return response
    } catch (error) {
      console.log(error)
      return error
    }
  }
}

export default saveStory
