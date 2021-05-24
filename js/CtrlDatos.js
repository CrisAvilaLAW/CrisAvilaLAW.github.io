"use strict";
var formulario = document.getElementById("formulario");
var forma = document.getElementById("forma"),
    salidaBoleta = document.getElementById("salidaBoleta"),
    salidaNombre = document.getElementById("salidaNombre"),
    salidaGrupo = document.getElementById("salidaGrupo"),
    salidaMateria = document.getElementById("salidaMateria"),
    salidaFecha = document.getElementById("salidaFecha");
    
formulario.onclick = function(){
    var boleta = forma["jboleta"].value,
    nombre = forma["jnombre"].value,
    grupo = forma["jgrupo"].value,
    materia = forma["jmateria"].value,
    fecha = forma["jfecha"].value;
    salidaBoleta.textContent ="Boleta: "+boleta;  
    salidaNombre.textContent ="Nombre: "+nombre;  
    salidaGrupo.textContent ="Grupo: "+grupo; 
    salidaMateria.textContent ="Materia: "+materia;  
    salidaFecha.textContent ="Fecha: "+fecha;  
}
