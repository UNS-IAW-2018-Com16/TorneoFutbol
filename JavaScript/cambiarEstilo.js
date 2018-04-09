/* $("#estilo1").click(function(){
    estiloModoGeneral();   
});

$("#estilo2").click(function(){
    estiloModoOscuro();
});*/

function estiloModoGeneral(){
    $('link[id="estiloPagina"]').attr('href','https://uns-iaw-2018-com16.github.io/TorneoFutbol/CSS/estiloGeneral.css');
}


function estiloModoOscuro(){
    $("link[id=\"estiloPagina\"]").attr("href","https://uns-iaw-2018-com16.github.io/TorneoFutbol/CSS/estiloOscuro.css");    
}