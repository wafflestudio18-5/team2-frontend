import StorySearchPage from "./StorySearchPage"
import UserSearchPage from "./UserSearchPage"

const routes = {
  story: { path: "/search", component: StorySearchPage },
  user: { path: "/search/users", component: UserSearchPage },
}

export default routes
