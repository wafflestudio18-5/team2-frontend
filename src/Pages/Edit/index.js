import { Route } from "react-router-dom"
import { routes } from "../../Routes"

const EditPage = () => {
  return (
    <>
      <Route exact path={routes.edit} component={routes.edit.component} />
    </>
  )
}

export default EditPage
