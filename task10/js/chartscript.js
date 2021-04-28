function drawStockChart(element, chartType, stock) {
  const color = 'rgb(71, 177, 44)';
  const myData = {
    labels: stock.timestamp,
    datasets: [
      {
        label: stock.name,
        backgroundColor: color,
        borderColor: color,
        data: stock.prices
      },
    ],
  };

  const config = {
    type: chartType,
    data: myData,
    options: {}
  };

  return new Chart(element, config);
}
