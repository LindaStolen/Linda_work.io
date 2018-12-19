// 預約
let ctx1 = $('#chart_r1');
let chartW1 = new Chart(ctx1,{
  type: 'bar',
  data: {
    labels: ['12/2','12/3','12/4','12/5','12/6','12/7','12/8'],
    datasets: [{
      label: '人數',
      data: [30,35,50,45,42,40,37],
      backgroundColor: [
        '#009FCC',
        '#003C9D',
        '#009FCC',
        '#003C9D',
        '#009FCC',
        '#003C9D',
        '#009FCC'
      ],
      borderColor: '#aaa',
      borderWidth: '1',
    }]
  },
  options: {
    legend: {
      labels: {
        fontSize: 13, fontFamily: 'serif',
      },
    },
    title: {display: true, text: '12/2-12/8 預約人數', fontSize: 20, fontFamily: 'serif',},
    scales: {
        yAxes: [{
            ticks: {
                min: 0,
                stepSize: 12
            }
        }]
    },
  }

})
let ctx2 = $('#chart_r2');
let chartW2 = new Chart(ctx2,{
  type: 'bar',
  data: {
    labels: ['12/9','12/10','12/11','12/12','12/13','12/14','12/15'],
    datasets: [{
      label: '人數',
      data: [30,35,50,45,42,40,37],
      backgroundColor: [
        '#009FCC',
        '#003C9D',
        '#009FCC',
        '#003C9D',
        '#009FCC',
        '#003C9D',
        '#009FCC'
      ],
      borderColor: '#aaa',
      borderWidth: '1',
    }]
  },
  options: {
    legend: {
      labels: {
        fontSize: 13, fontFamily: 'serif',
      },
    },
    title: {display: true, text: '12/9-12/15 預約人數', fontSize: 20, fontFamily: 'serif',},
    scales: {
        yAxes: [{
            ticks: {
                min: 0,
                stepSize: 12
            }
        }]
    },
  }

})
// 實到
let check1 = $('#chart_c1');
let chartC1 = new Chart(check1,{
  type: 'bar',
  data: {
    labels: ['12/2','12/3','12/4','12/5','12/6','12/7','12/8'],
    datasets: [{
      label: '人數',
      data: [30,35,50,45,42,40,37],
      backgroundColor: [
        '#DDDDDD',
        '#003C9D',
        '#DDDDDD',
        '#003C9D',
        '#DDDDDD',
        '#003C9D',
        '#DDDDDD'
      ],
      borderColor: '#aaa',
      borderWidth: '1',
    }]
  },
  options: {
    // legend: {
    //   labels: {
    //     fontSize: 13, fontFamily: 'serif',
    //   },
    // },
    title: {display: true, text: '12/2-12/8 實到人數', fontSize: 20, fontFamily: 'serif',},
    scales: {
        yAxes: [{
            ticks: {
                min: 0,
                stepSize: 12
            }
        }]
    },
  }

})
// 圖表1
let ctx = $('#chart');
let chart = new Chart(ctx,{
  type: 'line',
  data: {
    labels: ['12/17','12/18','12/19','12/20','12/21','12/22','12/23'],
    datasets: [{
      label: '第一場預約人數',
      data: [120,164,137,98,166,123,100],
      backgroundColor: '#FFba33',
      borderColor: '#FFAA44',
      fill: false,
    },
     {
      label: '第二場預約人數',
      data: [100,153,164,133,185,112,175],
      backgroundColor: '#227700',
      borderColor: '#227700',
      fill: false,
     },
    {
      label: '第三場預約人數',
      data: [140,125,138,176,144,152,139],
      backgroundColor: '#660077',
      borderColor: '#660077',
      fill: false,
    },
    {
      label: '第四場預約人數',
      data: [97,161,132,178,198,165,155],
      backgroundColor: '#000088',
      borderColor: '#000088',
      fill: false,
    }],
  },
  options: {
    responsive: true,
    legend: {
      position: 'top',
      labels: {
        fontSize: 13, fontFamily: 'serif',
      }
    },
    title: {display: true, text: '未來一周預約人數統計圖', fontSize: 20, fontFamily: 'serif',},
    scales: {
        yAxes: [{
            ticks: {
                min: 50,
                stepSize: 40
            }
        }],
    },
      
  }

})