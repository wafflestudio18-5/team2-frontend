import Edit from "../../Components/Edit"

const EditPage = () => {
  const user = {
    userName: "user Name",
    profileUrl:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fc.files.bbci.co.uk%2FAAE7%2Fproduction%2F_111515734_gettyimages-1208779325.jpg&imgrefurl=https%3A%2F%2Fwww.bbc.com%2Fnews%2Fworld-asia-china-52131940%3Focid%3Dwsnews.chat-apps.in-app-msg.whatsapp.trial.link1_.auin&tbnid=z5K2yv-0ek79oM&vet=12ahUKEwixvtWWgK_tAhXLzYsBHVW6BYkQMygBegQIARB_..i&docid=ZhTUTZ-_Ym1OiM&w=1024&h=576&q=cat&ved=2ahUKEwixvtWWgK_tAhXLzYsBHVW6BYkQMygBegQIARB_",
  }
  return <Edit user={user} status="Saved" />
}

export default EditPage
