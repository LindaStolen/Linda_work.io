// google.charts.load('current', {packages: ['corechart', 'bar']});
// google.charts.setOnLoadCallback(drawBarColors);

// function drawBarColors() {
//     var data = google.visualization.arrayToDataTable([
//         ['City', '2010 Population', '2000 Population'],
//         ['New York City, NY', 8175000, 8008000],
//         ['Los Angeles, CA', 3792000, 3694000],
//         ['Chicago, IL', 2695000, 2896000],
//         ['Houston, TX', 2099000, 1953000],
//         ['Philadelphia, PA', 1526000, 1517000]
//         ]);

//     var options = {
//         title: '預約實到統計',
//         chartArea: {width: '150px'},
//         colors: ['#b0120a', '#ffab91'],
//         hAxis: {
//         title: 'Total Population',
//         minValue: 0
//         },
//         vAxis: {
//         title: 'City'
//         }
//     };
//     var chart = new google.visualization.BarChart(document.getElementById('chart_'));
//     chart.draw(data, options);
// }

// chartJS

let ctx = $('#chart');
let chart = new Chart(ctx,{
  type: 'bar',
  data: {
    labels: ['12/17','12/18','12/19','12/20','12/21','12/22','12/23'],
    datasets: [{
      lable: '目前一周預約實到(人數)',
    }]
  }

})