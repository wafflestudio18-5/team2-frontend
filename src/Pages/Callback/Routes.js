import CallbackEmailPage from "./CallbackEmail"
import CallbackGooglePage from "./CallbackGoogle"

const routes = {
  email: { path: "/callback/email", component: CallbackEmailPage },
  google: { path: "/callback/google", component: CallbackGooglePage },
}

export { routes }
