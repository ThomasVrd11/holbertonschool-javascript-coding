export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  const studentsInCity = listStudents.filter((student) => student.location === city);
  return studentsInCity.map((student) => {
    const studentCopy = { ...student };
    const studentGrade = newGrades.filter((grade) => grade.studentId === studentCopy.id);
    if (studentGrade.length !== 0) studentCopy.grade = studentGrade[0].grade;
    else studentCopy.grade = 'N/A';
    return studentCopy;
  });
}
