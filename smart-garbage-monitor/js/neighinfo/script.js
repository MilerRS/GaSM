  window.onload = setNeighbourhoodName();
  window.onload = getComments();
  window.onload = getGarbageInfoCurrentMonth();
  window.onload = getGarbageInfoAllTime();
  window.onload = neighbourhoodRank();


 function setNeighbourhoodName(){
  var url_string=window.location.href;
  var url = new URL(url_string);

  var neighbourhoodName = url.searchParams.get("neighbourhood");
  console.log(neighbourhoodName);

  
  var neighbourhoodNameField = document.getElementById('neighbourhoodName');
  neighbourhoodNameField.value=neighbourhoodName;

  neighbourhoodNameField=document.getElementById('neighbourhood');
  neighbourhoodNameField.innerText=neighbourhoodName;
}




  function initMap() {
    var neighbourhoodName = document.getElementById('neighbourhood');
    neighbourhoodName = neighbourhoodName.innerText;
    var neighbourhood = {
      lat: nhsCoords[neighbourhoodName].lat,
      lng: nhsCoords[neighbourhoodName].lng
    };
    var marker;
    var map = new google.maps.Map(
      document.getElementById('map'), {
        zoom: 15.5,
        center: neighbourhood
      });
    google.maps.event.addListener(map, 'click', function(event) {
      if (marker)
        marker.setMap(null);
      marker = new google.maps.Marker({
        position: event.latLng,
        map: map
      });
      var coordinates = event.latLng;
      document.getElementById('latValue').value = coordinates.lat();
      document.getElementById('lngValue').value = coordinates.lng();

    });
  }




  function sendCoords() {
      var lat = document.getElementById('latValue').value;
      var lng = document.getElementById('lngValue').value;
      var neighbourhoodName = document.getElementById('neighbourhood');
      neighbourhoodName = neighbourhoodName.innerText;
      var arr = { neighbourhood: neighbourhoodName, lat: lat, lng: lng };
      var location = JSON.stringify(arr);

      var xhr = new XMLHttpRequest(),
          method = 'POST',
          overrideMimeType = 'application/json',
          url = "../../rest/rest.php/saveLocation";

      xhr.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              alert("The location has been sent!");
          }

      };
      xhr.open("POST", url, true);
      xhr.send(location);
  }


  function getComments() {
    
      var neighbourhood = document.getElementById('neighbourhood');
      neighbourhood = neighbourhood.innerText;
      var xhr = new XMLHttpRequest(),
          method = 'GET',
          overrideMimeType = 'application/json',
          url = "../../rest/rest.php/comments/" + neighbourhood;
      xhr.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              var comments = JSON.parse(xhr.responseText);
              var commentsSection = document.getElementById('theComments');
              for (i = 0; i < comments.length; i++) {
                  commentsSection.innerHTML = commentsSection.innerHTML + '<br><b>' + comments[i].name + '</b><br> ' + comments[i].complaint + '<hr><br>';
              }

          }
      };
      xhr.open(method, url, true);
      xhr.send();
  }

  function getGarbageInfoCurrentMonth() {
      var neighbourhood = document.getElementById('neighbourhood');
      var list = document.getElementById('lastMonth');
      neighbourhood = neighbourhood.innerText;
      var xhr = new XMLHttpRequest(),
          method = 'GET',
          overrideMimeType = 'application/json',
          url = "../../rest/rest.php/garbage/?neighbourhood=" + neighbourhood + "&time=current";
      xhr.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              var response = JSON.parse(xhr.responseText);
              list.innerHTML="<li>"+response[0].sticla+" glass collected"+"</li>";
              list.innerHTML=list.innerHTML+"<li>"+response[0].hartie+" paper collected"+"</li>";
              list.innerHTML=list.innerHTML+"<li>"+response[0].menajer+" household waste collected"+"</li>";
          }
      };
      xhr.open(method, url, true);
      xhr.send();
  }

  function getGarbageInfoAllTime(){
    var neighbourhood = document.getElementById('neighbourhood');
      var list = document.getElementById('all');
      neighbourhood = neighbourhood.innerText;
      var xhr = new XMLHttpRequest(),
          method = 'GET',
          overrideMimeType = 'application/json',
          url = "../../rest/rest.php/garbage/?neighbourhood=" + neighbourhood + "&time=alltime";
      xhr.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              var response = JSON.parse(xhr.responseText);
              list.innerHTML="<li>"+response[0].sticla+" glass collected"+"</li>";
              list.innerHTML=list.innerHTML+"<li>"+response[0].hartie+" paper collected"+"</li>";
              list.innerHTML=list.innerHTML+"<li>"+response[0].menajer+" household waste collected"+"</li>";
          }
      };
      xhr.open(method, url, true);
      xhr.send();

  }

  function neighbourhoodRank(){
     var neighbourhood = document.getElementById('neighbourhood');
     var rank = document.getElementById('place')
      neighbourhood = neighbourhood.innerText;
      var xhr = new XMLHttpRequest(),
          method = 'GET',
          overrideMimeType = 'application/json',
          url = "../../rest/rest.php/rank/?neighbourhood=" + neighbourhood;
      xhr.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              var response = JSON.parse(xhr.responseText);
              rank.innerHTML='Holds rank '+response+' regarding cleanliness';
          }
      };
      xhr.open(method, url, true);
      xhr.send();


  }