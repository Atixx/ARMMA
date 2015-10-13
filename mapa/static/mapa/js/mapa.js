//var map = L.map('map').setView([-34.735428, -58.390990], 8);

var map;
var ajaxRequest;
var plotlist;
var plotlayers=[];

var paisesJson = {"1010":"DZA","1020":"AGO","1025":"BEN","1030":"BWA","1035":"BFA","1040":"BDI","1045":"CMR",/*"1060":"CAPE VERDE?",*/"1070":"CAF","1080":"TCD",
	/*"1090":"COMOROS?",*/"1100":"COG","1115":"CIV","1120":"DJI","1125":"EGY","1130":"GNQ","1135":"ERI","1140":"ETH","1160":"GAB","1170":"GMB","1180":"GHA",
	"1190":"GIN","1192":"GNB","1220":"KEN","1230":"LSO","1240":"LBR","1250":"LBY","1260":"MDG","1270":"MWI","1280":"MLI","1290":"MRT",
	/*"1300":"MAURITIUS?","1303":"MAYOTTE?",*/"1310":"MAR","1320":"MOZ","1325":"NAM","1330":"NER","1340":"NGA",/*"1360":"REUNION?","1365":"RODRIGUES?",*/
	"1370":"RWA",/*"1385":"SAO TOME AND PRINCIPE?",*/"1390":"SEN",/*"1400":"SEYCHELLES?",*/"1410":"SLE","1420":"SOM","1430":"ZAF","1460":"SSD","1465":"SDN",
	/*"1470":"SUDAN, FORMER?",*/"1480":"SWZ","1510":"TGO","1520":"TUN","1530":"UGA","1546":"TZA","1555":"COD","1560":"ZMB","1570":"ZWE",
	/*"2005":"ANGUILLA?","2010":"ANTIGUA AND BARBUDA?",*/"2020":"ARG",/*"2025":"ARUBA?",*/"2030":"BHS",/*"2040":"BARBADOS?",*/"2045":"BLZ","2050":"BMU",
	"2060":"BOL","2070":"BRA",/*"2085":"BRITISH VIRGIN ISLANDS?",*/"2090":"CAN",/*"2110":"CAYMAN ISLANDS?",*/"2120":"CHL","2130":"COL","2140":"CRI",
	"2150":"CUB",	/*"2160":"DOMINICA",*/"2170":"DOM","2180":"ECU","2190":"SLV","2200":"FLK","2210":"GUF",/*"2230":"GRENADA?","2240":"GUADELOUPE?",*/
	"2250":"GTM","2260":"GUY","2270":"HTI","2280":"HND","2290":"JAM",/*"2300":"MARTINIQUE?",*/"2310":"MEX",/*"2320":"MONTSERRAT?","2330":"NETHERLAND ANTLLIES?",*/
	"2340":"NIC","2350":"PAN","2360":"PRY","2370":"PER","2380":"PRI",/*"2385":"SAINT KITTS AND NEVIS?","2400":"SAINT LUCIA?","2410":"SAINT PIERRE AND MIQUELON?",
	"2420":"SAINT VINCENT AND GRENADINES?",*/"2430":"SUR","2440":"TTO",/*"2445":"TURKS AND CAICOS ISLANDS?",*/"2450":"USA",/*"2455":"VIRGIN ISLANDS(USA)?",*/
	"2460":"URY","2470":"VEN","3010":"AFG",/*"3020":"BAHRAIN?",*/"3025":"BGD","3027":"BTN","3030":"BRN","3050":"KHM","3068":"CHN","3070":"TWN",/*"3080":"-99",*/
	"3083":"PRK",/*"3090":"HONG KONG SAR?",*/"3100":"IND","3110":"IDN","3130":"IRN","3140":"IRQ","3150":"ISR","3160":"JPN","3170":"JOR","3190":"KWT","3200":"LAO",
	"3210":"LBN",/*"3220":"MACAU?",*/"3236":"MYS",/*"3255":"MALDIVES?",*/"3260":"MNG","3270":"MMR","3280":"NPL",/*"3283":"OCCUPIED PALESTANIAN TERRITORY?",*/
	"3285":"OMN","3290":"PAK","3300":"PHL","3320":"QAT","3325":"KOR",/*"3330":"RYU KYU ISLANDS?",*/"3340":"SAU",/*"3350":"SINGAPORE?",*/"3365":"LKA","3370":"SYR",
	"3380":"THA","3400":"TUR","3405":"ARE","3408":"VNM","3420":"YEM","4005":"ALB","4007":"ARM",/*"4008":"ANDORRA?",*/"4010":"AUT","4012":"AZE","4018":"BLR",
	"4020":"BEL","4025":"BIH","4030":"BGR","4038":"HRV",/*"4040":"CZECHOSVAKIA, FORMER?",*/"4045":"CZE","4050":"DNK","4055":"EST","4070":"FIN","4080":"FRA",
	"4084":"GEO","4085":"DEU",/*"4090":"Germany, Former Democratic Republic?","4100":"Germany, Former Federal Republic?","4120":"Germany, West Berlin?",*/
	"4140":"GRC","4150":"HUN","4160":"ISL","4170":"IRL","4180":"ITA","4182":"KAZ","4184":"KGZ","4186":"LVA","4188":"LTU","4190":"LUX","4195":"MKD","4200":"MLT",
	/*"4205":"MONACO?",*/"4207":"MNE","4210":"NLD","4220":"NOR","4230":"POL","4240":"PRT","4260":"MDA","4270":"ROU","4272":"RUS","4273":"SRB",
	"4274":"SVK",/*"4275":"SAN MARINO?",*/"4276":"SVN","4280":"ESP","4290":"SWE","4300":"CHE","4301":"TJK","4302":"TKM","4303":"UKR",/*"4304":"USSR, FORMER?",*/
	"4308":"GBR",/*"4310":"United Kingdom, England and Wales?","4320":"United Kingdom, Northern Ireland?","4330":"United Kingdom, Scotland?",*/"4335":"UZB",
	/*"4340":"YUGOSLAVIA, FORMER?","4350":"Serbia and Montenegro, Former?",*/"5020":"AUS",/*"5060":"COOK ISLANDS?",*/"5070":"FJI",
	/*"5105":"KIRIBATI?","5107":"MARSHALL ISLANDS?","5108":"MICRONESIA?","5110":"NAURU?",*/"5150":"NZL",/*"5170":"NIUE?","5180":"PALAU?",*/
	"5195":"PNG",/*"5197":"SAMOA?",*/"5198":"SLB",/*"5200":"TONGA?","5205":"TUVALU?",*/"5207":"VUT"}

