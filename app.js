

console.log("Sistema EBAC de registro de alumnos");

var registro=[
    {nombre: "Salvador Mora", edad: "30", zonaResidencia: "CDMX", nombrePrograma: "Desarrollador Front End De Cero a Pro", email: "salvadormora@ebac.mx", seguroSocial: "Sí"},
    {nombre: "Maria Hubert", edad: "34", zonaResidencia: "Edo Mex", nombrePrograma: "Desarollo Back End con Python", email: "maria@ebac.mx", seguroSocial: "Sí"},
    {nombre: "Juan López", edad: "28", zonaResidencia: "GDL", nombrePrograma: "Data Science Avanzado", email: "juanlopez@ebac.mx", seguroSocial: "No"},
    {nombre: "Alejandra Ramirez", edad: "32", zonaResidencia: "MTY", nombrePrograma: "Marketing Digital", email: "alejandramirez@ebac.mx", seguroSocial: "No"},
    {nombre: "Carlos Rodríguez", edad: "29", zonaResidencia: "CDMX", nombrePrograma: "UX/UI Design", email: "carlosrodriguez@ebac.mx", seguroSocial: "Sí"}
];

function agregarAlumno(){
    var nombre = prompt("Ingresa el nombre de alumno");
    var zonaResidencia = prompt("Ingresa la zona de residencia del alumno")
    var edad = prompt("Ingresa la edad del alumno")
    var nombrePrograma = prompt("Ingresa el programa a estudiar")
    var email = prompt("Ingresa el correo electrónico")
    var seguroSocial = prompt("¿Cuenta con seguro social? (Sí/No)");
    var nuevoAlumno = {nombre: nombre, edad: edad, zonaResidencia: zonaResidencia, nombrePrograma: nombrePrograma, email: email, seguroSocial: seguroSocial};
    registro.push(nuevoAlumno);
    alert("Alumno agregado correctamente");
}

function consultarRegistros(){
    for(var i = 0; i < registro.length; i++){
        console.log("Nombre: " + registro[i].nombre);
        console.log("Edad: " + registro[i].edad);
        console.log("Zona de residencia: " + registro[i].zonaResidencia);
        console.log("Nombre del programa: " + registro[i].nombrePrograma);
        //se coloca el correo electrónico poniendo el nombre del objeto y la propiedad
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


do{

var opcion = prompt("Seleccione una opción: \n 1. Agregar registro \n 2. Consultar registro \n 3. Eliminar registro \n 4. Salir");

if (opcion === "1") {
    agregarAlumno();   
}else if(opcion === "2"){
    consultarRegistros();
}else if(opcion === "3"){
    alert("Eliminar registro de alumno");
}else if(opcion === "4"){
    alert("Salir del sistema");
    break;
}else {
    alert("Opción inválida, elige otra");
}
    var continuar = prompt("¿Desea realizar otra operación? (S/N)");
} while(continuar === "s");



