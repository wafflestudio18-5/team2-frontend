import routes from "./Routes"
import { Switch, Route } from "react-router-dom"

const SearchPage = () => {
  return (
    <Switch>
      <Route path={routes.user.path} component={routes.user.component} />
      <Route path={routes.story.path} component={routes.story.component} />
    </Switch>
  )
}

export default SearchPage
