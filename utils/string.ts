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
