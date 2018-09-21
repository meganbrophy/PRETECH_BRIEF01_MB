var canvas = document.getElementById("sales-by-day");


var ctx = canvas.getContext('2d');

var config = {
    type: 'bar',
    data: {
        labels: ["mon","tues"],
        datasets: [{
            label: 'Daily Orders',
            data: [6,67,20,90,8,40,17,17,4,14],
            backgroundColor: 'rgba(0, 773, 836, 0.3)'
        }]
    }
};

var chart = new Chart(ctx, config);
