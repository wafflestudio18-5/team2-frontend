import CallbackEmail from "../../Components/CallbackEmail"
import { postUser } from "../../api"
import { useLocation } from "react-router-dom"
import queryString from "query-string"
import { useState } from "react"

const CallbackEmailPage = () => {
  const [email, setEmail] = useState("")
  const queryStrings = queryString.parse(useLocation().search)
  switch (queryStrings.operation) {
    case "register":
      postUser({
        auth_type: "EMAIL",
        req_type: "CHECK",
        access_token: queryStrings.token,
      }).then((response) => {
        setEmail(response.data.email)
      })
  }
  return <CallbackEmail email={email} />
}

export default CallbackEmailPage
