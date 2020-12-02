import { Route } from "react-router-dom"
import { routes } from "../../Routes"

const WritePage = () => {
  return (
    <>
      <Route exact path={routes.write} component={routes.write.component} />
    </>
  )
}

export default WritePage
