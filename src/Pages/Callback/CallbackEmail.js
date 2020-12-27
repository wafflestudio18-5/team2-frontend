import CallbackEmail from "../../Components/CallbackEmail"
import { useLocation } from "react-router-dom"
import queryString from "query-string"

const CallbackEmailPage = () => {
  const queryStrings = queryString.parse(useLocation().search)
  console.log(queryStrings)
  return <CallbackEmail {...queryStrings} />
}

export default CallbackEmailPage
