let addBackground = document.querySelector('#addBackground');
let removeBackground = document.querySelector('#removeBackground');

let addBorder = document.querySelector('#addBorder');
let removeBorder = document.querySelector('#removeBorder');

let normalFont = document.querySelector('#normalFont');
let largeFont = document.querySelector('#largeFont');

let paragraph = document.querySelector('p');

addBackground.addEventListener('click', _ => paragraph.classList.add('bg-blue'));
removeBackground.addEventListener('click', _ => paragraph.classList.remove('bg-blue'));

addBorder.addEventListener('click', _ => paragraph.classList.add('br-red'));
removeBorder.addEventListener('click', _ => paragraph.classList.remove('br-red'));

normalFont.addEventListener('click', _ => paragraph.classList.add('font-large'));
largeFont.addEventListener('click', _ => paragraph.classList.remove('font-large'));
