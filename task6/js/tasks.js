function geometricProgression() {
  let mult = new Number(document.querySelector('#mult').value);
  let count = new Number(document.querySelector('#count').value);
  let answer = document.querySelector('#answerProgression');
  let result = [1];

  if (mult == 0 || count == 0) {
    answer.innerHTML = '';
  }

  for (let i = 1; i < count; i++) {
    result[i] = result[i - 1] * mult;
  }

  answer.innerHTML = result.join(', ');
  console.log(result.join(', '));
}

function findProductOfEvenNums() {
  let start = new Number(document.querySelector("#start").value);
  let end = new Number(document.querySelector("#end").value);
  let answer = document.querySelector("#answerEvenNums");

  let result = 1;

  if (start === 0 || end === 0) return 0;

  while (start < end) {
    if (start % 2 === 0) result *= start;

    start++;
  }

  answer.innerHTML = result;
}

function isNum(num) {
  let regex = /^\d+$/;

  return regex.test(num);
}

function digitsNums() {
  let num = document.querySelector("#num").value;
  let answer = document.querySelector("#answerDigitsNums");
  let regex = /^\d+$/;

  answer.innerHTML = isNum(num) ? num.length : "Error";
}

function getDateFormat(date) {
  var days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
  var months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", 
              "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

  return  date.getDate() + " " + months[date.getMonth()] + " " + 
          date.getFullYear() + ", " + days[date.getDay()];
}

const convertToDays = (milliseconds) => milliseconds / (60 * 60 * 24 * 1000);
const isWeekend = (day) => day == 0 || day == 6;

function calculateTablets() {
  let firstDate = new Date(document.querySelector('#firstDate').value);
  let lastDate = new Date(document.querySelector('#lastDate').value);
  let weekdayTablets = new Number(document.querySelector('#weekdayTablets').value);
  let weekendTablets = new Number(document.querySelector('#weekendTablets').value);
  let answer = document.querySelector('#answerTablets');
  let table = document.querySelector('tbody');
  let tabletsCount = 0;

  let totalDays = convertToDays(lastDate - firstDate);
  table.innerHTML = '';

  for (let i = 0; i < totalDays; i++) {
    if (i % 3 == 0) {
      tabletsCount += isWeekend(firstDate.getDay()) ? weekendTablets : weekdayTablets;

      table.innerHTML += `\
      <tr>\
        <th scope="row">${i}</th>\
        <td>${getDateFormat(firstDate)}</td>\
        <td>${isWeekend(firstDate.getDay()) ? weekendTablets : weekdayTablets}</td>\
      </tr>`
    }
    firstDate.setHours(24);
  }

  table.innerHTML += `\
  <tr>\
    <th></th>
    <td></td>
    <td>Общее количество таблеток: ${tabletsCount}</td>\
  </tr>`
  answer.innerHTML = tabletsCount;
}

function showTabletsTable() {
  document.querySelector('#tabletsTable').hidden = !document.querySelector('#tabletsTable').hidden;
}

function isPallendrom() {
  let num = document.querySelector('#num').value;
  let answer = true;
  let halfLength = Math.floor(num / 2);

  for (let i = 0; i < halfLength; i++) {
    if (num[i] !== num[num.length - i - 1]) {
      answer = false;
      break;
    }
  }

  document.querySelector('#answerPallendrom').innerHTML = answer;
}
