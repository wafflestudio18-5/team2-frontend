const getDate = (created_at) => {
  let [year, month] = created_at.split("-")
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
  month = months[month - 1]
  return "Wadium member since " + month + " " + year
}

export default getDate
