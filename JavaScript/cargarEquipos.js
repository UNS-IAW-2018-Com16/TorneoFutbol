$(document).ready(cargarEquipos);

function cargarEquipos(){
  $.get("https://uns-iaw-2018-com16.github.io/TorneoFutbol/JSON/equipos.json", function(data, status){
      cargarListaEquipos(data);
  });
}

function cargarListaEquipos(data){
  var i;
  var listaEquipos = ""; 
  for(i = 0; i < data.length; i++){
  	var equipo = data[i].nombre;
    listaEquipos+= "<li onclick=\"cargarPlantel('"+equipo+"')\"><a>"+equipo+"</a></li>";
  }
  document.getElementById("listaEquipos").innerHTML = listaEquipos;
}

function cargarPlantel(equipo){
  $.get("https://uns-iaw-2018-com16.github.io/TorneoFutbol/JSON/plantel"+equipo+".json", function(data, status){
      cargarJugadores(equipo,data);
  });
}

function cargarJugadores(equipo, data){
  var i;
  var plantelEquipo = ""; 
  for(i = 0; i < data.length; i++){
    plantelEquipo+="<div class=\"media-left media-middle\">"+
    			"<a>"+
    		  		"<img class=\"media-object\" src=\"https://uns-iaw-2018-com16.github.io/TorneoFutbol/Imagenes/"+equipo+"/Plantel/"+data[i].foto+"\" alt=\"Imagen no disponible\">"+
    		  "</a>"+
    		 "</div>"+
    		 "<div class=\"media-body\">"+
    		  	 "<h4 class=\"media-heading\">"+data[i].apellido+", "+data[i].nombre+"</h4>"+
    		  		"<p> Fecha de Nacimiento: "+data[i].fechaNacimiento+
    		  			 " </br> Edad: "+data[i].edad+
    		  			 " </br> Altura: "+data[i].altura+
    		  			 " </br> Peso: "+data[i].peso+
    		  			 " </br> Camiseta: "+data[i].numeroCamiseta+
    		  			 " </br> Pie Habil: "+data[i].pieHabil+
    		  			 " </br> Posicion: "+data[i].posicion+"</p>"+
    		 "</div> </br>";		
  }
  document.getElementById("plantel").innerHTML = plantelEquipo;
}