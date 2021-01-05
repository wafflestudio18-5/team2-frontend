import MainPage from "./Pages/Main"
import EditPage from "./Pages/Edit"
import CallbackPage from "./Pages/Callback"
import StoryPage from "./Pages/Story/Story"
import SearchPage from "./Pages/Search"

const routes = {
  main: { path: "/main", component: MainPage },
  edit: { path: "/edit", component: EditPage },
  story: { path: "/story/:story_id", component: StoryPage },
  callback: { path: "/callback", component: CallbackPage },
  search: { path: "/search", component: SearchPage },
}
export { routes }
