$(document).ready(function() {

    var estiloCSS = localStorage.getItem("estiloActual");
    
    if (estiloCSS === null){
        estiloModoGeneral();
    }else{
        setHref(estiloCSS);
    }

});
    

/* $("#estilo1").click(function(){
    estiloModoGeneral();   
});

$("#estilo2").click(function(){
    estiloModoOscuro();
});*/

function estiloModoGeneral(){
    localStorage.setItem("estiloActual","estiloGeneral.css");
    setHref("estiloGeneral.css");
    
    /*$('link[id="estiloPagina"]').attr('href','https://uns-iaw-2018-com16.github.io/TorneoFutbol/CSS/estiloGeneral.css');*/
}


function estiloModoOscuro(){
    localStorage.setItem("estiloActual","estiloOscuro.css");
    setHref("estiloOscuro.css");
    
    /*$("link[id=\"estiloPagina\"]").attr("href","https://uns-iaw-2018-com16.github.io/TorneoFutbol/CSS/estiloOscuro.css"); */   
}
    
function setHref(estilo){
    var rutaAbsoluta = "https://uns-iaw-2018-com16.github.io/TorneoFutbol/CSS/"+estilo;
    $("link[id=\"estiloPagina\"]").attr("href",rutaAbsoulta);
        
}
