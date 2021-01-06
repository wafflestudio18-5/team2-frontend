import { Route } from "react-router-dom"
import { routes } from "./Routes"

const CallbackPage = () => {
  return (
    <>
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
    </>
  )
}

export default CallbackPage
