import { routes } from "./Routes"
import { Switch, Route, Redirect } from "react-router-dom"

const MePage = () => {
  return (
    <Switch>
      <Route
        exact
        path={routes.settings.path}
        component={routes.settings.component}
      />
      <Route
        exact
        path={routes.drafts.path}
        component={routes.drafts.component}
      />
      <Route
        exact
        path={routes.public.path}
        component={routes.public.component}
      />
      <Redirect to={routes.drafts.path} />
    </Switch>
  )
}

export default MePage
