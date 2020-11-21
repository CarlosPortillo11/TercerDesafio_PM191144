/*Variable para el objeto XMLHttpRequest */
var solicitudAsinc;

/*Establecer los manejadores de evento para las imágenes con
las portadas de los libros */

function registrarManejadores(){
    var img;
    var contentbook;
    /*Creando el contenido y borrandolos al producirse los eventos
    mouseover y mouseout sobre las imagenes capturadas por su id */
    /*Primera Imagen */
    img=document.getElementById("Rocky");
    if (img.addEventListener) {
        img.addEventListener("mouseover",function(){
            obtenerContenido("xml/Rocky.html");
        },false);
    }
    else if(img.attachEvent){
        img.attachEvent("onmouseover",function(){
            obtenerContenido("xml/Rocky.html");
        });
    }
    if (img.addEventListener) {
        img.addEventListener("mouseout",borrarContenido,false);
    }
    else if(img.attachEvent){
        img.attachEvent("onmouseout",borrarContenido);
    }
    /*Segunda Imagen */
    img=document.getElementById("Breathe");
    if (img.addEventListener) {
        img.addEventListener("mouseover",function(){
            obtenerContenido("xml/Breathe.html");
        },false);
    }
    else if(img.attachEvent){
        img.attachEvent("onmouseover",function(){
            obtenerContenido("xml/Breathe.html");
        });
    }
    if (img.addEventListener) {
        img.addEventListener("mouseout",borrarContenido,false);
    }
    else if(img.attachEvent){
        img.attachEvent("onmouseout",borrarContenido);
    }
    /*Tercera Imagen */
    img=document.getElementById("Tirador");
    if (img.addEventListener) {
        img.addEventListener("mouseover",function(){
            obtenerContenido("xml/Tirador.html");
        },false);
    }
    else if(img.attachEvent){
        img.attachEvent("onmouseover",function(){
            obtenerContenido("xml/Tirador.html");
        });
    }
    if (img.addEventListener) {
        img.addEventListener("mouseout",borrarContenido,false);
    }
    else if(img.attachEvent){
        img.attachEvent("onmouseout",borrarContenido);
    }
    /*Cuarta Imagen */
    img=document.getElementById("Bisiesto");
    if (img.addEventListener) {
        img.addEventListener("mouseover",function(){
            obtenerContenido("xml/Bisiesto.html");
        },false);
    }
    else if(img.attachEvent){
        img.attachEvent("onmouseover",function(){
            obtenerContenido("xml/Bisiesto.html");
        });
    }
    if (img.addEventListener) {
        img.addEventListener("mouseout",borrarContenido,false);
    }
    else if(img.attachEvent){
        img.attachEvent("onmouseout",borrarContenido);
    }
    /*Quinta Imagen */
    img=document.getElementById("Spiderman");
    if (img.addEventListener) {
        img.addEventListener("mouseover",function(){
            obtenerContenido("xml/Spiderman.html");
        },false);
    }
    else if(img.attachEvent){
        img.attachEvent("onmouseover",function(){
            obtenerContenido("xml/Spiderman.html");
        });
    }
    if (img.addEventListener) {
        img.addEventListener("mouseout",borrarContenido,false);
    }
    else if(img.attachEvent){
        img.attachEvent("onmouseout",borrarContenido);
    }
}
/*Fin de la funcion que registra eventos sobre las imágenes */

function obtenerContenido(url){
    /*Intentar crear objeto XMLHttpRequest y realizar la peticion */
    try{
        /*Crear objeto peticion XMLHttpRequest
        Cambiar esto por una funcion multinavegador para construir el objeto XMLHttpRequest */
        solicitudAsinc=new XMLHttpRequest();
        /*Registrar el manejador de eventos */
        if (solicitudAsinc.addEventListener) {
            solicitudAsinc.addEventListener("readystatechange",cambiarEstado,false);
        } else if(solicitudAsinc.attachEvent){
            solicitudAsinc.attachEvent("readystatechange",cambiarEstado);
        }
        /*Preparar la solicitud */
        solicitudAsinc.open("GET",url,true);
        /*Enviar la solicitud */
        solicitudAsinc.send(null);
    }
    catch(e){
        alert("No se procesó la peticion AJAX");
    }
}

function borrarContenido(){
    var contenido=document.getElementById("response");
    contenido.innerHTML="";
}

function cambiarEstado(){
    var contenido;
    if (solicitudAsinc.readyState==4 && solicitudAsinc.status==200) {
        contenido=document.getElementById("response");
        contenido.innerHTML=solicitudAsinc.responseText;
    }
}

if (window.addEventListener) {
    window.addEventListener("load",registrarManejadores,false);
} else if(window.attachEvent){
    window.attachEvent("onload",registrarManejadores);
}