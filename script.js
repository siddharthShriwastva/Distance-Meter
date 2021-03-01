var startPos;
var watchId;

function startTracking(){
	if(navigator.geolocation){
		document.getElementById('startBtn').style.display = 'none';
		document.getElementById('stopBtn').style.display = 'inline';
		// Get Position
		navigator.geolocation.getCurrentPosition(showPosition);
		// Watch position
		watchId = navigator.geolocation.watchPosition(showPositionUpdate, showError);
	}else{
		alert('Geolocation is not supported by your browser');
	}
}
function showPosition(position){
	startPos = position;
	document.getElementById('startlat').innerHTML = startPos.coords.latitude;
	document.getElementById('startlon').innerHTML = startPos.coords.longitude;
}
function showPositionUpdate(position){
	document.getElementById('currentlat').innerHTML = position.coords.latitude;
	document.getElementById('currentlon').innerHTML = position.coords.longitude;	
	document.getElementById('distance').innerHTML = calculateDistance(startPos.coords.latitude,startPos.coords.longitude,position.coords.latitude,positioncooreds.longitude); 
}

function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred."
      break;
  }
}

function calculateDistance(lat1,lon1,lat2,lon2){
	var R=6371; //Km
	var dLat = (lat2-lat1).toRad();
	var dLon = (lon2-lon1).toRad();
	var a = Math.sin(dLat/2)*Math.sin(dLat/2)+Math.cos(lat1.toRad())*Math.cos(lat2.toRad())*Math.sin(dLon/2)*Math.sin(dLon/2);
	var c = 2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
	var d = R*c;
	return d;
}
Numberprototype.toRad = function(){
	return this * Math.PI/180;
}
// Stop tracking

function stopTracking(){
	navigator.geolocation.clearWatch(watchId);
	alert('Tracking Has Stopped');
	document.getElementById('stopBtn').style.display = 'none';
	document.getElementById('startBtn').style.display = 'none';
	
}
