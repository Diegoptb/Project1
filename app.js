/*console.log("Sistema EBAC de registro de alumnos");
console.log("Agregar alumno");
console.log("Buscar alumno");
console.log("Eliminar alumno");


var nombre = prompt("Ingresa el nombre de alumno");
var zonaResidencia = prompt("Ingresa la zona de residencia del alumno")
var edad = prompt("Ingresa la edad del alumno")
var nombrePrograma = prompt("Ingresa el programa a estudiar")
var email = prompt("Ingresa el correo electrónico")*/

var opcion = prompt("Seleccione una opción: \n 1. Agregar registro \n 2. Consultar registro \n 3. Eliminar registro \n 4. Salir");

if (opcion === "1") {
    alert("Agregar alumno nuevo");
    
}else if(opcion === "2"){
    alert("Mostrar el registro");
}else if(opcion === "3"){
    alert("Eliminar registro de alumno");
}else if(opcion === "4"){
    alert("Salir del sistema");
}else {
    alert("Opción inválida, elige otra");
}

var registro = [
    {nombre: "Salvador Mora", edad: "30", zonaResidencia: "CDMX", nombrePrograma: "Desarrollador Front End De Cero a Pro", email: "salvador@ebac.mx"},
    {nombre: "Maria Hubert", edad: "34", zonaResidencia: "Edo Mex", nombrePrograma: "Desarollo Back End con Python", email: "maria@ebac.mx"}
];

for(var i = 0; i < registro.length; i++){
    console.log("Nombre: " + registro[i].nombre);
    console.log("Edad: " + registro[i].edad);
    console.log("Zona de residencia: " + registro[i].zonaResidencia);
    console.log("Nombre del programa: " + registro[i].nombrePrograma);
    //se coloca el correo electrónico poniendo el nombre del objeto y la propiedad
    console.log("Correo electrónico: " + registro[i].email);
}
