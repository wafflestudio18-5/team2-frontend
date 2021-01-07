import { routes } from "./Routes"
import { Switch, Route } from "react-router-dom"

const MePage = () => {
  return (
    <Switch>
      <Route
        exact
        path={routes.stories.path}
        component={routes.stories.component}
      />
    </Switch>
  )
}

export default MePage
