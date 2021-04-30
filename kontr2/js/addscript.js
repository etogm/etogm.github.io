let savebtn = document.querySelector('#save');

let lastname = document.querySelector('#lastname');
let firstname = document.querySelector('#firstname');
let secondname = document.querySelector('#secondname');
let group = document.querySelector('#group');

let error = document.querySelector('#error');

savebtn.addEventListener('click', e => {
  let regex = /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/;

  error.innerHTML = '';

  if (!regex.test(lastname.value)) {
    e.preventDefault();
    error.innerHTML += 'Неверные данные Фамилия<br>';
  }

  if (!regex.test(firstname.value)) {
    e.preventDefault();
    error.innerHTML += 'Неверные данные Имя<br>';
  }

  
  if (!regex.test(secondname.value)) {
    e.preventDefault();
    error.innerHTML += 'Неверные данные Отчество<br>';
  }
});
