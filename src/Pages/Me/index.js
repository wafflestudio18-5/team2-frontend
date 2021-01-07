import { routes } from "./Routes"
import { Switch, Route, Redirect } from "react-router-dom"

const MePage = () => {
  return (
    <Switch>
      <Route
        exact
        path={routes.stories.path}
        component={routes.stories.component}
      />
      <Redirect to={routes.stories.path} />
    </Switch>
  )
}

export default MePage
