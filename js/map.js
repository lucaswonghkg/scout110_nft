var map = L.map('map');
map.setMaxBounds([[22.712628, 113.523193], [21.408092, 115.302592]]);
var svgBounds = [[22.600739, 113.814195], [22.162862, 114.469347]];
var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svgElement.setAttribute('xmlns', "http://www.w3.org/2000/svg");
svgElement.setAttribute('viewBox', "0 0 250 215");
svgElement.setAttribute('id', "map-grid");
svgElement.innerHTML += svgString;
svgElement.innerHTML += hkiOne;

// var svgBounds = [[22.600739, 113.814195], [22.162862, 114.469347]];
// map can capture clicks...
map.on('click', function (e) {
    doStuff(e);
});

function doStuff(e) {
    console.log(e.latlng);
    // coordinates in tile space
    var x = e.layerPoint.x;
    var y = e.layerPoint.y;
    console.log("layer_point");
    console.log([x, y]);

    // calculate point in xy space
    var pointXY = L.point(x, y);
    console.log("Point in x,y space: " + pointXY);

    // convert to lat/lng space
    var pointlatlng = map.layerPointToLatLng(pointXY);
    // why doesn't this match e.latlng?
    console.log("Point in lat,lng space: " + pointlatlng);
    // map.flyTo(pointlatlng, 17);
}

var image = L.svgOverlay(svgElement, svgBounds).addTo(map);
// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     // attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     transparency: 'true',
//     accessToken: 'pk.eyJ1IjoidGhvbWFzc3RoIiwiYSI6ImNreTRsajZ0ZzBjdTcydnB2czh5MXVlcHoifQ.TsN1MYvr1Ko5eVuo1fdJ1g',
//     opacity:5,
// }).addTo(map);



//var sol = L.latLng([145, 175]);
//var marker = L.marker(sol).addTo(map);

	
	



map.setView([22.234032, 114.227579], 13);

// 22.15005767	13241.53755



