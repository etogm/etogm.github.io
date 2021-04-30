let table = document.querySelector('#student-list');

let students = data;

students.forEach(student => {
  table.innerHTML +=  getStudentTd(student);
});
