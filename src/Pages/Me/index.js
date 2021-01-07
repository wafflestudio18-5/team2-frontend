import { routes } from "./Routes"
import { Switch, Route, Redirect } from "react-router-dom"

const MePage = () => {
  return (
    <Switch>
      <Route
        exact
        path={routes.draft.path}
        component={routes.draft.component}
      />
      <Route
        exact
        path={routes.publish.path}
        component={routes.publish.component}
      />
      <Redirect to={routes.draft.path} />
    </Switch>
  )
}

export default MePage
