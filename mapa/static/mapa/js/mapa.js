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
	var osm = new L.TileLayer(osmUrl, {minZoom: 3, maxZoom: 5, attribution: osmAttrib});


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
  L.geoJson(ury, {style: uryStyle}).addTo(map);


  var legend = L.control({position: 'topright'});
  legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'selectors');
    div.innerHTML = '<select><option>Seleccione Genero</option><option>Masculino</option><option>Femenino</option></select> <select><option>Seleccione Causa</option><option>Causa 1</option><option>Causa 2</option></select><select><option>Seleccione año</option><option>2010</option><option>2011</option></select>';
    div.firstChild.onmousedown = div.firstChild.ondblclick = L.DomEvent.stopPropagation;
    return div;
};
legend.addTo(map);


//PRUEBA DE SELECTOR CON EVENTO AL HACER CLICK. NO FUNCIONA. VERIFICAR.

	var prueba = L.control({position: 'bottomleft'});
	legend.onAdd = function (map)
		{
			var div = L.DomUtil.create('div', 'paises');
			div.innerHTML ='<script type="text/javascript">$(document).ready(function(){$("select.selectpicker").change(function(){var nombrePais = $(".selectpicker option:selected").value();alert("Nombre del pa�s: "+nombrePais);});});</script><select name="paises[]" class="selectpicker"><option>Seleccione Pais</option><option value="CHL">Chile</option><option value="URY">Uruguay</option><option value="BRA">Brasil</option></select>';
			return div;

		};
 		legend.addTo(map);


		/*
		$(document).ready(function() {
			$("#paises[]").change(function() {
				alert($('#paises[]:selected').html());
			});*/




	//CUANDO FUNCIONE PRUEBA, MODIFICAR Y AGREGAR UNA FUNCI�N COMO ESTA
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
	$('#input').click(function(){ //Falta poner el logo de cargando
			$.ajax({
  			url: "data/"+$('#range').val()+"/"+$('#year').val()+"/"+$('#cause').val()+"/"+$('#sex').val()
			})
				.done(function( html ) {
	    		$( "#agregar" ).append( html );
	  	});
		});

	});
