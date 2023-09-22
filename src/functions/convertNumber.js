export const convertNumber = (number) => {
  const numberWithComma = number.toLocaleString();
  var arr = numberWithComma.split(",");
  if (arr.length === 5) {
    // Trillion
    return arr[0] + "." + arr[1].slice(0, 2) + " T";
  } else if (arr.length === 4) {
    // billion
    return arr[0] + "." + arr[1].slice(0, 2) + " B";
  } else if (arr.length === 5) {
    // million
    return arr[0] + "." + arr[1].slice(0, 2) + " M";
  } else if (arr.length === 5) {
    // thousand
    return arr[0] + "." + arr[1].slice(0, 2) + " K";
  } else {
    // hundres
    return number.toLocaleString();
  }
};
