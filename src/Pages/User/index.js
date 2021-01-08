import { routes } from "./Routes"
import { Switch, Route, Redirect } from "react-router-dom"

const UserPage = () => {
  return (
    <Switch>
      <Route
        exact
        path={routes.about.path}
        component={routes.about.component}
      />
      <Route exact path={routes.user.path} component={routes.user.component} />
      <Redirect to="/error" />
    </Switch>
  )
}

export default UserPage
