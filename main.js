// $(document).ready(function() {

function initMap() {
  
	var styledMapType = new google.maps.StyledMapType(
		[
  			{"elementType": "geometry", "stylers": [{"color": "#ebe3cd"}]},
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#523735"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#c9b2a6"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#dcd2be"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ae9e90"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#93817c"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a5b076"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#447530"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fdfcf8"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f8c967"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#e9bc62"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e98d58"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#db8555"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#806b63"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8f7d77"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#b9d3c2"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#92998d"
      }
    ]
  }
], {name: 'Styled Map'}
	);

	function animateMapZoomTo(map, targetZoom) {
    var currentZoom = arguments[2] || map.getZoom();
    if (currentZoom != targetZoom) {
        google.maps.event.addListenerOnce(map, 'zoom_changed', function (event) {
            animateMapZoomTo(map, targetZoom, currentZoom + (targetZoom > currentZoom ? 1 : -1));
        });
        setTimeout(function(){ map.setZoom(currentZoom) }, 80);
    }
}

	var t = 'assets/t.png';
	var la = {lat: 33.9556886, lng: -118.4771945};
	var map = new google.maps.Map(document.getElementById('map'), {
	zoom: 11,
	center: la
	});

	var last_open = new google.maps.InfoWindow();

	

	// Location markers
	var mall = new google.maps.Marker({
	position: {lat: 33.83135, lng: -118.34936},
    animation: google.maps.Animation.DROP,
	map: map
	}); 
	var mall_info = new google.maps.InfoWindow({
          content: "<div class='content'>" +
          "<a href='locations/mall.html'>" +
          "<h1>The Dell Amo Mall</h1>" +
          "<h2>Torrance</h2>" + 
          "</div>"
    });
	mall.addListener('click', function() {
	   	map.setCenter(mall.getPosition());
	   	mall_info.open(map, mall);
	   	last_open.close();
	   	last_open = mall_info;
	});

	var mels = new google.maps.Marker({
	position: {lat: 33.85862, lng: -118.40038},
    animation: google.maps.Animation.DROP,
	map: map
	}); 
	var mels_info = new google.maps.InfoWindow({
          content: "<div class='content'>" + 
          "<a href='locations/mels.html'>" +
          "<h1>Melanie's Apartment</h1>" +
          "</a>" +
          "<h2>Hermosa Beach</h2>" + 
          "</div>"
    });
	mels.addListener('click', function() {
	   	map.setCenter(mels.getPosition());
	   	mels_info.open(map, mels);
	   	last_open.close();
	   	last_open = mels_info;
	});

	var cherry = new google.maps.Marker({
	position: {lat: 33.83146, lng: -118.26264},
    animation: google.maps.Animation.DROP,
	map: map
	}); 
	var cherry_info = new google.maps.InfoWindow({
          content: "<div class='content'>" +
          "<a href='locations/cherry.html'>" +
          "<h1>Cherry Bail Bonds<h1>" +
          "</a>" +
          "<h2>Carson<h2>" + 
          "</div>"
    });
	cherry.addListener('click', function() {
	   	map.setCenter(cherry.getPosition());
	   	cherry_info.open(map, cherry);
	   	last_open.close();
	   	last_open = cherry_info;
	}); 

	var cockatoo = new google.maps.Marker({
	position: {lat: 33.93066, lng: -118.35165},
    animation: google.maps.Animation.DROP,
	map: map
	});  
	var cockatoo_info = new google.maps.InfoWindow({
          content: "<div class='content'>" +
          "<a href='locations/cockatoo.html'>" +
          "<h1>Cockatoo Inn<h1>" +
          "</a>" +
          "<h2>The City of Hawthorne<h2>" + 
          "</div>"
    });
	cockatoo.addListener('click', function() {
	   	map.setCenter(cockatoo.getPosition());
	   	cockatoo_info.open(map, cockatoo);
	   	last_open.close();
	   	last_open = cockatoo_info;
	});

	var lax = new google.maps.Marker({
	position: {lat: 33.94421, lng: -118.40386},
    animation: google.maps.Animation.DROP,
	map: map
	}); 
	var lax_info = new google.maps.InfoWindow({
          content: "<div class='content'>" +
          "<a href='locations/lax.html'>" +
          "<h1>Los Angeles International Airport<h1>" +
          "</a>" +
          "<h2>LAX<h2>" + 
          "</div>"
    });
	lax.addListener('click', function() {
	   	map.setCenter(lax.getPosition());
	   	lax_info.open(map, lax);
	   	last_open.close();
	   	last_open = lax_info;
	});

	var compton = new google.maps.Marker({
	position: {lat: 33.89578, lng: -118.23709},
    animation: google.maps.Animation.DROP,
	map: map
	});
	var compton_info = new google.maps.InfoWindow({
          content: "<div class='content'>" +
          "<a href='locations/compton.html'>" +
          "<h1>Ordell's Apartments<h1>" +
          "</a>" +
          "<h2>The City of Compton<h2>" + 
          "</div>"
    });
	compton.addListener('click', function() {
	   	map.setCenter(compton.getPosition());
	   	compton_info.open(map, compton);
	   	last_open.close();
	   	last_open = compton_info;
	});

	var sams = new google.maps.Marker({
	position: {lat: 34.02861, lng: -118.2399},
    animation: google.maps.Animation.DROP,
	map: map
	}); 
	var sams_info = new google.maps.InfoWindow({
          content: "<div class='content'>" +
          "<a href='locations/sams.html'>" +
          "<h1>Sam's Hofbrau<h1>" +
          "</a>" +
          "<h2>Downtown<h2>" + 
          "</div>"
    });
	sams.addListener('click', function() {
	   	map.setCenter(sams.getPosition());
	   	sams_info.open(map, sams);
	   	last_open.close();
	   	last_open = sams_info;
	});

	var beau = new google.maps.Marker({
	position: {lat: 34.10758, lng: -118.30938},
    animation: google.maps.Animation.DROP,
	map: map
	});
	var beau_info = new google.maps.InfoWindow({
          content: "<div class='content'>" +
          "<a href='locations/beau.html'>" +
          "<h1>Beaumont Livingston's Apartment<h1>" +
          "</a>" +
          "<h2>Hollywood<h2>" + 
          "</div>"
    });
	beau.addListener('click', function() {
	   	map.setCenter(beau.getPosition());
	   	beau_info.open(map, beau);
	   	last_open.close();
	   	last_open = beau_info;
	});


	var narbonne = new google.maps.Marker({
	position: {lat: 33.80366, lng: -118.30678},
    animation: google.maps.Animation.DROP,
    icon: t,
	map: map
	}); 


	narbonne.addListener('click', function() {
	    map.setZoom(15);
	   	map.setCenter(narbonne.getPosition());
	});
	var pussycat = new google.maps.Marker({
	position: {lat: 33.83216, lng: -118.31524},
    animation: google.maps.Animation.DROP,
    icon: t,
	map: map
	}); 
	pussycat.addListener('click', function() {
	    map.setZoom(15);
	   	map.setCenter(pussycat.getPosition());
	});
	var va = new google.maps.Marker({
	position: {lat: 33.89193, lng: -118.39559},
    animation: google.maps.Animation.DROP,
    icon: t,
	map: map
	}); 
	va.addListener('click', function() {
	    map.setZoom(15);
	   	map.setCenter(va.getPosition());
	});




	//Associate the styled map with the MapTypeId and set it to display.
        map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');
}

//API Key AIzaSyCuWgBqZAhaGnh0JROQa8YMnP_p47p06lw
// API ID tarantino-175701

// 33.83135, -118.34936

