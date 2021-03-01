# Distance-Meter
A HTML5, CSS and Javascript project which deals with geo location API. In this project, Your starting location will be recorded in the form of latitude and longitude and current location will be updated with change in location. 
I used Haversine Formula which is stated as follow

a = sin²(dLat/2) + cos lat1 ⋅ cos lat2 ⋅ sin²(dLon/2)

c = 2 ⋅ atan2( √a, √(1−a) )

d = R ⋅ c

Here Lat1= Starting Latitude

Lon1 = Starting Longitude

Lat2= Current Latitude

Lon2 = Current Longitude

dLat is difference between Lat1 and Lat2

dLon is difference between Lon1 and Lon2

R is the radius of earth which is 6,371 Km.

So, I have used the above formula as:

**var R=6371; //Km
var dLat = (lat2-lat1).toRad();
var dLon = (lon2-lon1).toRad();
var a = Math.sin(dLat/2)*Math.sin(dLat/2)+Math.cos(lat1.toRad())*Math.cos(lat2.toRad())*Math.sin(dLon/2)*Math.sin(dLon/2);
var c = 2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));
var d = R*c;
return d;**


