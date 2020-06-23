window.onload = getMyLocation

var map;

var options = {
    enableHighAccuracy: true,
    timeout: 300000,
    maximumAge: 200
};

var ourCoords = {
    latitude: 37.383116,
    longitude: -121.971931
};

// Getting Latitude and Longitude
function getMyLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayLocation, displayError);
        var watchButton = document.getElementById("watch");
        watchButton.onclick = watchLocation;
        var clearWatchbutton = document.getElementById("clearWatch");
        clearWatchbutton.onclick = clearWatch;
    } else {
        alert("Sorry, there is no geolocation support");
    }
}

// Setting up for errors
function displayError(error) {
    switch (error.code) {
        case error.TIMEOUT:
            alert("Geolocation request time out");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Geolocation Position unavailable");
            break;
        case error.PERMISSION_DENIED:
            alert("Geolocation Permission denied");
            break;
        default:
            alert("Geolocation returned an unknown error code:" + error.code);
    }
}

function displayLocation(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var div = document.getElementById("location");

    div.innerHTML = "You are at Latitude: " + latitude + ", Longitude: " + longitude;
    // Accuracy
    div.innerHTML += " (with " + position.coords.accuracy + " meters accuracy)";

    var km = computeDistance(position.coords, ourCoords);
    var distance = document.getElementById("distance");
    distance.innerHTML = "You are " + km + " km from UCSC Extension";

    showMap(position.coords);
}

function showMap(coords) {
    var googleLatAndLong = new google.maps.LatLng(coords.latitude, coords.longitude);
    var mapOptions = {
        zoom: 10,
        center: googleLatAndLong,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var mapDiv = document.getElementById("map");
    map = new google.maps.Map(mapDiv, mapOptions);

    // add marker
    var title = "Your Location";
    var content = "Your are here " + coords.latitude + " , " + coords.longitude;
    addMarker(map, googleLatAndLong, title, content);
}

// Calculating Distance
function computeDistance(startCoords, destCoords) {
    var startLatRads = degreesToRadians(startCoords.latitude);
    var startLongRads = degreesToRadians(startCoords.longitude);
    var destLatRads = degreesToRadians(destCoords.latitude);
    var destLongRads = degreesToRadians(destCoords.longitude);
    var Radius = 6371; // radius of the earth in km
    var distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) + Math.cos(startLatRads) * Math.cos(destLatRads) * Math.cos(startLongRads - destLongRads)) * Radius;
    return distance;
}

function degreesToRadians(degrees) {
    var radians = (degrees * Math.PI) / 180;
    return radians;
}

function addMarker(map, latlong, title, content) {
    var markerOptions = {
        position: latlong,
        map: map,
        title: title,
        clickable: true
    };
    var marker = new google.maps.Marker(markerOptions);
    var infoWindowOptions = {
        content: content,
        position: latlong
    };
    var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
    google.maps.event.addListener(marker, "click", function() {
        infoWindow.open(map);
    })
};

function clearWatch() {
    if (watchId) {
        navigator.geolocation.clearWatch(watchId);
    }
}

function watchLocation() {
    watchId = navigator.geolocation.watchPosition(displayLocation, displayError, options);
}
