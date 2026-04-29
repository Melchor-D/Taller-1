let huesped = [];
function mostrarMenu (){
    let opc = prompt (
        '*****REGISTRO DE HOTEL Oasis*****\n 1. Registro de Habitacion\n 2. Lista de Habitacion\n 3. Buscar habitacion por numero\n  4. Cambiar estado de una Habitacion\n 5. Eliminar Habitacion\n 6. salir'
    );
    switch(opc){
        case "1":
            console.log ("ingreso de usuario de la habitacion")
            break;
        case "2":
            console.log ("mostrar habitacion")
            break;
         case "3":
            console.log ("mostrar habitaciones ocupadas")
            break;
         case "4":
            console.log ("mostrar la disponibilidad de la habitacion")
            break;
         case "5":
            console.log ("quitar habitacion")
            break;
         case "6":
            console.log ("salir")
            break;
         default:
            console.log ("ingrese un valor valido")
            mostrarMenu();
    }
}

mostrarMenu()

function RegistroDeUsuario(callback){
   let nombre =" "
}
