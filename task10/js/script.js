let url = 'https://etogm.github.io/finance/gme.json';

let lineChart = document.querySelector('#line-chart');
let barChart = document.querySelector('#bar-chart');
let info = document.querySelector('#info');

const getData = url => fetch(url).then(response => response.json());

const getShortDate = date => new Date(date * 1000).toJSON().slice(0, 10);

function outputInfo(stock) {
  let minIndex = stock.prices.indexOf(Math.min.apply(null, stock.prices));
  let maxIndex = stock.prices.indexOf(Math.max.apply(null, stock.prices));
  let profit = (stock.prices[maxIndex] - stock.prices[minIndex]).toFixed(2);

  info.innerHTML = `Покупаем <b>${stock.timestamp[minIndex]}</b><br>\
                    Продаем <b>${stock.timestamp[maxIndex]}</b><br>\
                    Фиксируем прибыль <b>($${profit})</b><br>\
                    `;
}

getData(url).then(data => {

  console.log(data);
  let stock = {
    name: data.chart.result[0].meta.symbol,
    prices: data.chart.result[0].indicators.quote[0].close,
    timestamp: data.chart.result[0].timestamp.map(getShortDate)
  };
  
  outputInfo(stock);

  drawStockChart(lineChart, 'line', stock);
  stock.prices = stock.prices;
  drawStockChart(barChart, 'bar', stock);
});
