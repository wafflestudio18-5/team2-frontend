import MeStoriesPage from "./MeStoriesPage"
import MeSettingsPage from "./MeSettingsPage"

const routes = {
  settings: { path: "/me/settings", component: MeSettingsPage },
  drafts: { path: "/me/stories/drafts", component: MeStoriesPage },
  public: { path: "/me/stories/public", component: MeStoriesPage },
}

export { routes }
