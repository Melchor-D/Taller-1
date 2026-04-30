let huesped = [];
function mostrarMenu (){
    let opc = prompt (
        '*****REGISTRO DE HOTEL OASIS*****\n 1. Registro de Habitacion\n 2. Lista de Habitacion\n 3. Buscar habitacion por numero\n 4. Cambiar estado de una Habitacion\n 5. Eliminar Habitacion\n 6. salir'
    );
    switch(opc){
        case "1":
            RegistroDeUsuario(mostrarMenu);
            break;
        case "2":
            mostrarHuespedes(mostrarMenu);
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
   let numero =prompt("Ingresa numero de Habitacio")
   let tipo =prompt("Tipo de Habitacion:\n1. Sencilla\n 2.Doble\n 3. Suite\n") 
   switch(tipo){

      case"1":
         tipo ="Sencilla"
         break;

      case"2":
         tipo ="Doble"
         break;

      case"3":
         tipo="Suite"
         break;
   }
   let PrecioNoche =prompt("Ingrese precio de habitacion")
   let estado =prompt("Estado de Habiacion:\n1. libre\n 2.ocuapada\n 3.limpieza\n")
   switch(estado){
      case"1":
         estado="Libre"
         break;
      case"2":
         estado="Ocupada"
         break;
      case"3":
         estado="Limpieza"
         break;
   }
   let huesped2 = prompt("Nombre: ")

   let registro = {numero, tipo, PrecioNoche, estado, huesped2}

   setTimeout(function(){
      huesped.push(registro)
      console.log("Habitación " + numero + " registrada")     
      console.log("Lista completa de huéspedes:")
      console.table(huesped)
         callback();   
   },2000);
}

function mostrarHuespedes (callback){
   let nombre = prompt("-----Ingreso de Habitaciones-----")
   registro.forEach(registro => {
      console.log(registro.numero, registro.tipo, registro.PrecioNoche, registro.estado)
   });
   callback();


function buscarHabitacion (callback){
let nombre2 = prompt
()
}
}

