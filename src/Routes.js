import MainPage from "./Pages/Main"
import EditPage from "./Pages/Edit"
import CallbackPage from "./Pages/Callback"

const routes = {
  main: { path: "/main", component: MainPage },
  edit: { path: "/edit", component: EditPage },
  callback: { path: "/callback", component: CallbackPage },
}

export { routes }
