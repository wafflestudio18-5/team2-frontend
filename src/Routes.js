import MainPage from "./Pages/Main"
import EditPage from "./Pages/Edit"
import CallbackPage from "./Pages/Callback"
import StoryPage from "./Pages/Story/Story"

const routes = {
  main: { path: "/main", component: MainPage },
  edit: { path: "/edit", component: EditPage },
  story: { path: '/:user/:story', component: StoryPage },
  callback: { path: "/callback", component: CallbackPage },
}
export { routes };
