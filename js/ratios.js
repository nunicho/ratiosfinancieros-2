//// --------------------------- VARIABLES GLOBALES -----------------------------------

let reporte = [];
let nombreEmpresa = "";

//// --------------------------- FUNCION PRINCIPAL -----------------------------------

function mostrarRatios() {
  let eleccion = prompt(
    "Elige el tipo de ratio que quieres calcular:\n1. Ratios de Liquidez Corriente\n2. Ratios de Solvencia y Endeudamiento\n3. Ratios de Rentabilidad\n4. Reporte\n5. Salir"
  );

  switch (eleccion) {
    case "1":
      let liquidez = prompt(
        "Has seleccionado Ratios de Liquidez.\nElige una opción:\n1. Ratio de Liquidez Corriente\n2. Ratio de Liquidez Ácida\n3. Ratio Disponibilidad de Tesorería\n4. Ratio Días de Tesorería\n5. Glosario\n6. Volver al menú principal"
      );
      switch (liquidez) {
        case "1":
          alert("Has seleccionado Ratio de Liquidez Corriente.");
          calcularLiquidezCorriente();
          break;
        case "2":
          alert("Has seleccionado Ratio de Liquidez Ácida.");
          calcularLiquidezAcida();
          break;
        case "3":
          alert("Has seleccionado Ratio disponibilidad de Tesorería.");
          calcularDisponibilidadTesoreria();
          break;
        case "4":
          alert("Has seleccionado Ratio días de Tesorería.");
          calcularDiasTesoreria();
          break;
        case "5":
          mostrarGlosario("liquidez");
          break;
        case "6":
          mostrarRatios();
          break;
        default:
          alert("Opción no válida para Ratios de Liquidez.");
          mostrarRatios();
      }
      mostrarRatios();
      break;

    case "2":
      let solvencia = prompt(
        "Has seleccionado Ratios de Solvencia y Endeudamiento.\nElige una opción:\n1. Ratio de Solvencia\n2. Ratio de Endeudamiento\n3. Glosario\n4. Volver al menú principal"
      );
      switch (solvencia) {
        case "1":
          alert("Has seleccionado Ratio de Solvencia.");
          calcularSolvencia();
          break;
        case "2":
          alert("Has seleccionado Ratio de Endeudamiento.");
          calcularEndeudamiento();
          break;
        case "3":
          mostrarGlosario("solvencia");
          break;
        case "4":
          mostrarRatios();
          break;
        default:
          alert("Opción no válida para Ratios de Solvencia y Endeudamiento.");
          mostrarRatios();
      }
      mostrarRatios();
      break;

    case "3":
      let rentabilidad = prompt(
        "Has seleccionado Ratios de Rentabilidad.\nElige una opción:\n1. Ratio de Rentabilidad Económica de Activos - ROA\n2. Ratio de Rentabilidad Financiera de los Recursos Propios - ROE.\n3. Ratio de Rentabilidad Sobre el Capital Invertido - ROCE.\n4. Glosario\n5. Volver al menú principal"
      );
      switch (rentabilidad) {
        case "1":
          alert(
            "Has seleccionado Ratio de Rentabilidad Económica de Activos - ROA"
          );
          calcularROA();
          break;
        case "2":
          alert(
            "Has seleccionado Ratio de Rentabilidad Financiera de los Recursos Propios - ROE."
          );
          calcularROE();
          break;
        case "3":
          alert(
            "Has seleccionado Ratio de Rentabilidad Sobre el Capital Invertido - ROCE."
          );
          calcularROCE();
          break;
        case "4":
          mostrarGlosario("rentabilidad");
          break;
        case "5":
          mostrarRatios();
          break;
        default:
          alert("Opción no válida para Ratios de Rentabilidad.");
          mostrarRatios();
      }
      mostrarRatios();
      break;

    case "4":
      let opcionReporte = prompt(
        "Opciones de Reporte:\n1. Generar Reporte\n2. Definir Nombre de Empresa\n3. Limpiar registros\n4. Volver al menú principal"
      );
      switch (opcionReporte) {
        case "1":
          generarReporte();
          break;
        case "2":
          definirNombreEmpresa();
          break;
        case "3":
          limpiarRegistros();
          break;
        case "4":
          mostrarRatios();
          break;
        default:
          alert("Opción no válida para Reporte.");
          mostrarRatios();
      }
      mostrarRatios();
      break;
    case "5":
      alert("Saliendo...");
      return;
    default:
      alert("Opción no válida. Por favor, elige una opción entre 1 y 5.");
      mostrarRatios();
  }
}

//// --------------------------- FUNCIONES SECUNDARIAS -----------------------------------

function guardarDatos(resultado) {
  let opcionGuardar;
  while (true) {
    opcionGuardar = prompt("¿Deseas guardar el resultado?\n1. Sí\n2. No");
    switch (opcionGuardar) {
      case "1":
        reporte.push(resultado);
        alert("Resultado guardado.");
        return;
      case "2":
        alert("Resultado no guardado.");
        return;
      default:
        alert(
          "Opción no válida. Por favor, elige 1 para guardar o 2 para no guardar."
        );
    }
  }
}

