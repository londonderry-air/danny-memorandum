// string
export const zeroPadding = (numbering: number | string, count = 3) => {
  if (typeof numbering === "string") {
    return numbering.padStart(count, "0");
  } else if (typeof numbering === "number") {
    return numbering.toString().padStart(count, "0");
  } else {
    return "000";
  }
};

export const getTimeText = (date: Date) => {
  return `${date.getFullYear()}-${zeroPadding(
    date.getMonth() + 1,
    2
  )}-${zeroPadding(date.getDate(), 2)} ${zeroPadding(
    date.getHours(),
    2
  )}:${zeroPadding(date.getMinutes(), 2)}`;
};

export const getMonthText = (date: Date) => {
  return `${getEnglishMonth(date)} ${date.getDate()}, ${date.getFullYear()}`
}

export const getEnglishMonth = (date: Date) => {
  const month = date.getMonth()

  switch (month) {
    case 0:
      return 'Jan'
    case 1:
      return 'Feb'
    case 2:
      return 'Mar'
    case 3:
      return 'Apr'
    case 4:
      return 'May'
    case 5:
      return 'Jun'
    case 6:
      return 'Jul'
    case 7:
      return 'Aug'
    case 8:
      return 'Sep'
    case 9:
      return 'Oct'
    case 10:
      return 'Nov'
    case 11:
      return 'Dec'
    default:
      return ''
  }
}