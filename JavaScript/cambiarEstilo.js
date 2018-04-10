$(function() {
    var estiloCSS = localStorage.getItem("estiloActual");    
    if (estiloCSS === null){
        cambiarEstilo("estiloGeneral.css");
    } else{
        cambiarEstilo(estiloCSS);
    }
});
    
function cambiarEstilo(estilo){
    setReferencia(estilo);
    localStorage.setItem("estiloActual",estilo);
    cambiarTitulo(estilo);

}
    
function setReferencia(estilo){
    var rutaAbsoluta = "https://uns-iaw-2018-com16.github.io/TorneoFutbol/CSS/"+estilo;
    $("link[id=\"estiloPagina\"]").attr("href",rutaAbsoluta);
}

function cambiarTitulo(estilo){
    if(estilo==="estiloGeneral.css")
        $("img[id=\"titulo\"]").attr("src","https://uns-iaw-2018-com16.github.io/TorneoFutbol/Imagenes/Fondos/EstiloGeneral/banner.png");
    else
        $("img[id=\"titulo\"]").attr("src","https://uns-iaw-2018-com16.github.io/TorneoFutbol/Imagenes/Fondos/EstiloGeneral/banner.png");
}