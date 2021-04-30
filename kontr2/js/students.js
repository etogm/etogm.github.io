var data = [
  {
    lastname: "Моисеев",
    firstname: "Севастьян",
    secondname: "Всеволодович",
    group: "212",
    subjects: [
      {
        subject: "ПИС",
        evaluation: 4
      },
      {
        subject: "ВП",
        evaluation: 5
      }
    ]
  },
  {
    lastname: "Громов",
    firstname: "Платон",
    secondname: "Иосифович",
    group: "221",
    subjects: [
      {
        subject: "АВС",
        evaluation: 4
      },
      {
        subject: "ПИС",
        evaluation: 5
      }
    ]
  },
  {
    lastname: "Щукин",
    firstname: "Панкрат",
    secondname: "Борисович",
    group: "212",
    subjects: [
      {
        subject: "СА",
        evaluation: 4
      },
      {
        subject: "ВП",
        evaluation: 5
      }
    ]
  },
  {
    lastname: "Кулаков",
    firstname: "Юлий",
    secondname: "Лаврентьевич",
    group: "212",
    subjects: [
      {
        subject: "ЧМ",
        evaluation: 4
      },
      {
        subject: "МО",
        evaluation: 5
      }
    ]
  },
  {
    lastname: "Тестов",
    firstname: "Тест",
    secondname: "Тестович",
    group: "211",
    subjects: [
      {
        subject: "ВП",
        evaluation: 4
      },
      {
        subject: "МО",
        evaluation: 5
      }
    ]
  }
];

const getSubjectsInfo = subjects => {
  let result = '';
  subjects.forEach(subject => result += `${subject.subject}:  ${subject.evaluation}<br>`);

  return result; 
};

const getStudentTd = student =>   `<tr>
                                    <th scope="row">${students.indexOf(student)}</th>
                                    <td>${student.lastname}</td>
                                    <td>${student.firstname}</td>
                                    <td>${student.secondname}</td>
                                    <td>${student.group}</td>
                                    <td>${getSubjectsInfo(student.subjects)}</td>
                                  </tr>`;
