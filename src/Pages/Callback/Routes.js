import CallbackEmailPage from "./CallbackEmail"
import CallbackGooglePage from "./CallbackGoogle"
import CallbackFacebookPage from "./CallbackFacebook"

const routes = {
  email: { path: "/callback/email", component: CallbackEmailPage },
  google: { path: "/callback/google", component: CallbackGooglePage },
  facebook: { path: "/callback/facebook", component: CallbackFacebookPage },
}

export { routes }
