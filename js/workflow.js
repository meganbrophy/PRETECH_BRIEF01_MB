// CHART DOC

'use strict';

var ctx = document.getElementById("myChart").getContext("2d");

var data = {
    labels: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N","D"],
    datasets: [
      {
        label: 'CT sales Target',
        data: [
            0, 1, 4, 8, 6, 5, 15, 18, 20, 25, 30, 34,
        ],
        backgroundColor: 'rgba(111, 897, 198, 0.8)'
      },
      {
        label: 'JHB sales Target ',
        data: [
            0, 4, 7, 8, 7, 9, 6, 18, 20, 22, 19, 30, 
        ],
        backgroundColor: 'rgba(70, 78, 173, 0.8)'
      }
    ]
}

var myChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                },
              
            }]
        }
    }
});