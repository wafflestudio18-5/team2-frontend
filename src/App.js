import { routes } from "./Routes"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import { CookiesProvider } from "react-cookie"
import Fonts from "./Fonts"

function App() {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <Fonts />
        <Switch>
          <Route exact path="/">
            <Redirect to={routes.main.path} />
          </Route>
          <Route path={routes.story.path} component={routes.story.component} />
          <Route path={routes.main.path} component={routes.main.component} />
          <Route path={routes.edit.path} component={routes.edit.component} />
          <Route
            path={routes.search.path}
            component={routes.search.component}
          />
          <Route
            path={routes.callback.path}
            component={routes.callback.component}
          />
          <Route path={routes.me.path} component={routes.me.component} />
          <Route path={routes.user.path} component={routes.user.component} />
          <Route path={routes.error.path} component={routes.error.component} />
          <Redirect to={routes.error.path} />
        </Switch>
      </BrowserRouter>
    </CookiesProvider>
  )
}

export default App
