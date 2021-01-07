import { getStoryById, postStory } from "../../../api"

const startEdit = async (token, type, id, history) => {
  try {
    let newId = id
    if (type === "public") {
      let response = await getStoryById(id)
      const { title, subtitle, body, featured_image } = response.data
      response = await postStory(token, {
        title,
        subtitle,
        body,
        featured_image,
      })
      newId = response.data.id
    }
    history.push("/edit/" + newId)
  } catch (error) {
    console.log(error)
  }
}

export default startEdit
