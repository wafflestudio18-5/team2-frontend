import Search from "../../Components/Search"
import { useCookies } from "react-cookie"
import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import queryString from "query-string"
import getCurrentUser from "../Main/Functions/getCurrentUser"
import fetchPeople from "./Functions/fetchPeople"
import fetchStories from "./Functions/fetchStories"

const SearchPage = () => {
  const searchWord = queryString.parse(useLocation().search).q
  const token = useCookies(["auth"])[0].auth

  const [user, setUser] = useState({})
  const [stories, setStories] = useState([])
  const [people, setPeople] = useState([])
  // const [inputValue, setInputValue] = useState("")

  useEffect(() => {
    if (token !== undefined) {
      getCurrentUser(token, setUser)
    }
    if (searchWord !== undefined || searchWord !== "") {
      fetchPeople(searchWord, setPeople)
      fetchStories(searchWord, setStories)
    }
  }, [searchWord, token])

  return (
    <Search
      searchWord={searchWord}
      user={user}
      stories={stories}
      people={people}
    />
  )
}

export default SearchPage
