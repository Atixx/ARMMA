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
	"2150":"CUB",	/*"2160":"DOMINICA",*/"2170":"DOM","2180":"ECU","2190":"SLV","2210":"GUF",/*"2230":"GRENADA?","2240":"GUADELOUPE?",*/
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

var coloresFijos = ["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000", "#777"];

var info = L.control({position: 'topright'});

info.onAdd = function (map) {
	this._div = L.DomUtil.create('div','info');
	this.update();
	return this._div;
};

info.update = function (props) {
	this._div.innerHTML = '<h4>Mortalidad</h4>' + (props ?
	'<b>'+props.name + '</b></br> ' + '<img src="../static/mapa/css/images/48/'+props.name+'.png" height="48" width="48"></br>' + (props.mort ?
		('<span id="numMort">'+props.mort+'</span>' + '% x 1000 Personas') : "No hay datos" )  : 'Indique un pais');
};

function highlightFeature(e) {
	var layer = e.target;

	layer.setStyle({
		weight: 5,
		color: '#2f2',
		dashArray:'',
		fillOpacity: 0.7
	});
	if (!L.Browser.ie && !L.Browser.opera) {
		layer.bringToFront();
	}
	info.update(layer.feature.properties);
}

function resetHighlight(e) {
	var layer = e.target;
	layer.setStyle({
		weight: 2,
		color: "#000",
		dashArray:'',
		fillOpacity: 0.65
	});
	if (!L.Browser.ie && !L.Browser.opera) {
		layer.bringToBack();
	}
	info.update();
}

function onEachFeature(feature, layer) {
	layer.on({
		mouseover: highlightFeature,
		mouseout: resetHighlight
	});
}

function loadPais(pais,dataPais){
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
	dataPais = dataPais.slice(0,-1);
	var colorPais = parseInt(dataPais);
	geoPais["features"][0].properties.mort = dataPais;
	if (colorPais > 8) {
		colorPais = 8;
	}
	else if (isNaN(colorPais))
	{
		colorPais = 9;
		geoPais["features"][0].properties.mort = null;
	}
	var stylePais =
	{
		"color" : "#000",
		"fillColor": coloresFijos[colorPais],//"#74f0af",
		"weight": 2,
		"fillOpacity": 0.65
	};
	L.geoJson(
		geoPais,
		{style: stylePais,
		onEachFeature: onEachFeature
	}).addTo(map);

}

function ajaxLoad(paises) {
		$.ajax(
		{
			'async' :true,
			'url': "data/"+paises.toString()+"/"+$('#year').val()+"/"+$('#cause').val()+"/"+$("[name=sex]:checked").val()+"/"+$('#edades').val(),
			'success': function (data){
				loadPais(paises, data)
				}
		});
}

var paisesArray = function(){
	var buffer = [];
	for (i in paisesJson) {
		buffer.push(i);
	}
	return buffer;
}();

var menuButton = L.control({position: 'topleft'});
menuButton.onAdd = function(map) {
	var button = L.DomUtil.create('button', 'trigger btn btn-success');
	button.innerHTML = "<span class='glyphicon glyphicon-search'>";
	return button;
};
/*
var infoButton = L.control({position: 'topleft'});
infoButton.onAdd = function(map) {
	var button = L.DomUtil.create('button', 'btn btn-info');
	button.innerHTML = "<span class='glyphicon glyphicon-info-sign'>";
	return button;
};
*/
var printButton = L.control({position : 'topleft'});
printButton.onAdd = function(map) {
	var button = L.DomUtil.create('div');
	button.innerHTML = '<button type="button" class="btn btn-warning" onClick="imprimir()"> <span class="glyphicon glyphicon-print"> </button>';
	return button;
};

var infoButton = L.control({position : 'topleft'});
infoButton.onAdd = function(map) {
	var div = L.DomUtil.create('div');
	div.innerHTML = '<button type="button" class="btn btn-info" data-toggle="modal" data-target="#infoModal"> <span class="glyphicon glyphicon-info-sign"> </button>';
	return div;
};
var legend = L.control({position: 'bottomright'});
legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'legend');
    for (var i = 0; i < coloresFijos.length; i++) {
        div.innerHTML +=
            '<i style="background:' + coloresFijos[i] + '"></i> ' +
            (i !== 9 ? i : 'No Data') + '<br>';
    }
    return div;
};