var coloresFijos = ["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"];

function initmap() {
	// set up the map
	map = new L.Map('map');

	// create the tile layer with correct attribution
	//var osmUrl='http://otile1.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png';
  //var osmUrl='http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png';
  var osmUrl='http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png';
	//var osmAttrib='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>';
  var osmAttrib = 'Map tiles by <a href="http://cartodb.com/attributions#basemaps">CartoDB</a>, under <a href="https://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>. Data by <a href="http://www.openstreetmap.org/">OpenStreetMap</a>, under ODbL.'
	var osm = new L.TileLayer(osmUrl, {minZoom: 3, maxZoom: 5, attribution: osmAttrib});


	map.setView(new L.LatLng(-24.735428, -58.390990),3);
	map.addLayer(osm);
}

function cargarPaises() {

	//var coloresDemo = ["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b]",
	//				"#f7fdfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b",
	//				"#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000",
	//				"#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"];

	for(key in paisesJson)
	{
		var geoPais = (function ()
				{
					var c = paisesJson[key];
					geoPais = null;
					$.ajax(
					{
						'async': false,
						'global': false,
						'url': "/static/mapa/js/paises/"+c.toString()+".geo.json",
						'dataType': "json",
						'success': function (data) {
						json = data;
					}
				});
				return json;
				})();

		var e = Math.floor(Math.random()*(9)); // con el 1er coloresDemo
		//var e = Math.floor(Math.random()*(36)); // con el 2do

		var nombrePaisStyle =
		{
		  "color" : "#000",
			"fillColor": coloresDemo[e],//"#74f0af",
			"weight": 2,
			"fillOpacity": 0.65
		};
		L.geoJson(geoPais, {style: nombrePaisStyle}).addTo(map);

	}

}

function loadPais(pais,anio,causa,sexo,edades){
	var geoPais = function (){
				var c = paisesJson[pais]
				geoPais = null;
				$.ajax(
				{
					'async': false,
					'global': false,
					'url': "/static/mapa/js/paises/"+c.toString()+".geo.json",
					'dataType': "json",
					'success': function (data) {
					json = data;
				}
			});
			return json;
		}();

		var dataPais = function (){
					dataPais = null;
					$.ajax(
					{
						'async': false,
						'global': false,
						'url': "data/"+pais.toString()+"/"+anio.toString()+"/"+causa.toString()+"/"+sexo.toString()+"/"+edades.toString(),
						'success': function (data) {
						info = data;
					}
				});
				return info;
			}();

	var colorPais = parseInt(dataPais)
	if (colorPais > 8) {
		colorPais = 8
	}
	var stylePais =
	{
		"color" : "#000",
		"fillColor": coloresFijos[colorPais],//"#74f0af",
		"weight": 2,
		"fillOpacity": 0.65
	};
	L.geoJson(geoPais, {style: stylePais}).addTo(map);

}


initmap();

$(document).ready(function() {
	/*$('#input').click(function(){ //Falta poner el logo de cargando
			$.ajax({
  			url: "data/"+$('#pais').val()+"/"+$('#year').val()+"/"+$('#cause').val()+"/"+$('#sex').val()+"/"+$('#edades').val()
			})
				.done(function( html ) {
	    		$( "#agregar" ).append( html );
	  	});

		});
  */

	var test = [2070,2020,2120,2460,2360,2060,2370,2130,2470];
	$('#input').click(function(){
		//for (i in paisesJson){
		for (i = 0; i<test.length; i++){
				loadPais(test[i],$('#year').val(),$('#cause').val(),$('#sex').val(),$('#edades').val())
		}

		//loadPais($('#pais').val(),$('#year').val(),$('#cause').val(),$('#sex').val(),$('#edades').val())
	});
		//setTimeout(cargarPaises(),100);

		/*

		  var legend = L.control({position: 'topright'});
		  legend.onAdd = function (map) {
		    var div = L.DomUtil.create('div', 'selectors');
		    div.innerHTML = '<select><option>Seleccione Genero</option><option>Masculino</option><option>Femenino</option></select> <select><option>Seleccione Causa</option><option>Causa 1</option><option>Causa 2</option></select><select><option>Seleccione año</option><option>2010</option><option>2011</option></select>';
		    div.firstChild.onmousedown = div.firstChild.ondblclick = L.DomEvent.stopPropagation;
		    return div;
		};
		legend.addTo(map);
		*/
});
