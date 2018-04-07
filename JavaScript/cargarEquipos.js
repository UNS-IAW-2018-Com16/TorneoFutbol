$(document).ready(getArchivo);

function getArchivo(){
  $.get("https://uns-iaw-2018-com16.github.io/TorneoFutbol/JSON/equipos.json", function(data, status){
      cargarListaEquipos(data);
  });
}

function cargarListaEquipos(data){
  var i;
  var listaEquipos = ""; 
  for(i = 0; i < data.length; i++){
    listaEquipos+= "<li><a>"+data[i].nombre+"</a></li>";
  }
  document.getElementById("listaEquipos").innerHTML = listaEquipos;
}