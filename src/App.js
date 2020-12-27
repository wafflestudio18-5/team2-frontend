import { routes } from "./Routes"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import Fonts from "./Fonts"

function App() {
  return (
    <BrowserRouter>
      <Fonts />
      <Switch>
        <Route path={routes.main.path} component={routes.main.component} />
        <Route path={routes.edit.path} component={routes.edit.component} />
        <Route
          path={routes.callback.path}
          component={routes.callback.component}
        />
        <Redirect to={routes.main.path} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
