import MeStoriesPage from "./MeStoriesPage"

const routes = {
  drafts: { path: "/me/stories/drafts", component: MeStoriesPage },
  public: { path: "/me/stories/public", component: MeStoriesPage },
}

export { routes }
