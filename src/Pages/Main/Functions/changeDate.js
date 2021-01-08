const changeDate = (date) => {
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
  return day + " " + month + ", " + year
}

export default changeDate
