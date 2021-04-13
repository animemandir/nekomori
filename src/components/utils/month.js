export function monthText(year, month, day) {
  let dateLast;
  let format;
  if (year && month && day) {
    dateLast = `${year}-${month}-${day}`;
    format = { year: "numeric", month: "long", day: "numeric" };
  } else if (year && month) {
    dateLast = `${year}-${month}`;
    format = { year: "numeric", month: "long" };
  } else if (year) {
    dateLast = `${year}`;
    format = { year: "numeric" };
  } else {
    return "TBA";
  }

  var dateConvert = new Date(dateLast).toLocaleDateString("en-US", format);
  return dateConvert;
}
