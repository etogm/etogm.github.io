let images = [
  "https://picsum.photos/600?random=1",
  "https://picsum.photos/600?random=2",
  "https://picsum.photos/600?random=3",
  "https://picsum.photos/600?random=4",
  /*"https://picsum.photos/600?random=5",
  "https://picsum.photos/600?random=6",
  "https://picsum.photos/600?random=7",
  "https://picsum.photos/600?random=8"*/
];

let el = document.querySelector('#img-collection');

images.forEach(imgPath => {
  img = new Image();
  img.src = imgPath;
  img.className = 'img-small';

  el.appendChild(img);
})

let imgSmall = document.querySelectorAll('.img-small');
let imgMain = document.querySelector('#img-main');

imgSmall.forEach(img => {
  img.addEventListener('click', _ => {
    imgMain.src = img.src;
  })
});
