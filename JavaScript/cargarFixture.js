$(document).ready(getArchivo);

function getArchivo(){
  $.get("https://uns-iaw-2018-com16.github.io/TorneoFutbol/JSON/fixture.json", function(data, status){
      crearFixture(data);
  });
}

function crearFixture(data){
  var i,j;
  var panel="";
  for(i = 0; i < data.length; i++){
    panel += "<div class=\"panel panel-info\">"+
            "<div class=\"panel-heading\">"+
            "<p>Fecha "+(i+1)+"</p>"+
            "</div>"+
            "<div class=\"panel-body\">";
    for(j = 0; j<data[i].length; j++){
        panel += "<p>"+
             "<div class='partidoFechaFixture'>"+
             data[i][j].equipoLocal+
             " - "+
             data[i][j].equipoVisitante+
             "</div>"+
             "<div class='dateFechaFixture'>"+
             "<img src='https://uns-iaw-2018-com16.github.io/TorneoFutbol/Imagenes/Iconos/date.png' alt='Fecha del partido' class='icono'>"+data[i][j].fecha+
             "</div>"+
             "<div class='timeFechaFixture'>"+
             "<img src='https://uns-iaw-2018-com16.github.io/TorneoFutbol/Imagenes/Iconos/time.png' alt='Hora del partido' class='icono'>"+data[i][j].hora+
             "</div>"+
             "<div class='canchaFechaFixture'>"+
             "<img src='https://uns-iaw-2018-com16.github.io/TorneoFutbol/Imagenes/Iconos/cancha.png' alt='Cancha del partido' class='icono'>"+data[i][j].cancha+
             "</div>"+
             "<div class='arbitroFechaFixture'>"+
             "<img src='https://uns-iaw-2018-com16.github.io/TorneoFutbol/Imagenes/Iconos/arbitro.png' alt='Arbitro del partido' class='icono'>"+data[i][j].arbitro+
             "</div>"+
             "</p>";
    }
    panel+= "</div></div>";
  }
  document.getElementById("fixture").innerHTML = panel;
}