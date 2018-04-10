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
    panel += "<div class=\"panel panel-info resultados\">"+
            "<div class=\"panel-heading\">"+
              "<p>Fecha "+(i+1)+"</p>"+
            "</div>"+
            "<div class=\"panel-body\">";
    for(j = 0; j<data[i].length; j++){
        var golesLocal,golesVisita;
        if(data[i][j].golesLocal != null){
          golesLocal = data[i][j].golesLocal;
          golesVisita = data[i][j].golesVisita;
          panel += 
              "<p>"+
              "<div class='equipoResultado col-md-4'>"+
              data[i][j].equipoLocal+
              "</div>"+
              "<div class='resultadoPartido'>"+
                  "<div class='golesLocalResultado col-md-1'>"+
                  golesLocal+
                  "</div>"+
                  "<div class='golesVisitaResultado col-md-1'>"+
                  golesVisita+
                  "</div>"+
              "</div>"+
              "<div class='equipoResultado col-md-4'>"+
              data[i][j].equipoVisitante+
              "</div> "+
              " </p>";
        } 
    }
    panel+= "</div></div>";
  }
  document.getElementById("resultados").innerHTML = panel;
}