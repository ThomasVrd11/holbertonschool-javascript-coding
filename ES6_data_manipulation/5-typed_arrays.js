export default function createInt8TypedArray(length, position, value) {
  if (position >= length) throw Error('Position outside range');
  const buffer = new ArrayBuffer(length);
  const bytes = new Int8Array(buffer);
  bytes[position] = value;
  return new DataView(buffer);
}
