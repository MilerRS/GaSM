window.onload=populateSelect();
window.onload=myFunctionProbleme();
window.onload=initMap(Number(47.161426),Number(27.583540));
function initMap(lat,lng) {
       if(!lat && !lng)
       {
        lat=Number(47.161426);
        lng=Number(27.583540);
       }
		var neighbourhood = {
			lat: lat,
			lng: lng
		};
		var marker;
		var map = new google.maps.Map(
			document.getElementById('map'), {
				zoom: 14,
				center: neighbourhood
			});
		marker = new google.maps.Marker({
				position: neighbourhood,
				map: map
			});
	}
function myFunctionProbleme()
{

    var xhr=new XMLHttpRequest(),method='GET',overrideMimeType='application/json',url="../../rest/rest.php/probleme"; //am pus 'ceva' doar pt a intra pe switch-ul ala din fisierul toPhp.php
xhr.onreadystatechange=function(){
  if (this.readyState == 4 && this.status == 200) {
  var probleme=JSON.parse(xhr.responseText);
 
  var ele=document.getElementById('probleme');
  //document.getElementById("closable").innerHTML=this.responseText;
  ele.innerHTML='<tr>'+'<td>'+'Cartier'+'</td>'+'<td>'+'Latitudine'+'</td>' + '<td>'+'Longitudine' +'</td>'+'<td>'+'Arata pe mapa'+'</td>'+'<td>'+'Sterge Gunoi'+'</td>'+'</tr>';
  for(i=0;i<probleme.length;i++)
  {
     //  ele.innerHTML=ele.innerHTML+'<li>' + probleme[i].neighbourhood+ ' ' + probleme[i].lat + ' '+ probleme[i].lng + '</li>';
     ele.innerHTML=ele.innerHTML+'<tr>'+'<td>' +probleme[i].neighbourhood+ '</td>'+'<td>'+probleme[i].lat+'</td>'+'<td>'+probleme[i].lng+'</td>'+'<td>'+'<button class="showMap" onclick="showMapFunc()">Map</button>'+'</td>'+'<td>'+'<span class="close">&times;</span>'+'</td>'+'</tr>';
  }
  
}
};
xhr.open(method,url,true);
xhr.send();
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
    var xhr=new XMLHttpRequest(),method='GET',overrideMimeType='application/json',url="../../rest/rest.php/cartiereSimplu"; //am pus 'ceva' doar pt a intra pe switch-ul ala din fisierul toPhp.php
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

function showMapFunc()
{
    var items=document.getElementsByClassName("showMap");
    for(var i=0; i<items.length;i++)
    {
        items[i].addEventListener("click",function(){
            var string=this.parentElement.parentElement.innerText;
            var coordonate=string.split("\t");
            
            initMap(Number(coordonate[1]),Number(coordonate[2]));
            var elmnt = document.getElementById("map");
            elmnt.scrollIntoView();
        });
    }
}

function functionDelete()
{
    var items = document.getElementsByClassName("close");
    for (var i = 0; i < items.length; i++) {
       items[i].addEventListener("click",function(){
           var string=this.parentElement.parentElement.innerText.split("\t");
           this.parentElement.parentElement.style.display='none';
           var cartier=string[0];
           var latitudine=string[1];
           var longitudine=string[2];
           var txt={cartiere:cartier,latitudine:latitudine,longitudine:longitudine};
           var obj=JSON.stringify(txt);
           var xmlhttp = new XMLHttpRequest(),method='Delete',overrideMimeType='application/json',url="../../rest/rest.php/deleteProblema";
           xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                
                alert("Datele au fost sterse. Tocmai ai curatat gunoiul  din cartier!");

                
            }
        };
        xmlhttp.open(method, url, true);
        xmlhttp.send(obj);
       });
           
          
       }
            /*var arrayOfInformation=this.innerHTML.split(" ");
            var cartier=arrayOfInformation[0];
            var latitudine=arrayOfInformation[1];
            var longitudine=arrayOfInformation[2];
           var txt={cartiere:cartier,latitudine:latitudine,longitudine:longitudine};
           var obj=JSON.stringify(txt);
        
           
           var xmlhttp = new XMLHttpRequest(),method='POST',overrideMimeType='application/json',url="../classes/PostRestSalubris.php/deleteProblema";
           xmlhttp.onreadystatechange = function() {
               if (this.readyState == 4 && this.status == 200) {
                   
                   alert("Datele au fost sterse. Tocmai ai curatat gunoiul menajer din cartier!");
                   
               }
           };
           xmlhttp.open("POST", url, true);
           xmlhttp.send(obj);
    
           
           
       };*/
      
      
}
function trimiteDate()
{
   
   // iau mai intai cartierul, sticla ,hartia si unoul menajer
    var cartier=document.getElementById('Cartier').value;
    var sticla=document.getElementById('Sticla').value;
    var hartie=document.getElementById('Hartie').value;
    var menajer=document.getElementById('Menajer').value;
    //var menajer=document.forms["form1"]["cantitateMenajer"].value;
    //var txt ='{' + ' "cartier": ' + cartier + ', "sticla" :' + sticla
    //+ ', "hartie" :' + hartie + ',"menajer" : ' + menajer + '}';
    var txt={cartier:cartier,sticla:sticla,hartie:hartie,menajer:menajer};
    if(!cartier )
    alert("Alegeti cartierul!");
    else if(Number(sticla)<Number(0) || Number(hartie)<Number(0) || Number(menajer)<Number(0))
    alert("Nu aveti voie cu date negative");
    else{
    var obj=JSON.stringify(txt);
    //document.write(obj);
    var xhr=new XMLHttpRequest(),method='POST',overrideMimeType='application/json',url="../../rest/rest.php/insertGunoaie";
   
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            alert("Datele au fost introduse!");
        }
        
    };
    xhr.open("POST", url, true);
           xhr.send(obj);
           var xhr2=new XMLHttpRequest(),method='PUT',overrideMimeType='application/json',url="../../rest/rest.php/putGunoaie";       
           xhr2.onreadystatechange=function()
           {
               if(this.readyState==4 && this.status==200)
              {
                  console.log("Ok");
              }   
           };
           xhr2.open(method,url,true);
           xhr2.send(obj);
        }  


   
}




