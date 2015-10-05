//var map = L.map('map').setView([-34.735428, -58.390990], 8);

var map;
var ajaxRequest;
var plotlist;
var plotlayers=[];

function initmap() {
	// set up the map
	map = new L.Map('map');

	// create the tile layer with correct attribution
	//var osmUrl='http://otile1.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png';
  //var osmUrl='http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png';
  var osmUrl='http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png';
	//var osmAttrib='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>';
  var osmAttrib = 'Map tiles by <a href="http://cartodb.com/attributions#basemaps">CartoDB</a>, under <a href="https://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>. Data by <a href="http://www.openstreetmap.org/">OpenStreetMap</a>, under ODbL.'
	var osm = new L.TileLayer(osmUrl, {minZoom: 0, maxZoom: 20, attribution: osmAttrib});


	map.setView(new L.LatLng(-34.735428, -58.390990),4);
	map.addLayer(osm);
}

initmap();

$(document).ready(function() {

    var polygon = L.polygon([
    [-34.7315, -58.3902],
    [-34.736, -58.3902],
    [-34.736, -58.394],
    [-34.7315, -58.394]
]).addTo(map);



var arg = {"type":"FeatureCollection","features":[
{"type":"Feature","id":"ARG","properties":{"name":"Argentina"},"geometry":{"type":"MultiPolygon","coordinates":[[[[-65.5,-55.2],[-66.45,-55.25],[-66.95992,-54.89681],[-67.56244,-54.87001],[-68.63335,-54.8695],[-68.63401,-52.63637],[-68.25,-53.1],[-67.75,-53.85],[-66.45,-54.45],[-65.05,-54.7],[-65.5,-55.2]]],[[[-64.964892,-22.075862],[-64.377021,-22.798091],[-63.986838,-21.993644],[-62.846468,-22.034985],[-62.685057,-22.249029],[-60.846565,-23.880713],[-60.028966,-24.032796],[-58.807128,-24.771459],[-57.777217,-25.16234],[-57.63366,-25.603657],[-58.618174,-27.123719],[-57.60976,-27.395899],[-56.486702,-27.548499],[-55.695846,-27.387837],[-54.788795,-26.621786],[-54.625291,-25.739255],[-54.13005,-25.547639],[-53.628349,-26.124865],[-53.648735,-26.923473],[-54.490725,-27.474757],[-55.162286,-27.881915],[-56.2909,-28.852761],[-57.625133,-30.216295],[-57.874937,-31.016556],[-58.14244,-32.044504],[-58.132648,-33.040567],[-58.349611,-33.263189],[-58.427074,-33.909454],[-58.495442,-34.43149],[-57.22583,-35.288027],[-57.362359,-35.97739],[-56.737487,-36.413126],[-56.788285,-36.901572],[-57.749157,-38.183871],[-59.231857,-38.72022],[-61.237445,-38.928425],[-62.335957,-38.827707],[-62.125763,-39.424105],[-62.330531,-40.172586],[-62.145994,-40.676897],[-62.745803,-41.028761],[-63.770495,-41.166789],[-64.73209,-40.802677],[-65.118035,-41.064315],[-64.978561,-42.058001],[-64.303408,-42.359016],[-63.755948,-42.043687],[-63.458059,-42.563138],[-64.378804,-42.873558],[-65.181804,-43.495381],[-65.328823,-44.501366],[-65.565269,-45.036786],[-66.509966,-45.039628],[-67.293794,-45.551896],[-67.580546,-46.301773],[-66.597066,-47.033925],[-65.641027,-47.236135],[-65.985088,-48.133289],[-67.166179,-48.697337],[-67.816088,-49.869669],[-68.728745,-50.264218],[-69.138539,-50.73251],[-68.815561,-51.771104],[-68.149995,-52.349983],[-68.571545,-52.299444],[-69.498362,-52.142761],[-71.914804,-52.009022],[-72.329404,-51.425956],[-72.309974,-50.67701],[-72.975747,-50.74145],[-73.328051,-50.378785],[-73.415436,-49.318436],[-72.648247,-48.878618],[-72.331161,-48.244238],[-72.447355,-47.738533],[-71.917258,-46.884838],[-71.552009,-45.560733],[-71.659316,-44.973689],[-71.222779,-44.784243],[-71.329801,-44.407522],[-71.793623,-44.207172],[-71.464056,-43.787611],[-71.915424,-43.408565],[-72.148898,-42.254888],[-71.746804,-42.051386],[-71.915734,-40.832339],[-71.680761,-39.808164],[-71.413517,-38.916022],[-70.814664,-38.552995],[-71.118625,-37.576827],[-71.121881,-36.658124],[-70.364769,-36.005089],[-70.388049,-35.169688],[-69.817309,-34.193571],[-69.814777,-33.273886],[-70.074399,-33.09121],[-70.535069,-31.36501],[-69.919008,-30.336339],[-70.01355,-29.367923],[-69.65613,-28.459141],[-69.001235,-27.521214],[-68.295542,-26.89934],[-68.5948,-26.506909],[-68.386001,-26.185016],[-68.417653,-24.518555],[-67.328443,-24.025303],[-66.985234,-22.986349],[-67.106674,-22.735925],[-66.273339,-21.83231],[-64.964892,-22.075862]]]]}}
]}


var pry = {"type":"FeatureCollection","features":[
{"type":"Feature","id":"PRY","properties":{"name":"Paraguay"},"geometry":{"type":"Polygon","coordinates":[[[-62.685057,-22.249029],[-62.291179,-21.051635],[-62.265961,-20.513735],[-61.786326,-19.633737],[-60.043565,-19.342747],[-59.115042,-19.356906],[-58.183471,-19.868399],[-58.166392,-20.176701],[-57.870674,-20.732688],[-57.937156,-22.090176],[-56.88151,-22.282154],[-56.473317,-22.0863],[-55.797958,-22.35693],[-55.610683,-22.655619],[-55.517639,-23.571998],[-55.400747,-23.956935],[-55.027902,-24.001274],[-54.652834,-23.839578],[-54.29296,-24.021014],[-54.293476,-24.5708],[-54.428946,-25.162185],[-54.625291,-25.739255],[-54.788795,-26.621786],[-55.695846,-27.387837],[-56.486702,-27.548499],[-57.60976,-27.395899],[-58.618174,-27.123719],[-57.63366,-25.603657],[-57.777217,-25.16234],[-58.807128,-24.771459],[-60.028966,-24.032796],[-60.846565,-23.880713],[-62.685057,-22.249029]]]}}
]}

var argStyle = {
    "color": "#ff7800",
    "weight": 5,
    "opacity": 0.65
};

var pryStyle = {
    "color": "#7800ff",
    "weight": 5,
    "opacity": 0.45
};

  polygon.bindPopup("Esta es la Unla");

  $('#pop').click(function() {
    var popup = L.popup()
    .setLatLng([-34.735428, -58.390990])
    .setContent("UNLa.")
    .openOn(map);
  });


 //PRUEBA DE LECTURA DE ARCHIVO.JSON CON AJAX.  OK.

var ury = (function () {
    var ury = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': "/static/mapa/js/paises/URY.geo.json",
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})(); 
			
var uryStyle = {
    "color": "#74f0af",
    "weight": 5,
    "opacity": 0.50
};
  
  
  
  L.geoJson(arg, {style : argStyle}).addTo(map);
  L.geoJson(pry, {style: pryStyle}).addTo(map);
  L.geoJson(ury, {style: uryStyle}).addTo(map);
	
  var legend = L.control({position: 'topright'});
  legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'selectors');
    div.innerHTML = '<select><option>Seleccione Genero</option><option>Masculino</option><option>Femenino</option></select> <select><option>Seleccione Causa</option><option>Causa 1</option><option>Causa 2</option></select><select><option>Seleccione aÃ±o</option><option>2010</option><option>2011</option></select>';
    div.firstChild.onmousedown = div.firstChild.ondblclick = L.DomEvent.stopPropagation;
    return div;
};
legend.addTo(map);


