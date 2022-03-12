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

var image = L.svgOverlay(svgElement, svgBounds).addTo(map);


var popupLocation1 = new L.LatLng(22.198429314192992,114.29880296112971);

var popupContent1 = '<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fhkscout110%2Fposts%2F153121247106472&show_text=true&width=500" width="300" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>',
popup1 = new L.Popup();
popup1.setLatLng(popupLocation1);
popup1.setContent(popupContent1);


map.addLayer(popup1);

	
	



map.setView([22.234032, 114.227579], 13);

// 22.15005767	13241.53755



