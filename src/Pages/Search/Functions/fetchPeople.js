import { getUser } from "../../../api"

const fetchPeople = async (searchWord, setPeople) => {
  // user 검색 결과를 패치
  try {
    const response = await getUser(searchWord)
    setPeople((people) => {
      return [...people, ...response.data]
    })
  } catch (error) {
    console.log(error)
  }
}

export default fetchPeople
