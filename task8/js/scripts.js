let products = data.products;

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

const getCountText = (count) => count > 0 ? 'В наличии: ' + count : 'Нет в наличии';

function createProductCol(row, product) {
  let productDiv = document.createElement('div');
  productDiv.className = 'col';

  productDiv.appendChild(createImg(product.imagePath));
  productDiv.appendChild(createElementWithText('h3', product.name));
  productDiv.appendChild(createElementWithText('h4', getCountText(product.count)));
  productDiv.appendChild(createElementWithText('p', product.description));

  row.insertBefore(productDiv, row.firstChild.nextSibling);
}

let row = document.querySelector('.row');

products.forEach(product => {
  createProductCol(row, product);
});
