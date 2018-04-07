$(document).ready(getArchivo);

function getArchivo(){
  $.get("https://uns-iaw-2018-com16.github.io/TorneoFutbol/goleadores.json", function(data, status){
      crearTablaGoleadores(data);
  });
}

function crearTablaGoleadores(data){
  var i;
  var tablaGoleadores = "<tr>"+
                          "<th>Jugador</th>"+
                          "<th>Equipo</th>"+
                          "<th>Goles</th>"+
                       "</tr>";
  for(i = 0; i < data.length; i++){
    tablaGoleadores+= "<tr><td>" + data[i].jugador +
                    "</td><td>" + data[i].equipo +
                    "</td><td>" + data[i].goles + "</td></tr>";
  }
  document.getElementById("tablaGoleadores").innerHTML = tablaGoleadores;
}