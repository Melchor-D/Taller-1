let habitaciones = [];

function mostrarMenu() {
   let opc = prompt(
      '*****REGISTRO DE HOTEL OASIS*****\n' + '1. Registrar Habitacion\n' + '2. Listar Habitaciones\n' + '3. Buscar Habitacion por numero\n' + '4. Cambiar estado de Habitacion\n' + '5. Eliminar Habitacion\n' +  '6. Salir'
   );

   switch (opc) {
      case "1":
         registrarHabitacion(mostrarMenu);
         break;
      case "2":
         listarHabitaciones(mostrarMenu);
         break;
      case "3":
         buscarHabitacion(mostrarMenu);
         break;
      case "4":
         cambiarEstado(mostrarMenu);
         break;
      case "5":
         eliminarHabitacion(mostrarMenu);
         break;
      case "6":
         console.log("Salir");
         break;
      default:
         console.log("Ingrese un valor valido");
         mostrarMenu();
   }
}

mostrarMenu();

function registrarHabitacion(callback) {
   let numero = prompt("Numero de habitacion:");

   let tipo = prompt("Tipo:\n1. Sencilla\n2. Doble\n3. Suite");
   switch (tipo) {
      case "1": 
         tipo = "Sencilla"; 
         break;
      case "2": 
         tipo = "Doble";
         break;
      case "3":
         tipo = "Suite"; 
         break;
   }

   let precioNoche = prompt("Precio por noche:");

   let estado = prompt("Estado:\n1. Libre\n2. Ocupada\n3. Limpieza");
   switch (estado) {
      case "1": 
         estado = "Libre"; 
         break;
      case "2": 
         estado = "Ocupada"; 
         break;
      case "3": 
         estado = "Limpieza"; 
         break;
   }

   let huesped = (estado === "Ocupada") ? prompt("Nombre del huesped:") : "";

   console.log("Validando informacion...");

   let habitacion = { numero, tipo, precioNoche, estado, huesped };

   setTimeout(function () {
      habitaciones.push(habitacion);
      console.log("Habitacion registrada correctamente");
      callback();
   }, 2000);
}

function listarHabitaciones(callback) {
   console.log("----- LISTADO DE HABITACIONES -----");

   if (habitaciones.length === 0) {
      console.log("No existen registros");
   } else {
      habitaciones.forEach(h => {
         console.log(h.numero, h.tipo, h.precioNoche, h.estado, h.huesped);
      });
   }

   callback();
}

function buscarHabitacion(callback) {
   let numero = prompt("Numero de habitacion a buscar:");
   console.log("Consultando base de datos...");

   setTimeout(function () {
      let encontrada = habitaciones.find(h => h.numero == numero);

      if (encontrada) {
         console.log(encontrada.numero, encontrada.tipo, encontrada.precioNoche, encontrada.estado, encontrada.huesped);
      } else {
         console.log("Habitacion no encontrada");
      }

      callback();
   }, 2000);
}

function cambiarEstado(callback) {
   let numero = prompt("Numero de habitacion:");
   console.log("Esperando al personal del hotel...");

   setTimeout(function () {
      let habitacion = habitaciones.find(h => h.numero == numero);

      if (habitacion) {
         let nuevoEstado = prompt("Nuevo estado:\n1. Libre\n2. Ocupada\n3. Limpieza");

         switch (nuevoEstado) {
            case "1":
               habitacion.estado = "Libre";
               habitacion.huesped = "";
               break;
            case "2":
               habitacion.estado = "Ocupada";
               habitacion.huesped = prompt("Nombre del huesped:");
               break;
            case "3":
               habitacion.estado = "Limpieza";
               habitacion.huesped = "";
               break;
         }

         console.log("Estado actualizado");
      } else {
         console.log("Habitacion no encontrada");
      }

      callback();
   }, 3000);
}

function eliminarHabitacion(callback) {
   let numero = prompt("Numero de habitacion a eliminar:");

   let index = habitaciones.findIndex(h => h.numero == numero);

   if (index !== -1) {
      habitaciones.splice(index, 1);
      console.log("Habitacion eliminada");
   } else {
      console.log("Habitacion no encontrada");
   }

   callback();
}





function generarReporte() {

  const inicio = document.getElementById("fechaInicio").value;
  const fin    = document.getElementById("fechaFin").value;

  if (!inicio || !fin) {
    alert("Ingresá ambas fechas para generar el reporte.");
    return;
  }

  const fechaInicio = new Date(inicio + " 00:00:00");
  const fechaFin    = new Date(fin    + " 23:59:59");

  const historial = DB.get("historial");

  const filtrados = historial.filter(p => {
    const fechaSalida = new Date(p.salida);
    return fechaSalida >= fechaInicio && fechaSalida <= fechaFin;
  });

  const totalVehiculos = filtrados.length;
  const totalRecaudado = filtrados.reduce((s, p) => s + p.totalPagado, 0);

  let filas = filtrados.length
    ? filtrados.map(p => `
      <tr>
        <td><span class="placa-badge">${p.placa}</span></td>
        <td>${tipoBadge(p.tipo)}</td>
        <td>${p.horas}h</td>
        <td>Q${p.totalPagado.toFixed(2)}</td>
      </tr>
    `).join("")
    : `<tr><td colspan="4" class="empty-td">No hay datos en este rango.</td></tr>`;

  document.getElementById("reporteResultados").innerHTML = `
    
    <div class="stats-row">
      <div class="stat-card purple">
        <p class="stat-label">Vehículos atendidos</p>
        <p class="stat-value">${totalVehiculos}</p>
      </div>

      <div class="stat-card green">
        <p class="stat-label">Total recaudado</p>
        <p class="stat-value">Q${totalRecaudado.toFixed(2)}</p>
      </div>
    </div>

    <div class="table-section">
      <h3>Detalle del reporte</h3>
      <table>
        <thead>
          <tr>
            <th>Placa</th>
            <th>Tipo</th>
            <th>Horas</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>${filas}</tbody>
      </table>
    </div>
  `;
}