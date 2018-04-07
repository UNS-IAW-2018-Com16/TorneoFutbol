$(document).ready(getArchivo);

function getArchivo(){
  $.get("https://uns-iaw-2018-com16.github.io/TorneoFutbol/fixture.json", function(data, status){
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
        panel += "<p>"+data[i][j].equipoLocal+
             " vs. "+data[i][j].equipoVisitante+
             " - Fecha: "+data[i][j].fecha+
             " - Hora: "+data[i][j].hora+
             " - Cancha: "+data[i][j].cancha+
             " - Arbitro: "+data[i][j].arbitro+" </p>";
    }
    panel+= "</div></div>";
  }
  document.getElementById("fixture").innerHTML = panel;
}