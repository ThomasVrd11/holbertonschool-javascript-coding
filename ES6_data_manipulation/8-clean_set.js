export default function cleanSet(set, startString) {
  if (!set || !startString || typeof (startString) !== 'string') {
    return '';
  }
  const setArray = Array.from(set);
  const filteredItems = setArray.filter((item) => item.includes(startString));
  const trimmedItems = filteredItems.map((item) => item.slice(startString.length));
  return String(trimmedItems).replace(/,/g, '-');
}
