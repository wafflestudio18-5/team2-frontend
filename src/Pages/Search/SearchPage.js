import Search from "../../Components/Search"
import { useCookies } from "react-cookie"
import { useLocation, useHistory } from "react-router-dom"
import { useState, useEffect } from "react"
import queryString from "query-string"
import getCurrentUser from "../Main/Functions/getCurrentUser"
import logout from "../Main/Functions/logout"
import fetchPeople from "./Functions/fetchPeople"
import fetchStories from "./Functions/fetchStories"
import enter from "./Functions/enter"
import onChangeInput from "./Functions/onChangeInput"

const SearchPage = () => {
  const searchWord = queryString.parse(useLocation().search).q
  const [cookie, , removeCookie] = useCookies(["auth"])
  const token = cookie.auth
  const history = useHistory()

  const [user, setUser] = useState({})
  const [stories, setStories] = useState([])
  const [people, setPeople] = useState([])
  const [inputValue, setInputValue] = useState("")
  const [showStories, setShowStories] = useState()
  const [isDropdownOpened, setIsDropdownOpened] = useState(false)

  useEffect(() => {
    if (token !== undefined) {
      getCurrentUser(token, setUser)
    }
    if (searchWord !== undefined || searchWord !== "") {
      setPeople([])
      setStories([])
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
      onChangeInput={(event) => onChangeInput(event, setInputValue)}
      enter={(event) => enter(event, inputValue, history)}
      isDropdownOpened={isDropdownOpened}
      openDropdown={() => setIsDropdownOpened(true)}
      hideDropdown={() => setIsDropdownOpened(false)}
      signOut={() => logout(token, removeCookie)}
    />
  )
}

export default SearchPage
