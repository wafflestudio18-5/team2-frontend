import MainPage from "./Pages/Main/Main"
import EditPage from "./Pages/Edit/Edit"
import CallbackPage from "./Pages/Callback/Callback"

const routes = {
  main: { path: "/main", component: MainPage },
  edit: { path: "/edit", component: EditPage },
  callback: { path: "/callback", component: CallbackPage },
}

export { routes }
