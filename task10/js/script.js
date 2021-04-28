let url = 'https://etogm.github.io/finance/aapl.json';

let lineChart = document.querySelector('#line-chart');
let barChart = document.querySelector('#bar-chart');
let info = document.querySelector('#info');
let chart;

const getData = url => fetch(url).then(response => response.json());
const getTime = date => new Date(date * 1000).toLocaleTimeString();

function outputInfo(stock) {
  let minIndex = stock.prices.indexOf(Math.min.apply(null, stock.prices));
  let maxIndex = stock.prices.indexOf(Math.max.apply(null, stock.prices));
  let profit = (stock.prices[maxIndex] - stock.prices[minIndex]).toFixed(2);

  info.innerHTML = `Максимальная прибыль <b>($${profit})</b> была бы\
                    при покупке в <b>${stock.timestamp[minIndex]}</b>\
                    и при продаже в <b>${stock.timestamp[maxIndex]}</b>`;
}

getData(url).then(data => {
  let stock = {
    name: data.spark.result[0].symbol,
    prices: data.spark.result[0].response[0].indicators.quote[0].close,
    timestamp: data.spark.result[0].response[0].timestamp.map(getTime)
  };

  outputInfo(stock);

  chart = drawStockChart(lineChart, 'line', stock);
  stock.prices = stock.prices.map(price => (price / stock.prices[0] - 1) * 100);
  chart = drawStockChart(barChart, 'bar', stock);
});
