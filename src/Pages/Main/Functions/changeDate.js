const changeDate = (date) => {
  // 2021-01-04T08:35:52.929646Z
  let [year, month, day] = date.slice(0, 10).split("-")
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]
  month = months[parseInt(month) - 1]
  var yearNow = new Date().getFullYear().toString()
  if (yearNow === year) {
    return day + " " + month
  } else {
    return day + " " + month + ", " + year
  }
}

export default changeDate
