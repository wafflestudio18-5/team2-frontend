const runOnEndOfScroll = async (f, fetching, setFetching) => {
  const scrollHeight = Math.max(
    document.documentElement.scrollHeight,
    document.body.scrollHeight
  )
  const scrollTop = Math.max(
    document.documentElement.scrollTop,
    document.body.scrollTop
  )
  const clientHeight = document.documentElement.clientHeight
  if (scrollTop + clientHeight >= scrollHeight - 1 && !fetching) {
    setFetching(true)
    await f()
    setFetching(false)
  }
}

export default runOnEndOfScroll
