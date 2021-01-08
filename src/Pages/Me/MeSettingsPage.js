import MeSettings from "../../Components/MeSettings"
import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { useCookies } from "react-cookie"
import getCurrentUser from "../Main/Functions/getCurrentUser"
import onClickSearchButton from "../Main/Functions/onClickSearchButton"
import onChangeSearchbox from "../Main/Functions/onChangeSearchbox"
import search from "../Main/Functions/search"
import logout from "../Main/Functions/logout"
import getUserSpec from "./Functions/getUserSpec"
import changeMyInfo from "./Functions/changeMyInfo"

const MeSettingsPage = () => {
  const [cookie, , removeCookie] = useCookies(["auth"])
  const token = cookie.auth
  const history = useHistory()

  if (token === "" || token === undefined) {
    // 로그인 하지 않았으면 main page로 redirect
    history.push("/")
  }

  useEffect(() => {
    getCurrentUser(token, setUser)
    getUserSpec(token, setUserSpec)
  }, [token])

  // states
  // GET user/me/about/으로 가져온 user. header에 사용
  const [user, setUser] = useState({})
  // GET user/me/로 가져온 user. main에 사용
  const [userSpec, setUserSpec] = useState({
    name: "",
    bio: "",
    profile_image: "",
  })
  // 헤더의 검색창이 열려있는지 닫혀있는지
  const [isSearchboxOpen, setIsSearchboxOpen] = useState(false)
  // 검색창의 value
  const [searchValue, setSearchValue] = useState("")
  // Dropdown 표시 여부
  const [isDropdownOpened, setIsDropdownOpened] = useState(false)

  const onChangeInput = (event) => {
    const { name, value } = event.target
    setUserSpec((state) => {
      return {
        ...state,
        [name]: value,
      }
    })
  }

  return (
    <MeSettings
      user={user}
      isDropdownOpened={isDropdownOpened}
      openDropdown={() => setIsDropdownOpened(true)}
      hideDropdown={() => setIsDropdownOpened(false)}
      isSearchboxOpen={isSearchboxOpen}
      onClickSearchButton={() =>
        onClickSearchButton(isSearchboxOpen, setIsSearchboxOpen, history)
      }
      onChangeSearchbox={(event) => onChangeSearchbox(event, setSearchValue)}
      search={(event) => search(event, searchValue, history)}
      signOut={() => logout(token, removeCookie)}
      userSpec={userSpec}
      onChangeInput={onChangeInput}
      save={() => {
        changeMyInfo(token, userSpec, setUserSpec)
        getCurrentUser(token, setUser)
        getUserSpec(token, setUserSpec)
      }}
    />
  )
}

export default MeSettingsPage
