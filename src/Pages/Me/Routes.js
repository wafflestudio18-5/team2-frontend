import MeStoriesDraft from "./MeStoriesDraft"

const routes = {
  drafts: { path: "/me/stories/drafts", component: MeStoriesDraft },
  public: { path: "/me/stories/public", component: MeStoriesDraft },
}

export { routes }