//PRUEBA DE SELECTOR CON EVENTO AL HACER CLICK. NO FUNCIONA. VERIFICAR.

	var prueba = L.control({position: 'bottomleft'});
	legend.onAdd = function (map) 
		{
			var div = L.DomUtil.create('div', 'paises');
			div.innerHTML ='<script type="text/javascript">$(document).ready(function(){$("select.selectpicker").change(function(){var nombrePais = $(".selectpicker option:selected").value();alert("Nombre del país: "+nombrePais);});});</script><select name="paises[]" class="selectpicker"><option>Seleccione Pais</option><option value="CHL">Chile</option><option value="URY">Uruguay</option><option value="BRA">Brasil</option></select>';
			return div;
			
		};
 		legend.addTo(map);
	
		
		/*
		$(document).ready(function() {
			$("#paises[]").change(function() {
				alert($('#paises[]:selected').html());
			});*/
    
    
	
		
	//CUANDO FUNCIONE PRUEBA, MODIFICAR Y AGREGAR UNA FUNCIÓN COMO ESTA	
	/*
	$(document).ready(function()
		{
			$("#paises[]").click(function()
			{
				
				var pais = (function () 
				{	var nombrePais = paises.options[ paises.selectedIndex ].value();
					var pais = null;
					$.ajax(
					{	
						'async': false,
						'global': false,
						'url': "/static/mapa/js/paises/"+nombrePais+".geo.json",
						'dataType': "json",
						'success': function (data) 
						{
							json = data;
						}
					});
					return json;
				})();
				var pStyle = 
				{
					"color": "#ff7830",
					"weight": 5,
					"opacity": 0.65
				};
				L.geoJson(pais, {style : pStyle}).addTo(map);			
			});	

		});
		
	*/


	});
	