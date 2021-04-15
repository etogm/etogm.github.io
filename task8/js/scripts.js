const RUB = String.fromCharCode(0x20BD);

function createElementWithText(elementName, elementText) {
  let element = document.createElement(elementName);
  element.textContent = elementText;

  return element;
}

function createImg(src) {
  let img = new Image();
  img.src = src;

  return img;
}

const getCountText = (count) =>
  count > 0 ? 'В наличии: ' + count : 'Нет в наличии';

function createProductCol(row, product) {
  let productDiv = document.createElement('div');
  productDiv.className = 'col-3 m-1';

  let cardDiv = document.createElement('div');
  cardDiv.className = 'card';

  let img = new Image();
  img.src = product.imagePath;
  img.className = 'card-img mask';

  let cardText = document.createElement('div');
  cardText.className = 'card-img-overlay d-flex flex-column justify-content-lg-end';

  let productName = document.createElement('h4');
  productName.className = 'text-light';
  productName.textContent = product.name;

  let productCount = document.createElement('span');
  productCount.className = 'w-50 text-white text-center ' + (product.count > 0 ? 'bg-success' : 'bg-danger');
  productCount.textContent = getCountText(product.count);

  cardText.appendChild(productName);
  cardText.appendChild(productCount);

  cardDiv.appendChild(img);
  cardDiv.appendChild(cardText);

  productDiv.appendChild(cardDiv);

  row.appendChild(productDiv);
}

function getData(button) {
  let products = data.products;
  let row = document.querySelector('.row');

  products.forEach((product) => {
    createProductCol(row, product);
  });

  button.innerHTML = 'Данные загружены';
  button.disabled = true;
}
