export default function getStudentIdsSum(studentsArray) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue.id;
  const all = studentsArray.reduce(reducer, 0);
  return all;
}
