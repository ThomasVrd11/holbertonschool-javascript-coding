export default function getStudentsByLocation(studentsArray, city) {
  const selected = studentsArray.filter((student) => student.location === city);
  return selected;
}
