export default function updateUniqueItems(all) {
  if (!(all instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [key, value] of all) {
    if (value === 1) {
      all.set(key, 100);
    }
  }
  return all;
}
