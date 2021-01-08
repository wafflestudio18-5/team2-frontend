import { getResponse } from "../../../api"

const fetchResponse = async (
  setResponse,
  setResponseNum,
  setIsEnd,
  storyid,
  page = 1
) => {
  try {
    const response = await getResponse(storyid, page)
    console.log(response.data)
    setResponseNum(response.data.count)
    setResponse((responses) => {
      return [...responses, ...response.data.comments]
    })
    if (response.data.next === null) {
      setIsEnd(true)
    }
  } catch (error) {
    console.log(error)
  }
}

export default fetchResponse
