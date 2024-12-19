document.addEventListener('DOMContentLoaded', function() {

//Imprime un mensaje de bienvenida en la consola
console.log("Sistema EBAC de registro de alumnos");

var form = document.getElementById('registration-form');
var addButton = document.getElementById('add-button');
var consultButton = document.getElementById('consult-button');
var deleteButton = document.getElementById('delete-button');

form.addEventListener('submit',agregarAlumno);

form.style.display = 'none';

addButton.addEventListener('click',function(event){
    form.style.display = 'flex';
});
consultButton.addEventListener('click',consultarRegistros);
deleteButton.addEventListener('click',eliminarAlumno);



//Se define un arreglo de registro con datos de alumnos en EBAC
var registro=[
    {nombre: "Salvador Mora", edad: "30", zonaResidencia: "CDMX", nombrePrograma: "Desarrollador Front End De Cero a Pro", email: "salvadormora@ebac.mx"},
    {nombre: "Maria Hubert", edad: "34", zonaResidencia: "Edo Mex", nombrePrograma: "Desarollo Back End con Python", email: "maria@ebac.mx"},
    {nombre: "Juan López", edad: "28", zonaResidencia: "GDL", nombrePrograma: "Data Science Avanzado", email: "juanlopez@ebac.mx"},
    {nombre: "Alejandra Ramirez", edad: "32", zonaResidencia: "MTY", nombrePrograma: "Marketing Digital", email: "alejandramirez@ebac.mx"},
    {nombre: "Carlos Rodríguez", edad: "29", zonaResidencia: "CDMX", nombrePrograma: "UX/UI Design", email: "carlosrodriguez@ebac.mx"}
];

//Función para agregar un nuevo alumno al registro
function agregarAlumno(event){

    event.preventDefault();
    //Se solicita al usuario ingresar los datos del nuevo alumno
    var nombre = document.getElementById('name-input').value;
    var zonaResidencia = document.getElementById('locality-input').value;
    var edad = document.getElementById('age-input').value;
    var nombrePrograma = document.getElementById('course-input').value;
    var email = document.getElementById('email-input').value;

    var nuevoAlumno = {nombre: nombre, edad: edad, zonaResidencia: zonaResidencia, nombrePrograma: nombrePrograma, email: email};

    registro.push(nuevoAlumno);

    var nombre = document.getElementById('name-input').value = '';
    var zonaResidencia = document.getElementById('locality-input').value = '';
    var edad = document.getElementById('age-input').value = '';
    var nombrePrograma = document.getElementById('course-input').value = '';
    var email = document.getElementById('email-input').value = '';
    form.style.display = 'none';

}

function consultarRegistros(){
    //Este ciclo itera sobre cada registro del arreglo
    /*for(var i = 0; i < registro.length; i++){
        //Esta lista permite ver al usuario los datos del registro en la consola
        console.log("Nombre: " + registro[i].nombre);
        console.log("Edad: " + registro[i].edad);
        console.log("Zona de residencia: " + registro[i].zonaResidencia);
        console.log("Nombre del programa: " + registro[i].nombrePrograma);
        console.log("Correo electrónico: " + registro[i].email);        
        if (registro[i].seguroSocial === "Sí"){
            registro[i].seguroSocial = true;
        }else if (registro[i].seguroSocial === "No"){
            registro[i].seguroSocial = false;
        }
        console.log("Cuenta con seguro social: " + registro[i].seguroSocial);
        console.log("_________________________");
    };*/
    console.table(registro);
}


//Esta función permite generar un nuevo arreglo que no contenga la información del alumno deseado
function eliminarAlumno(){
    
    //Solicita al usuario el nombre del alumno a eliminar
    var nombre = prompt("Ingresa el nombre del alumno a eliminar");

    //Utiliza el método filter para crear un nuevo arreglo sin el alumno a eliminar
    registro = registro.filter(alumno => alumno.nombre !== nombre);
}


/*
do{

//Variable que toma la elección del usuario para ejecutar la función indicada
var opcion = prompt("Seleccione una opción: \n 1. Agregar registro \n 2. Consultar registro \n 3. Eliminar registro \n 4. Salir");

//Condicional que ejecuta la función correspondiente a la elección del usuario
if (opcion === "1") {
    agregarAlumno();   
}else if(opcion === "2"){
    consultarRegistros();
}else if(opcion === "3"){
    eliminarAlumno();
}else if(opcion === "4"){
    alert("Salir del sistema");
    break;
}else {
    alert("Opción inválida, elige otra");
}

//Pregunta al usuario si desea realizar otra operación o cerramos el ciclo
    var continuar = prompt("¿Desea realizar otra operación? (S/N)");
    //cierre del ciclo
} while(continuar === "s");
*/

});
