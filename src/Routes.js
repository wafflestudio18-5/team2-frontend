import MainPage from "./Pages/Main/Main"
import EditPage from "./Pages/Edit/Edit"
import StoryPage from './Pages/Story/Story';


const routes = {
  main: { path: "/main", component: MainPage },
  edit: { path: "/edit", component: EditPage },
  story: { path: '/main/:title', component: StoryPage },
}
export { routes };
