var ctx = document.getElementById('myChart').getContext('2d');
//ctx.canvas.width =5;
//  ctx.canvas.height = 6;
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset

    data: {
        labels: [],
        datasets: [{

            label: " ",
            backgroundColor: 'rgba(0,0,255)',
            borderColor: 'rgb(255,0,0)',
            data: [],

        }]
    },
    // Configuration options go here
    options: {
        responsiveAnimationDuration: 5,
    }

});

var items = document.getElementsByClassName('button');

for (var i = 0; i < items.length; i++) {
    items[i].onclick = function() {
        var gunoi = this.innerText;
        statisticaGunoaie(gunoi, chart);
    }
}
var items2 = document.getElementsByName('cartier')
for (var i = 0; i < items2.length; i++) {
    items2[i].onclick = function() {

        var cartier = this.innerText;
        cartierStat(cartier, chart);

    }
}
var items3 = document.getElementsByName('luna');
for (var i = 0; i < items3.length; i++) {
    items3[i].onclick = function() {
        var luna = this.innerText;

        lunaStat(luna, chart);

    }
}