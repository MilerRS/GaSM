function initMap(lat,lng) {
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