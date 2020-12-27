import Callback from "../../Components/Callback"
import { useLocation } from "react-router-dom"
import queryString from "query-string"

const CallbackPage = () => {
  const queryStrings = queryString.parse(useLocation().search)
  console.log(queryStrings)
  return <Callback {...queryStrings} />
}

export default CallbackPage
