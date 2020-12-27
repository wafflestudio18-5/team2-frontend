import { Route } from "react-router-dom"
import { routes } from "../../Routes"

const EditPage = () => {
  return (
    <>
      <Route
        exact
        path={routes.callback}
        component={routes.callback.component}
      />
    </>
  )
}

export default EditPage
