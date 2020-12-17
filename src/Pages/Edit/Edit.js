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

  const findTitle = (story) => {
    let checker = true
    let result = story
    const firstSection = story[0]

    mainLoop: for (let i = 0; i < firstSection.length; i++) {
      if (!checker) {
        break
      }
      if (firstSection[i].type === "paragraph") {
        checker = false

        switch (firstSection[i].detail.emphasizing) {
          case "largest":
            result[0][i].detail.emphasizing = "title"
            if (firstSection[i + 1].detail.emphasizing === "large") {
              result[0][i + 1].detail.emphasizing = "subtitle"
            }
            break mainLoop

          case "large":
            if (firstSection[i + 1].detail.emphasizing === "largest") {
              result[0][i].detail.emphasizing = "kicker"
              result[0][i + 1].detail.emphasizing = "title"
              if (firstSection[i + 2].detail.emphasizing === "large") {
                result[0][i + 2].detail.emphasizing = "subtitle"
              }
            }
            break mainLoop

          default:
            break mainLoop
        }
      }
    }

    return result
  }

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

  const publish = () => {
    console.log(JSON.stringify(story))
  }

  return (
    <Edit
      user={user}
      status="Saved"
      story={findTitle(story)}
      change={onInput}
      publish={publish}
    />
  )
}

export default EditPage
