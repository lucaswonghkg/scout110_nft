var map = L.map('map');
map.setMaxBounds([[22.712628, 113.523193], [21.408092, 115.302592]]);
var svgBounds = [[22.600739, 113.814195], [22.162862, 114.469347]];
var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svgElement.setAttribute('xmlns', "http://www.w3.org/2000/svg");
svgElement.setAttribute('viewBox', "0 0 250 215");
svgElement.setAttribute('id', "map-grid");
svgElement.innerHTML += svgString;
svgElement.innerHTML += hkiOne;
svgElement.innerHTML += hkiTwo;

var svgElement2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svgElement2.setAttribute('xmlns', "http://www.w3.org/2000/svg");
svgElement2.setAttribute('viewBox', "0 0 250 215");
svgElement2.setAttribute('id', "map-grid");
svgElement2.innerHTML += svgString;


map.setView([22.240048, 114.225517], 13);

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

var popupLocation1 = new L.LatLng(22.198429314192992,114.29880296112971);
var popupContent1 = '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fhkscout110%2Fposts%2F153121247106472&show_text=true&width=500" width="300" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>',
popup1 = new L.Popup();
popup1.setLatLng(popupLocation1);
popup1.setContent(popupContent1);
map.addLayer(popup1);


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

var image2 = L.svgOverlay(svgElement2,svgBounds).addTo(map);


		var rect1 = {color: "#ff1100", weight: 3};
		var rect2 = {color: "#0000AA", weight: 1, opacity:0, fillOpacity:0};
		var miniMap = new L.Control.MiniMap(image2, { zoomLevelOffset:-3, toggleDisplay: true, aimingRectOptions : rect1, shadowRectOptions: rect2, position : "bottomright"} ).addTo(map);

        // position : "topleft"
  
var marker = L.marker([22.279378886458154, 114.17487859725954], {
        elevation: 260.0,
        title: "香港童軍百周年紀念大樓",
        autoClose:false 
        }).addTo(map);

          marker.bindPopup("<center><p>香港童軍百周年紀念大樓<br>Hong Kong Scout Centennial Building</p><img src='icon/Centennial.png' alt='香港童軍百周年紀念大樓' width='100' height='200'></center>",{autoClose:false}).openPopup();

var marker = L.marker([22.243890824887522, 114.22396302223207], {
        elevation: 260.0,
        title: "大潭童軍中心",
        autoClose:false 
        }).addTo(map);
    
            marker.bindPopup("<center><p>大潭童軍中心<br>Tai Tam Scout Centre</p><img src='icon/TaiTam.png' alt='大潭童軍中心' width='175' height='125'></center>",{autoClose:false}).openPopup();



        //   22.243890824887522, lng: 114.22396302223207
// 22.15005767	13241.53755



