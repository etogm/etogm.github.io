const getCountText = (count) =>
  count > 0 ? 'В наличии: ' + count : 'Нет в наличии';

function getElement(element, className, text) {
  let el = document.createElement(element);

  if (className != undefined) el.className = className;
  if (text != undefined) el.textContent = text;

  return el;
}

function getImage(src, className) {
  let img = new Image();
  img.className = className;
  img.src = src;

  return img;
}

function createProductCol(row, product) {
  let productDiv = getElement('div', 'col-3 m-1');
  let cardDiv = getElement('div', 'card');

  let img = getImage(product.imagePath, 'card-img mask');
  
  let cardText = getElement(
                      'div',
                      'card-img-overlay d-flex flex-column justify-content-lg-end'
                    );

  let productName = getElement('h4', 'text-light', product.name);
  let productCount = getElement(
                      'span',
                      'w-50 text-white text-center ' + (product.count > 0 ? 'bg-success' : 'bg-danger'),
                      getCountText(product.count)
                    );

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
