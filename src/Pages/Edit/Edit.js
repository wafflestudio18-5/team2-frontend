import Edit from "../../Components/Edit"
import { useState } from "react"
import StoryExample from "../../Constants/StoryExample"

const EditPage = () => {
  const user = {
    userName: "user Name",
    profileUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo4BQSpilYy5KuAptMxbOAxm4uKjFYDG6_wg&usqp=CAU",
  }

  const [story, setStory] = useState(StoryExample)

  const onInput = (event) => {
    const sectionIndex = parseInt(
      event.target.getAttribute("data-sectionIndex")
    )
    const contentIndex = parseInt(
      event.target.getAttribute("data-contentIndex")
    )
    const value = event.target.innerHTML

    const newStory = story

    newStory[sectionIndex][contentIndex] = {
      ...story[sectionIndex][contentIndex],
      detail: {
        ...story[sectionIndex][contentIndex].detail,
        content: value,
      },
    }

    setStory(newStory)
  }

  return <Edit user={user} status="Saved" story={story} change={onInput} />
}

export default EditPage
