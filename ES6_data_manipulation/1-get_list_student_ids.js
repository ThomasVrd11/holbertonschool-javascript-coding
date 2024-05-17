export default function getListStudentIds(objArrayStudents) {
  if (Array.isArray(objArrayStudents)) {
    const nabi = objArrayStudents.map((value) => value.id);
    return nabi;
  }
  return [];
}
