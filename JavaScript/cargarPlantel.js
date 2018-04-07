$(document).ready(getArchivo);

function getArchivo(){
  $.get("https://uns-iaw-2018-com16.github.io/TorneoFutbol/JSON/plantelEquipo1.json", function(data, status){
      cargarPlantelEquipo(data);
  });
}

function cargarPlantelEquipo(data){
  var i;
  var plantelEquipo = ""; 
  for(i = 0; i < data.length; i++){
    plantelEquipo+="<div class=\"media-left media-middle\">"+
    			"<a>"+
    		  		"<img class=\"media-object\" src=\""+data[i].foto+"\" alt=\"Imagen no disponible\">"+
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