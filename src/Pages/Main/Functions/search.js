const search = (event, searchValue, history) => {
  if (event.key === "Enter") {
    history.push("/search?q=" + searchValue)
  }
}

export default search
