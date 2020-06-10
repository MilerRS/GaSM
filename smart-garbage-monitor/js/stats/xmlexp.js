function exportxml() {
    var xhr = new XMLHttpRequest(),
        method = 'GET',
        overrideMimeType = 'application/json',
        url = "https://smart-garbage-monitor.herokuapp.com/rest/rest.php/xml";

    xhr.onreadystatechange = function() {

        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            var tabel = JSON.parse(xhr.responseText);

            console.log(tabel);
            const XMLSTATISTICI = getTableColumns(tabel);
            EXPORTXML("Tabel_statistici.xml", XMLSTATISTICI);
        }
    };
    xhr.open(method, url, true);
    xhr.send();
}


function getTableColumns(tabel) {
    let StringXML = '<?xml version="1.0" encoding="UTF-8"?> \n';
    StringXML += "<data>\n";
    for (var i = 0; i < tabel.length; i++) {
        StringXML += `\t<Cartiere Nume=` + '"' + tabel[i].cartiere + '"' + `> Cartiere\n`;
        StringXML += `\t\t<Datan Data=` + '"' + tabel[i].datan + '"' + '> \n ';
        StringXML += "\t\t\t<Hartie Hartie=" + '"' + tabel[i].hartie + '"' + '>\n';
        StringXML += "\t\t\t\t<Menajer Menajer=" + '"' + tabel[i].menajer + '"' + '>\n';
        StringXML += "\t\t\t\t\t<Sticla Sticla=" + '"' + tabel[i].sticla + '"' + '>\n';
        StringXML += "\t\t\t\t\t</Sticla>\n";
        StringXML += "\t\t\t\t</Menajer>\n";
        StringXML += `\t\t\t</Hartie> \n`;
        StringXML += `\t\t</Datan> \n`;
        StringXML += `\t</Cartiere> \n`;
    }
    StringXML += "</data>";

    return StringXML;

}

function EXPORTXML(filename, XMLSTATISTICI) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/xml;charset=utf-8,' + encodeURIComponent(XMLSTATISTICI));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}