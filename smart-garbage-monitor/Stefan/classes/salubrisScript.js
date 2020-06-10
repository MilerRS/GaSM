window.onload=populateSelect();
window.onload=myFunction();


function myFunction()
{

var xhttp=new XMLHttpRequest();
var url = "http://localhost:1234/database/classes/tophp.php?q2=" + this.innerHTML;
xhttp.onreadystatechange=function(){
  if (this.readyState == 4 && this.status == 200) {
  document.getElementById("closable").innerHTML=this.responseText;
  
}
};
xhttp.open("GET",url+"ceva",true);
xhttp.send();
}
function populateSelect()
{
   
    /*var xhttp=new XMLHttpRequest();
    var url = "http://localhost:1234/database/classes/tophp.php?q3=" + this.innerHTML;
    xhttp.onreadystatechange=function(){
        if(this.readyState ==4 && this.status==200)
        {
            document.getElementsByClassName('Cartier').innerHTML=this.responseText;
        }
    };
    xhttp.open("GET",url+"ceva",true);
    xhttp.send();*/
    var xhr=new XMLHttpRequest(),method='GET',overrideMimeType='application/json',url="http://localhost:1234/database/classes/tophp.php?q3=ceva" //am pus 'ceva' doar pt a intra pe switch-ul ala din fisierul toPhp.php
    xhr.onreadystatechange=function()
    {
        if(xhr.readyState===XMLHttpRequest.DONE && xhr.status===200){
            var cartiere=JSON.parse(xhr.responseText);
        
        var ele=document.getElementById('Cartier');
        for(var i=0;i<cartiere.length;i++)
        {
            ele.innerHTML=ele.innerHTML+'<option value=" ' +cartiere[i].cartiere + ' ">' +cartiere[i].cartiere+ '</option>';
        }

    }
};
xhr.open(method,url,true);
xhr.send();
}

function functionDelete()
{
    var items = document.querySelectorAll("#closable li");
    for (var i = 0; i < items.length; i++) {
       items[i].onclick = function() {
         
           // document.getElementById("txt").value = this.innerHTML;
           var xmlhttp = new XMLHttpRequest();
           var url = "http://localhost:1234/database/classes/tophp.php?q=" + this.innerHTML;
           xmlhttp.onreadystatechange = function() {
               if (this.readyState == 4 && this.status == 200) {
                   alert("Datele au fost sterse. Tocmai ai curatat gunoiul menajer din cartier!")
               }
           };
           xmlhttp.open("GET", url, true);
           xmlhttp.send();
    
           
           
       };
      }
}
function trimiteDate()
{
   
  
    var cartier=document.getElementById("Cartier").value;
    var sticla=document.getElementById('Sticla').value;
    var hartie=document.getElementById("Hartie").value;
    var menajer=document.getElementById('Menajer').value;
    //var menajer=document.forms["form1"]["cantitateMenajer"].value;
    //var txt ='{' + ' "cartier": ' + cartier + ', "sticla" :' + sticla
    //+ ', "hartie" :' + hartie + ',"menajer" : ' + menajer + '}';
    var txt={cartier:cartier ,sticla:sticla,hartie:hartie,menajer:menajer};
    
    var obj=JSON.stringify(txt);
    //document.write(obj);
    var xhr=new XMLHttpRequest(),method='GET',overrideMimeType='application/json',url="http://localhost:1234/database/classes/tophp.php?q4=";
   
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            alert("Datele au fost introduse!");
        }
        
    };
    xhr.open("GET", url, true);
           xhr.send(obj);


   
}






