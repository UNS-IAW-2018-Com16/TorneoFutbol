$(document).ready(getArchivo);

function getArchivo(){
  $.get("https://uns-iaw-2018-com16.github.io/TorneoFutbol/JSON/amarillas.json", function(data, status){
      crearTablaAmarillas(data);
  });
}

function crearTablaAmarillas(data){
  var i;
  var tablaAmarillas = "<tr>"+
                          "<th>Jugador</th>"+
                          "<th>Equipo</th>"+
                          "<th>Amarillas</th>"+
                       "</tr>";
  for(i = 0; i < data.length; i++){
    tablaAmarillas+= "<tr><td>" + data[i].jugador +
                    "</td><td>" + data[i].equipo +
                    "</td><td>" + data[i].amarillas + "</td></tr>";
  }
  document.getElementById("tablaAmarillas").innerHTML = tablaAmarillas;
}