$(document).ready(getArchivo);

function getArchivo(){
  $.get("https://uns-iaw-2018-com16.github.io/TorneoFutbol/JSON/fixture.json", function(data, status){
      crearResultados(data);
  });
}

function crearResultados(data){
  var i,j;
  var panel="";
  for(i = 0; i < data.length; i++){
    panel += "<div class=\"panel panel-info\">"+
            "<div class=\"panel-heading\" class=\"encabezado\">"+
              "<p>Fecha "+(i+1)+"</p>"+
            "</div>"+
            "<div class=\"panel-body\" class=\"cuerpo\">";
    for(j = 0; j<data[i].length; j++){
        var golesLocal,golesVisita;
        if(data[i][j].golesLocal != null){
          golesLocal = data[i][j].golesLocal;
          golesVisita = data[i][j].golesVisita;
          panel += "<p>"+data[i][j].equipoLocal+" - "+golesLocal+" - "+
             " vs. - "+golesVisita+" - "+data[i][j].equipoVisitante+" </p>";
        } 
    }
    panel+= "</div></div>";
  }
  document.getElementById("resultados").innerHTML = panel;
}