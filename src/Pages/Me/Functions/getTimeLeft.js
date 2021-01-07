const getTimeLeft = (editTime, type) => {
  //2021-01-06T08:58:13.908146Z
  var m = "Last edited about "
  if (type === "public") {
    m = "Published about "
  }
  const currentDate = new Date()
  const [date, time] = editTime.split("T")
  const [year, month, day] = date.split("-").map((element) => parseInt(element))
  const [hour, minute] = time
    .slice(0, 8)
    .split(":")
    .map((element) => parseInt(element))

  const yearDiff = currentDate.getUTCFullYear() - year
  if (yearDiff > 0) {
    if (yearDiff === 1) {
      return m + yearDiff + " year ago"
    }
    return m + yearDiff + " years ago"
  }

  const monthDiff = currentDate.getUTCMonth() - month
  if (monthDiff > 0) {
    if (monthDiff === 1) {
      return m + monthDiff + " month ago"
    }
    return m + monthDiff + " months ago"
  }

  const dayDiff = currentDate.getUTCDay() - day
  if (dayDiff > 0) {
    if (dayDiff === 1) {
      return m + dayDiff + " day ago"
    }
    return m + dayDiff + " days ago"
  }

  const hourDiff = currentDate.getUTCHours() - hour
  if (hourDiff > 0) {
    if (hourDiff === 1) {
      return m + hourDiff + " hour ago"
    }
    return m + hourDiff + " hours ago"
  }

  const minDiff = currentDate.getUTCMinutes() - minute
  if (minDiff > 0) {
    if (minDiff === 1) {
      return m + minDiff + " minute ago"
    }
    return m + minDiff + " minutes ago"
  }

  return "Edited less than a minute ago"
}

export default getTimeLeft
