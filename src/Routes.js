import MainPage from "./Pages/Main"
import EditPage from "./Pages/Edit"
import CallbackPage from "./Pages/Callback"
import StoryPage from "./Pages/Story/Story"

const routes = {
  story: { path: '/main/:title', component: StoryPage },
  main: { path: "/main", component: MainPage },
  edit: { path: "/edit", component: EditPage },
  callback: { path: "/callback", component: CallbackPage },
}
export { routes };
