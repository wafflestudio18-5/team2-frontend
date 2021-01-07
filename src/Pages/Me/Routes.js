import MeStoriesDraft from "./MeStoriesDraft"
import MeStoriesPublish from "./MeStoriesPublish"

const routes = {
  draft: { path: "/me/stories/drafts", component: MeStoriesDraft },
  publish: { path: "/me/stories/public", component: MeStoriesPublish },
}

export { routes }
