let url = 'https://etogm.github.io/finance/aapl.json';

async function getData(url) {
  return await fetch(url).then(response => response.json());
}

getData(url).then(data => {
  let prices = data.spark.result[0].response[0].indicators.quote[0].close;
  let timestamp = data.spark.result[0].response[0].timestamp;

  drawChart(prices, timestamp);
});

