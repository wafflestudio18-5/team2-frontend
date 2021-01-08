import { getUser } from "../../../api"

const fetchPeople = async (searchWord, setPeople, setIsEnd, page = 1) => {
  try {
    const response = await getUser(searchWord, page)
    setPeople((people) => {
      return [...people, ...response.data.users]
    })
    if (response.data.next === null) {
      setIsEnd(true)
    }
  } catch (error) {
    console.log(error)
  }
}

export default fetchPeople
