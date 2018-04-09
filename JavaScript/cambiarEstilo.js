$(function() {

    var estiloCSS = localStorage.getItem("estiloActual");
    alert(estiloCSS);
    
    if (estiloCSS === null){
        cambiarEstilo("estiloGeneral.css");
    } else{
        cambiarEstilo(estiloCSS);
    }

});
    
function cambiarEstilo(estilo){
    setReferencia(estilo);
    localStorage.setItem("estiloActual",estilo);

}
    
function setReferencia(estilo){
    var rutaAbsoluta = "https://uns-iaw-2018-com16.github.io/TorneoFutbol/CSS/"+estilo;
    $("link[id=\"estiloPagina\"]").attr("href",rutaAbsoulta);
        
    
}
