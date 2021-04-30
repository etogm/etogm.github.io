let searchFullName = document.querySelector('#fullname');
let searchSubject = document.querySelector('#subject');
let findresult = document.querySelector('#student-list');

let students = data;

const searchByFullName = key => {
  let result = new Array();

  students.forEach(s => {
    let fullname = `${s.lastname} ${s.firstname} ${s.secondname} ${s.group}`;

    if (fullname.includes(key)) result.push(s);
  });

  return result;
};

const searchBySubjects = key => {
  let result = new Array();

  students.forEach(s => {
    if (s.subjects.find(sub => sub.subject === key) != undefined) result.push(s);
  });

  return result;
};

searchFullName.addEventListener('input', e => {
  findresult.innerHTML = '';

  let find = searchByFullName(searchFullName.value);
  
  if (find != undefined) find.forEach(f => findresult.innerHTML +=  getStudentTd(f));
});


searchSubject.addEventListener('input', e => {
  findresult.innerHTML = '';

  let find = searchBySubjects(searchSubject.value);
  
  if (find != undefined) find.forEach(f => findresult.innerHTML +=  getStudentTd(f));
});
