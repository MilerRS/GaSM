function exportcsv() {
    var xhr = new XMLHttpRequest(),
        method = 'GET',
        overrideMimeType = 'application/json',
        url = "https://smart-garbage-monitor.herokuapp.com/rest/rest.php/csv";

    xhr.onreadystatechange = function() {

        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            var tabel = JSON.parse(xhr.responseText);

            console.log(tabel);
            const CSVSTATISTICI = generateCSV(tabel);
            downloadcsv("Statistici_Total.csv", CSVSTATISTICI);
        }
    };
    xhr.open(method, url, true);
    xhr.send();
}

function generateCSV(tabel) {
    let csvString = "Nume,Sticla,Hartie,Menajer \n";
    for (var i = 0; i < tabel.length; i++) {
        csvString += tabel[i].cartiere + ',';
        csvString += tabel[i].sticla + ',';
        csvString += tabel[i].hartie + ',';
        csvString += tabel[i].menajer + '\n';
    }
    return csvString;

}

function downloadcsv(filename, CSVSTATISTICI) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(CSVSTATISTICI));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}