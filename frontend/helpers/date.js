export function formatRelativeDate(date) {
  const now = new Date();
  
  // Calculate the difference in milliseconds and then convert it to days
  const differenceInMilliseconds = now - date;
  const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));

  if (differenceInDays === 0) {
    return "today";
  } else if (differenceInDays === 1) {
    return "yesterday";
  } else {
    return `${differenceInDays} days ago`;
  }
}