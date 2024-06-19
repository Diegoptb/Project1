//Imprime un mensaje de bienvenida en la consola
console.log("Sistema EBAC de registro de alumnos");


//Se define un arreglo de registro con datos de alumnos en EBAC
var registro=[
    {nombre: "Salvador Mora", edad: "30", zonaResidencia: "CDMX", nombrePrograma: "Desarrollador Front End De Cero a Pro", email: "salvadormora@ebac.mx", seguroSocial: "Sí"},
    {nombre: "Maria Hubert", edad: "34", zonaResidencia: "Edo Mex", nombrePrograma: "Desarollo Back End con Python", email: "maria@ebac.mx", seguroSocial: "Sí"},
    {nombre: "Juan López", edad: "28", zonaResidencia: "GDL", nombrePrograma: "Data Science Avanzado", email: "juanlopez@ebac.mx", seguroSocial: "No"},
    {nombre: "Alejandra Ramirez", edad: "32", zonaResidencia: "MTY", nombrePrograma: "Marketing Digital", email: "alejandramirez@ebac.mx", seguroSocial: "No"},
    {nombre: "Carlos Rodríguez", edad: "29", zonaResidencia: "CDMX", nombrePrograma: "UX/UI Design", email: "carlosrodriguez@ebac.mx", seguroSocial: "Sí"}
];

//Función para agregar un nuevo alumno al registro
function agregarAlumno(){

    //Se solicita al usuario ingresar los datos del nuevo alumno
    var nombre = prompt("Ingresa el nombre de alumno");
    var zonaResidencia = prompt("Ingresa la zona de residencia del alumno")
    var edad = prompt("Ingresa la edad del alumno")
    var nombrePrograma = prompt("Ingresa el programa a estudiar")
    var email = prompt("Ingresa el correo electrónico")
    var seguroSocial = prompt("¿Cuenta con seguro social? (Sí/No)");

    //Se crea un objeto con los datos del nuevo alumno
    var nuevoAlumno = {nombre: nombre, edad: edad, zonaResidencia: zonaResidencia, nombrePrograma: nombrePrograma, email: email, seguroSocial: seguroSocial};
    //Se agrega el nuevo alumno al arreglo del registro
    registro.push(nuevoAlumno);
    alert("Alumno agregado correctamente");
}


//Función para consultar los registros de los alumnos
function consultarRegistros(){
    //Este ciclo itera sobre cada registro del arreglo
    for(var i = 0; i < registro.length; i++){
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
    };
}


//Esta función permite generar un nuevo arreglo que no contenga la información del alumno deseado
function eliminarAlumno(){
    
    //Solicita al usuario el nombre del alumno a eliminar
    var nombre = prompt("Ingresa el nombre del alumno a eliminar");

    //Utiliza el método filter para crear un nuevo arreglo sin el alumno a eliminar
    registro = registro.filter(alumno => alumno.nombre !== nombre);
}


//Permite repetir el menú de opciones hasta que el usuario decida salir
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



