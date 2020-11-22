import React from "react"
import { Route } from "react-router-dom"
import { routes } from "../../Routes"

const MainPage = () => {
  return (
    <>
      <Route exact path={routes.main} component={routes.main.component} />
    </>
  )
}

export default MainPage
