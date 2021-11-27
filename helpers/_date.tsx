function getMonthStringFromInt(int) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  return months[int]
}

export function addLeadingZero(num) {
  num = num.toString()
  while (num.length < 2) num = '0' + num
  return num
}

export function formatDateForDateTime(dateString) {
  const timestamp = Date.parse(dateString)
  const date = new Date(timestamp)
  return `${date.getFullYear()}-${addLeadingZero(date.getMonth() + 1)}-${date.getDate()}`
}

export function formatDateForDisplay(dateString) {
  const timestamp = Date.parse(dateString)
  const date = new Date(timestamp)
  return `${date.getDate()} ${getMonthStringFromInt(date.getMonth())} ${date.getFullYear()}`
}