function generarReporte() {
  if (reporte.length === 0) {
    alert("No hay registros en el reporte.");
  } else {
    alert(
      `Reporte de la empresa: ${nombreEmpresa || "No definido"}\n` +
        reporte.join("\n")
    );
  }
}

function definirNombreEmpresa() {
  nombreEmpresa = prompt("Por favor, ingresa el nombre de la empresa:");
  alert(`Nombre de la empresa guardado: ${nombreEmpresa}`);
}

function limpiarRegistros() {
  nombreEmpresa = "";
  reporte = [];
  alert("Se han limpiado los registros del reporte.");
}

function mostrarGlosario(tipo) {
  switch (tipo) {
    case "liquidez":
      alert(
        "Glosario de Liquidez: Los ratios de liquidez miden la capacidad de una empresa para cumplir con sus obligaciones a corto plazo."
      );
      break;
    case "solvencia":
      alert(
        "Glosario de Solvencia y Endeudamiento: Miden la capacidad de una empresa para cumplir con sus obligaciones a largo plazo."
      );
      break;
    case "rentabilidad":
      alert(
        "Glosario de Rentabilidad: Miden la capacidad de una empresa para generar beneficios en relación con sus activos, recursos propios o capital invertido."
      );
      break;
    default:
      alert("Tipo de glosario no válido.");
  }
}

//// --------------------------- FUNCIONES CÁLCULO DE RATIOS -----------------------------------

function calcularLiquidezCorriente() {
  let activoCorriente = parseFloat(prompt("Introduce el Activo Corriente:"));
  let pasivoCorriente = parseFloat(prompt("Introduce el Pasivo Corriente:"));

  if (
    isNaN(activoCorriente) ||
    isNaN(pasivoCorriente) ||
    pasivoCorriente <= 0
  ) {
    alert(
      "Entrada no válida. Asegúrate de ingresar números y que el Pasivo Corriente sea mayor a cero."
    );
  } else {
    let ratioLiquidezCorriente = activoCorriente / pasivoCorriente;
    let ratioLiquidezCorrienteConDecimales = ratioLiquidezCorriente.toFixed(2);
    alert("El Ratio de Liquidez es: " + ratioLiquidezCorrienteConDecimales);
    guardarDatos(` - Ratio de liquidez: ${ratioLiquidezCorrienteConDecimales}`);
  }
}

function calcularLiquidezAcida() {
  let activoCorriente = parseFloat(prompt("Introduce el Activo Corriente:"));
  let existencias = parseFloat(prompt("Introduce las Existencias:"));
  let pasivoCorriente = parseFloat(prompt("Introduce el Pasivo Corriente:"));

  if (
    isNaN(activoCorriente) ||
    isNaN(existencias) ||
    isNaN(pasivoCorriente) ||
    pasivoCorriente === 0 ||
    existencias > activoCorriente
  ) {
    alert(
      "Entrada no válida. Asegúrate de ingresar números válidos y que el Pasivo Corriente no sea cero y las Existencias no sean mayores al Activo Corriente."
    );
  } else {
    let ratioLiquidezAcida = (activoCorriente - existencias) / pasivoCorriente;
    let ratioLiquidezAcidaConDecimales = ratioLiquidezAcida.toFixed(2);
    alert("El Ratio de Liquidez Ácida es: " + ratioLiquidezAcidaConDecimales);
    guardarDatos(
      ` - Ratio de liquidez Ácida: ${ratioLiquidezAcidaConDecimales}`
    );
  }
}

function calcularDisponibilidadTesoreria() {
  let inversionesFinancieras = parseFloat(
    prompt("Introduce las Inversiones Financieras a Corto Plazo:")
  );
  let tesoreria = parseFloat(prompt("Introduce la Tesorería:"));
  let pasivoCorriente = parseFloat(prompt("Introduce el Pasivo Corriente:"));

  if (
    isNaN(inversionesFinancieras) ||
    isNaN(tesoreria) ||
    isNaN(pasivoCorriente) ||
    pasivoCorriente === 0
  ) {
    alert(
      "Entrada no válida. Asegúrate de ingresar números válidos y que el Pasivo Corriente no sea cero."
    );
  } else {
    let ratioTesoreria = (inversionesFinancieras + tesoreria) / pasivoCorriente;
    let ratioTesoreriaConDecimales = ratioTesoreria.toFixed(2);
    alert(
      "El Ratio de Disponibilidad de Tesorería es: " +
        ratioTesoreriaConDecimales
    );
    guardarDatos(
      ` - Ratio disponibilidad de Tesorería: ${ratioTesoreriaConDecimales}`
    );
  }
}

