const search = (event, inputValue, history, user = false) => {
  if (event.key === "Enter") {
    if (user) {
      history.push("/search/users/?q=" + inputValue)
    } else {
      history.push("/search/?q=" + inputValue)
    }
  }
}

export default search
