function drawChart(name, prices, timestamp) {
  const myData = {
    labels: timestamp,
    datasets: [
      {
        label: name,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: prices,
      },
    ],
  };

  const config = {
    type: 'line',
    data: myData,
    options: {},
  };

  var myChart = new Chart(document.getElementById('myChart'), config);
}
