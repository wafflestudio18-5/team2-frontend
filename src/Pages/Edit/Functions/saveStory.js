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
      // 임시 save 로직, api 연결 후 삭제
      // setTimeout(() => {
      //   setSaveStatus(SaveStatusConstants.SAVED)
      //   console.log(JSON.stringify(body))
      //   return { data: { id: 1 } }
      // }, 1000)

      // api 추가되면 사용
      const response = await putStoryStoryid(token, body, id)
      setSaveStatus(SaveStatusConstants.SAVED)
      return response
    } catch (error) {
      console.log(error)
      return error
    }
  } else {
    try {
      // 임시 save 로직, api 연결 후 삭제
      // setTimeout(() => {
      //   setSaveStatus(SaveStatusConstants.SAVED)
      //   setId(1)
      //   console.log(JSON.stringify(body))
      //   return { data: { id: 1 } }
      // }, 1000)

      // api 추가되면 사용
      const response = await postStory(token, body)
      setId(response.data.id)
      setSaveStatus(SaveStatusConstants.SAVED)
      return response
    } catch (error) {
      console.log(error)
      return error
    }
  }
}

export default saveStory
