import Edit from "../../Components/Edit"
import { useState } from "react"

const EditPage = () => {
  const user = {
    userName: "user Name",
    profileUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo4BQSpilYy5KuAptMxbOAxm4uKjFYDG6_wg&usqp=CAU",
  }

  const [story, setStory] = useState([
    [
      {
        type: "paragraph",
        detail: {
          content: "",
          emphasizing: "largest",
        },
      },
      {
        type: "paragraph",
        detail: {
          content: "",
          emphasizing: "default",
        },
      },
    ],
  ])

  return <Edit user={user} status="Saved" story={story} />
}

export default EditPage
