const RUB = String.fromCharCode(0x20BD);

function createElementWithText(elementName, elementText) {
  let element = document.createElement(elementName);
  element.appendChild(document.createTextNode(elementText));

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
  productDiv.className = 'col';

  productDiv.appendChild(createElementWithText('h3', product.name));
  productDiv.appendChild(createImg(product.imagePath));
  productDiv.appendChild(createElementWithText('h4', getCountText(product.count)));
  productDiv.appendChild(createElementWithText('h5', product.price + RUB));
  productDiv.appendChild(createElementWithText('p', product.description));

  row.insertBefore(productDiv, row.firstChild.nextSibling);
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