function calcularDiasTesoreria() {
  let inversionesFinancieras = parseFloat(
    prompt("Introduce las Inversiones Financieras a Corto Plazo:")
  );
  let tesoreria = parseFloat(prompt("Introduce la Tesorería:"));
  let gastosOperativos = parseFloat(prompt("Introduce los gastos operativos:"));

  if (
    isNaN(inversionesFinancieras) ||
    isNaN(tesoreria) ||
    isNaN(gastosOperativos) ||
    gastosOperativos <= 0
  ) {
    alert(
      "Entrada no válida. Asegúrate de ingresar números válidos y que los Gastos operativossean mayores a cero."
    );
  } else {
    let diasTesoreria =
      (inversionesFinancieras + tesoreria) / (gastosOperativos / 365);
    let diasTesoreriaConDecimales = diasTesoreria.toFixed(2);
    alert("El Ratio de Días de Tesorería es: " + diasTesoreriaConDecimales);
    guardarDatos(` - Ratio días de Tesorería: ${diasTesoreriaConDecimales}`);
  }
}

function calcularSolvencia() {
  let activoTotal = parseFloat(prompt("Introduce el Activo Total:"));
  let pasivoExigibleTotal = parseFloat(
    prompt("Introduce el Pasivo Exigible Total:")
  );

  if (
    isNaN(activoTotal) ||
    isNaN(pasivoExigibleTotal) ||
    pasivoExigibleTotal === 0
  ) {
    alert(
      "Entrada no válida. Asegúrate de ingresar números válidos y que el Pasivo Exigible Total no sea cero."
    );
  } else {
    let ratioSolvencia = activoTotal / pasivoExigibleTotal;
    let ratioSolvenciaConDecimales = ratioSolvencia.toFixed(2);
    alert("El Ratio de Solvencia es: " + ratioSolvenciaConDecimales);
    guardarDatos(` - Ratio Solvencia ${ratioSolvenciaConDecimales}`);
  }
}

function calcularEndeudamiento() {
  let pasivoExigibleTotal = parseFloat(
    prompt("Introduce el Pasivo Exigible Total:")
  );
  let recursosPropios = parseFloat(prompt("Introduce los Recursos Propios:"));

  if (
    isNaN(pasivoExigibleTotal) ||
    isNaN(recursosPropios) ||
    recursosPropios === 0
  ) {
    alert(
      "Entrada no válida. Asegúrate de ingresar números válidos y que los Recursos Propios no sean cero."
    );
  } else {
    let ratioEndeudamiento = pasivoExigibleTotal / recursosPropios;
    let ratioEndeudamientoConDecimales = ratioEndeudamiento.toFixed(2);
    alert("El Ratio de Endeudamiento es: " + ratioEndeudamientoConDecimales);
    guardarDatos(
      ` - Ratio de endeudamiento: ${ratioEndeudamientoConDecimales}`
    );
  }
}

function calcularROA() {
  let beneficiosExplotacion = parseFloat(
    prompt("Introduce los Beneficios Antes de Intereses e Impuestos:")
  );
  let activoTotal = parseFloat(prompt("Introduce el Activo Total:"));
  if (isNaN(beneficiosExplotacion) || isNaN(activoTotal) || activoTotal === 0) {
    alert(
      "Entrada no válida. Asegúrate de ingresar números válidos y que el Activo Total no sea cero."
    );
  } else {
 let ratioRoa = (beneficiosExplotacion / activoTotal) * 100;
 let ratioRoaConDecimales = ratioRoa.toFixed(2);
 alert(
   "El Ratio de Rentabilidad Económica de Activos (ROA) es: " +
     ratioRoaConDecimales +
     "%"
 );
 guardarDatos(` - Ratio ROA: ${ratioRoaConDecimales}%`);
  }
}

function calcularROE() {
  let beneficioNeto = parseFloat(
    prompt("Introduce el Beneficio Neto (después de intereses e impuestos):")
  );
  let recursosPropios = parseFloat(prompt("Introduce los Recursos Propios:"));

  if (isNaN(beneficioNeto) || isNaN(recursosPropios) || recursosPropios === 0) {
    alert(
      "Entrada no válida. Asegúrate de ingresar números válidos y que los Recursos Propios no sean cero."
    );
  } else {
    let ratioRoe = (beneficioNeto / recursosPropios) * 100;
    let ratioRoeConDecimales = ratioRoe.toFixed(2);
    alert(
      "El Ratio de Rentabilidad Financiera de los Recursos Propios (ROE) es: " +
        ratioRoeConDecimales +
        "%"
    );
    guardarDatos(` - Ratio ROE: ${ratioRoeConDecimales}%`);
  }
}

function calcularROCE() {
  let beneficioExplotacion = parseFloat(
    prompt("Introduce el Beneficio de la Explotación Neto de Impuestos:")
  );
  let capitalInvertido = parseFloat(prompt("Introduce el Capital Invertido:"));

  if (
    isNaN(beneficioExplotacion) ||
    isNaN(capitalInvertido) ||
    capitalInvertido === 0
  ) {
    alert(
      "Entrada no válida. Asegúrate de ingresar números válidos y que el Capital Invertido no sea cero."
    );
  } else {
    let ratioRoce = (beneficioExplotacion / capitalInvertido) * 100;
    let ratioRoceConDecimales = ratioRoce.toFixed(2);
    alert(
      "El Ratio de Rentabilidad Sobre el Capital Invertido (ROCE) es: " +
        ratioRoceConDecimales +
        "%"
    );
    guardarDatos(` - Ratio ROCE: ${ratioRoceConDecimales}%`);
  }
}
