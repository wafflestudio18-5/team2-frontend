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
    // publish 로직, api 추가 이후 사용
    const saveResponse = await saveStory(
      token,
      story,
      saveStatus,
      setSaveStatus,
      id,
      setId
    )
    const storyId = saveResponse.data.id
    await postStoryStoryidPublish(token, storyId)
    history.push("/story/" + storyId)

    // 임시 publish 로직, api추가되면 삭제
    // setTimeout(() => {
    //   console.log(JSON.stringify(story))
    //   history.push("/story/1")
    // }, 1000)
  } catch (error) {
    console.log(error)
    return error
  }
}

export default publish
