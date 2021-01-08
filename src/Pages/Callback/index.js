import { Route, Switch, Redirect } from "react-router-dom"
import { routes } from "./Routes"

const CallbackPage = () => {
  return (
    <Switch>
      <Route
        exact
        path={routes.email.path}
        component={routes.email.component}
      />
      <Route
        exact
        path={routes.google.path}
        component={routes.google.component}
      />
      <Route
        exact
        path={routes.facebook.path}
        component={routes.facebook.component}
      />
      <Redirect to="/error" />
    </Switch>
  )
}

export default CallbackPage
