import { getUser } from "../../../api"

const fetchPeople = async (searchWord, setPeople) => {
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
