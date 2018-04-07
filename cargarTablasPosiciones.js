$(document).ready(getArchivo);

function getArchivo(){
  $.get("https://juanolmedo1.github.io/TorneoCUBB/posiciones.json", function(data, status){
      crearTablaPosiciones(data);
  });
}

function crearTablaPosiciones(data){
  var i;
  var tablaPosiciones = "<tr>"+
                          "<th>Equipo</th>"+
                          "<th>PJ</th>"+
                          "<th>PG</th>"+
                          "<th>PE</th>"+
                          "<th>PP</th>"+
                          "<th>GF</th>"+
                          "<th>GC</th>"+
                          "<th>DG</th>"+
                          "<th>PTS</th>"+
                        "</tr>";
  for(i = 0; i < data.length; i++){
    tablaPosiciones+= "<tr><td>" + data[i].equipo +
                    "</td><td>" + data[i].PJ +
                    "</td><td>" + data[i].PG +
                    "</td><td>" + data[i].PE +
                    "</td><td>" + data[i].PP +
                    "</td><td>" + data[i].GF +
                    "</td><td>" + data[i].GC +
                    "</td><td>" + data[i].DG +
                    "</td><td>" + data[i].PTS + "</td></tr>";
  }
  document.getElementById("tablaPosiciones").innerHTML = tablaPosiciones;
}