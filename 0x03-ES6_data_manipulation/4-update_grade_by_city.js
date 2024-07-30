export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  if (!Array.isArray(listStudents) || !Array.isArray(newGrades)) {
    return [];
  }
  // Filter listStudents by location
  // Change/add grade for listStudents in newGrades
  // If a filtered student is not in new Grades => grade = N/A

  const cityStudents = listStudents.filter((student) => student.location === city).map((student) => {
    const item2 = newGrades.find((student2) => student.id === student2.studentId);
    return { ...student, grade: item2 ? item2.grade : 'N/A' };
  });
  return cityStudents;
}
