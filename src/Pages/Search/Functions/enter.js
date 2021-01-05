const enter = (event, inputValue, history) => {
  if (event.key === "Enter") {
    history.push("/search?q=" + inputValue)
  }
}

export default enter
