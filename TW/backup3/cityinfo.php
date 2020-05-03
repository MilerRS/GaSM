<?php
	$neighbourhood=$_GET['city'];
?>


<!DOCTYPE html>
<html lang=en>
<head>
	<title> GaSM</title>
	<link rel="stylesheet" type="text/css" href="theheader.css">
	<style>
		#place{
			text-align: center;
			border:5px solid black;	
			border-bottom-left-radius: 20px;
			border-bottom-right-radius: 20px;
			width:25%;
			height: 5em;
			background-color: #EBD42A;
			margin-top: -2em;
		}

		
		#last, #alltime{
			text-align:left;
			width:20%;
			border:5px ridge #EBD42A;			
		}
		
		#map{
			height:400px;
			width:30%;
			
			margin:auto;
			
		}
		#coords{
			border:5px solid black;
			border-radius: 10px;
			width:30%;
			height:3em;
			text-align: center;
			font-weight: bold;
			font-size: 110%;
			background-color: #EBD42A;
			margin:auto;
			margin-top: 3em;
		}
		#theButton{
			width:10%;
			height:10%;
			margin:auto;

		}
		#theStatistics{
			display:flex;
			align-items: center;
			justify-content: center;
		}

	</style>
</head>
<body>

	<header>
		<a href="login"><div class="loginSection"><img src="Images/usericon.png" alt="generic user icon" id="genericUserIcon"><div class="loginText">Authorized login</div></div></a>
		<a href="/TW"><img src="Images/Logo.png" alt="back to frontpage" id="theLogo" class="tl"></a>
	</header>

	<div class="title"><h1><b><?php echo $neighbourhood; ?> </b></h1></div>
	<hr>
	<div id = "theStatistics">
	<div id="last">The last time we checked...
		<ul>
			<li>245 paper collected</li>
			<li>300 glass collected</li>
			<li>550 mixed collected</li>
			<li>454 plastic collected</li>
		</li>
	</ul>
	</div>
	<p id="place">Holds 9-th place regarding thrash recycled!<br>♻️</p>
	<div id="alltime">Since the birth of GaSM...
		<ul>
			<li>765 paper collected</li>
			<li>654 glass collected</li>
			<li>788 mixed collected</li>
			<li>953 plastic collected</li>
		</ul>
	</div>
</div>

	<div id="coords">Not pleased with a place? Point right at it!<br> 👇</div>
	<div id="theButton"><button type="button" onclick="alert('Your coordinates have been sent!')">Submit location</button></div>
	<div id = "map"></div>
	<script src="NeighbourhoodCoords.js"></script>
	<script>
		function initMap(){
			var neighbourhoodName = <?php echo json_encode($neighbourhood); ?>;
			var neighbourhood = {lat:nhsCoords[neighbourhoodName].lat,lng:nhsCoords[neighbourhoodName].lng};
			var marker;
			var map = new google.maps.Map(
				document.getElementById('map'),{zoom: 14, center: neighbourhood});
			google.maps.event.addListener(map,'click',function(event){
			if(marker)
				marker.setMap(null);
			marker=new google.maps.Marker({position:event.latLng,map:map});
			document.getElementById('coords').innerHTML = event.latLng;

		});
		}
	</script>
	<script asynd defer
	src="https://maps.googleapis.com/maps/api/js?callback=initMap">
</script>

</body>
</html>