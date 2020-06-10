window.onload = populateClasament();

function populateClasament() {

    var xhr = new XMLHttpRequest(),
        method = 'GET',
        overrideMimeType = 'application/json',
        url = "https://smart-garbage-monitor.herokuapp.com/rest/rest.php/getOrderCartiere";

    xhr.onreadystatechange = function() {

        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            var cartiere = JSON.parse(xhr.responseText);

            var ele = document.getElementById('clasament');
            for (var i = 0; i < cartiere.length; i++) {
                ele.innerHTML = ele.innerHTML + '<li>' + (Number(i) + Number(1)) + '. ' + cartiere[i].neighbourhood + '</li>';
            }

        }
    };
    xhr.open(method, url, true);
    xhr.send();
}

var canvas = document.getElementById('myChart');

function genPDF() {

    var imgData = canvas.toDataURL("image/jpeg", 1.0);

    var doc = new jsPDF("p", "px", "a4");
    var width = doc.internal.pageSize.getWidth();
    var height = 120;

    doc.fromHTML(document.getElementById('ChartPDF').innerHTML, 0, 0, {
        'width': 30
    });

    doc.setFontSize(40)
    doc.text(35, 25, 'Grafic Statistici')
    doc.addImage(imgData, 'JPEG', 0, 40, width, height);
    doc.save('ExportChart.pdf');
}