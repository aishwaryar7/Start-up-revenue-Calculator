/*var mapimg;

var clat = 0;
var clon = 0;

//turkey - 38.9637° N, 35.2433° E
//konya, turkey 37.8746° N, 32.4932° E
var lat = 37.8746;
var lon = 32.4932;

var zoom = 1;

function preload(){
	//mapimg = loadImage('https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/30.963,39.2433,6,0,0/1024x512?access_token=pk.eyJ1IjoibmlraGlsZXNoIiwiYSI6ImNqMnE1azNnajAzMXUycXF3dDFtZ3R3NGYifQ.TGSFnzs17dZjLPnN674h3g');
	mapimg = loadImage('https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/0,0,1,0,0/1024x512?access_token=pk.eyJ1IjoibmlraGlsZXNoIiwiYSI6ImNqMnE1azNnajAzMXUycXF3dDFtZ3R3NGYifQ.TGSFnzs17dZjLPnN674h3g');

}


function mercX(lon){
	lon = radians(lon);
	var a = (256 / PI) * pow(2,zoom);
	var b = (lon + PI);
	return a*b;
}

function mercY(lat){
	lat = radians(lat);
	var a = (256 / PI) * pow(2,zoom);
	var b = (PI/4 + lat/2);
	var c = PI - log(b);
	return a*c;
}

function setup() {

	createCanvas(1024,512);
	translate(width/2, height/2);
	imageMode(CENTER);
	image(mapimg,0,0);

	var cx = mercX(clon);
	var cy = mercY(clat);

	var x = mercX(lon) - cx;
	var y = mercY(lat) - cy;
		
	fill(255,0,255,200);
	ellipse(x,y,20,20);

}
*/
// var mapimg;
// function preload(){
// 	mapboxgl.accessToken = 'pk.eyJ1IjoibmlraGlsZXNoIiwiYSI6ImNqMnE1azNnajAzMXUycXF3dDFtZ3R3NGYifQ.TGSFnzs17dZjLPnN674h3g';
//   	mapimg = new mapboxgl.Map({
//       container: 'map', // container id
//       style: 'mapbox://styles/mapbox/dark-v9', //stylesheet location
//       center: [-74.50, 40], // starting position
//       zoom: 9 // starting zoom
//   	});
// }
// function setup(){
// 	createCanvas(1024,512);
// 	image(mapimg,0,0);
// }