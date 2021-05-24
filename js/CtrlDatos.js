"use strict";
var formulario = document.getElementById("formulario");
var forma = document.getElementById("forma"),
    salidaDatos = document.getElementById("salidaDatos");
    
formulario.onclick = function(){
    var boleta = forma["jboleta"].value,
    nombre = forma["jnombre"].value,
    grupo = forma["jgrupo"].value,
    materia = forma["jmateria"].value,
    fecha = forma["jfecha"].value;
    var resultado;
    resultado="Boleta: "+boleta+"\n"+" Nombre: "+nombre+"\n"+" Grupo: "+grupo+"\n"+" Materia: "+materia+"\n"+" Fecha: "+fecha;
    salidaDatos.textContent = resultado;  
}
