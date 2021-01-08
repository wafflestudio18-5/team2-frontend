import User from "./User"
import UserAbout from "./UserAbout"

const routes = {
  user: { path: "/user/:user_id", component: User },
  about: { path: "/user/:user_id/about", component: UserAbout },
}

export { routes }
