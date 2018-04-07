$(document).ready(getArchivo);

function getArchivo(){
  $.get("https://juanolmedo1.github.io/TorneoCUBB/equipos.json", function(data, status){
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