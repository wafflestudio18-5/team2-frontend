const changeDate = (date) => {
  // 2021-01-04T08:35:52.929646Z
  // 2021-01-06T14:15:15.644769Z
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