function initmap() {
	// set up the map
	map = new L.Map('map', {
		scrollWheelZoom: false,
		bounceAtZoomLimits: true,
		maxBounds : [
			[-60, -180],
			[80, 200]
		],
		maxBoundsViscosity: 0.2});

	// create the tile layer with correct attribution
	//var osmUrl='http://otile1.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png';
  //var osmUrl='http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png';
  var osmUrl='http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png';
	//var osmAttrib='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>';
	var localAttrib = 'Copyright &#169; Bascuñan Sebastián, Colombo Maximiliano, Irione Araceli, Levy Maor. 2015, Proyecto Software, Licenciatura en Sistemas. Universidad Nacional de Lanús.'
  var osmAttrib = 'Map tiles by <a href="http://cartodb.com/attributions#basemaps">CartoDB</a>, under <a href="https://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>. Data by <a href="http://www.openstreetmap.org/">OpenStreetMap</a>, under ODbL.'+localAttrib;
	var osm = new L.TileLayer(osmUrl, {minZoom: 3, maxZoom: 4, attribution: osmAttrib});
	map.setView(new L.LatLng(10, 0),3);
	map.addLayer(osm);
	legend.addTo(map);
	menuButton.addTo(map);
  printButton.addTo(map);
	infoButton.addTo(map);
}

$(document).ready(function() {
	$('.selectpicker').selectpicker();
	$('#input').click(function(){
		jPM.close(true);
		map.remove();
		initmap();
		info.addTo(map);
		for (var i = 0; i < paisesArray.length; i++){
			ajaxLoad(paisesArray[i]);
		}
	});


	$('#export').click(function(){ //TODO (4/2/17): crear el XML para exportar
		// alert("Aca va a exportar");
		var dataObj = {};
		var fileXML = '<?xml version="1.0"?>\n';
		for (var i = 0; i < paisesArray.length; i++){
			// console.log(paisesJson[paisesArray[i]]);
			$.ajax(
			{
				'async' :false,
				'url': "data/"+paisesArray[i]+"/"+$('#year').val()+"/"+$('#cause').val()+"/"+$("[name=sex]:checked").val()+"/"+$('#edades').val(),
				'success': function (data){
					dataObj[paisesJson[paisesArray[i]]] = data;
					}
			});
		}
		//  console.log(dataObj);
		// download(dataObj);
		fileXML += "<anio>"+$('#year').val();
		fileXML += "\t<causa>"+$('#cause').val();
		fileXML += "\t\t<sexo>"
		if ($("[name=sex]:checked").val() == 1) { //Masculino
			fileXML +="Masculino";
		}
		else if ($("[name=sex]:checked").val() == 2) { //Femenino
			fileXML +="Femenino";
		}
		else { //Indistinto
				fileXML +="Indistinto";
		}
		fileXML +="\t\t\t<edades>"
		switch($('#edades').val()) {
			case 0:
					fileXML +="Todas las Edades";
					break;
			case 1:
					fileXML +="1-4";
					break;
			case 2:
					fileXML +="5-14";
					break;
			case 3:
					fileXML +="15-24";
					break;
			case 4:
					fileXML +="25-34";
					break;
			case 5:
					fileXML +="35-44";
					break;
			case 6:
					fileXML +="45-54";
					break;
			case 7:
					fileXML +="55-64";
					break;
			case 8:
					fileXML +="65+";
					break;
		}
		for (p in dataObj){
			fileXML +='\t\t\t\t<pais id="'+p+'">\n';
			fileXML +="\t\t\t\t\t<mortalidad>\n\t\t\t\t\t\t"+dataObj[p]+"\t\t\t\t\t</mortalidad>\n";
			fileXML +="\t\t\t\t</pais>\n";
		}
		fileXML +="\t\t\t</edades>\n";
		fileXML +="\t\t</sexo>\n";
		fileXML +="\t</causa>\n";
		fileXML +="</anio>\n";
		// console.log(fileXML);
<<<<<<< HEAD
		download(fileXML, $('#year').val()+$('#cause').val()+$("[name=sex]:checked").val()+$('#edades').val()+".xml" , "xml");
=======
		download(fileXML, $('#year').val()+$('#cause').val()+$("[name=sex]:checked").val()+$('#edades').val() , "xml");
>>>>>>> 31d98c2dbf51d0fee24ef91f61c8f4f671c2b223
	});

	var jPM = $.jPanelMenu({
    menu: '#menu',
    trigger: '.trigger',
		clone: false,
		excludedPanelContent: ".modal"
		//openPosition: '35%' //TODO:Queda para configurar el font en CSS, y una vez completado verificar denuevo esto
	});
	jPM.on();
	initmap();
});

$(document).on({
     ajaxStart: function() { $('body').addClass("loading");},
     ajaxStop: function() { $('body').removeClass("loading");}
});

function imprimir() {
	$('button').hide();
	window.print();
	$('button').show();

};

function download(data, filename, type) {
    var a = document.createElement("a"),
        file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
}
