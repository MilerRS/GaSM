function statisticaGunoaie(gunoi, chart) {




    var xhr = new XMLHttpRequest(),
        method = 'GET',
        overrideMimeType = 'application',
        url = 'https://smart-garbage-monitor.herokuapp.com/rest/rest.php/Date/?statistica=' + gunoi;
    xhr.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {
            var gunoaie = JSON.parse(xhr.responseText);
            var key = gunoi[0].toLowerCase() + gunoi.slice(1);

            var data = [];
            for (var i = 0; i < gunoaie.length; i++) {
                data.push(gunoaie[i][key]);

            }
            chart.data.datasets[0].data = data;


        }

    };
    xhr.open(method, url, true);
    xhr.send();
    var xhr2 = new XMLHttpRequest(),
        method = 'GET',
        overrideMimeType = 'application',
        url = 'https://smart-garbage-monitor.herokuapp.com/rest/rest.php/cartiereSimplu';
    xhr2.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var cartiere = JSON.parse(xhr2.responseText);
            var cartiereStats = [];
            for (var i = 0; i < cartiere.length; i++) {
                console.log(cartiere[i].cartiere);
                cartiereStats.push(cartiere[i].cartiere);
            }
            chart.data.labels = cartiereStats;
            chart.update();
        }
    };
    xhr2.open(method, url, true);
    xhr2.send();

}