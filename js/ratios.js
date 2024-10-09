// Obtener los datos del localStorage
const patrimonio = JSON.parse(localStorage.getItem("form-patrimonio") || "{}");
const resultados = JSON.parse(localStorage.getItem("form-resultados") || {});

// Desestructurar los objetos en variables individuales
const {
  "caja-bancos": cajaBancos,
  "inversiones-transitorias": inversionesTransitorias,
  "bienes-cambio": bienesCambio,
  "activo-no-corriente": activoNoCorriente,
  "pasivo-corriente": pasivoCorriente,
  "pasivo-no-corriente": pasivoNoCorriente,
  "patrimonio-neto": patrimonioNeto,
} = patrimonio;

const {
  ventas,
  "gastos-operativos": gastosOperativos,
  "gastos-comercializacion": gastosComercializacion,
  "gastos-administracion": gastosAdministracion,
  "gastos-financiacion": gastosFinanciacion,
  impuesto,
  "utilidad-bruta": utilidadBruta,
  "utilidad-antes-impuesto": utilidadAntesImpuesto,
  "utilidad-neta": utilidadNeta,
} = resultados;

// Función para verificar si los valores son números válidos
const esNumeroValido = (...valores) =>
  valores.every((valor) => !isNaN(valor) && valor > 0);

// Función auxiliar para calcular y formatear ratios
const calcularRatio = (numerador, denominador) => {
  if (!esNumeroValido(numerador, denominador)) return null;
  return (numerador / denominador).toFixed(2);
};

///////////////////////     FUNCIONES  //////////////////////////////

const activoCorriente = cajaBancos + inversionesTransitorias + bienesCambio;
const activoTotal =
  activoNoCorriente + cajaBancos + inversionesTransitorias + bienesCambio;

function calcularLiquidezCorriente() {
  return calcularRatio(activoCorriente, pasivoCorriente);
}

function calcularLiquidezAcida() {
  const existencias = bienesCambio;
  return existencias > activoCorriente
    ? null
    : calcularRatio(activoCorriente - existencias, pasivoCorriente);
}

function calcularDisponibilidadTesoreria() {
  return calcularRatio(cajaBancos + inversionesTransitorias, pasivoCorriente);
}

function calcularDiasTesoreria() {
  const totalTesoreria = cajaBancos + inversionesTransitorias;
  const gastosDiarios = gastosOperativos / 365;
  return calcularRatio(totalTesoreria, gastosDiarios);
}

function calcularSolvencia() {
  const pasivoExigibleTotal = pasivoCorriente + pasivoNoCorriente;
  return calcularRatio(activoTotal, pasivoExigibleTotal);
}

function calcularEndeudamiento() {
  const pasivoExigibleTotal = pasivoCorriente + pasivoNoCorriente;
  return calcularRatio(pasivoExigibleTotal, patrimonioNeto);
}

function calcularROA() {
  return calcularRatio(utilidadBruta, activoTotal) * 100;
}

function calcularROE() {
  return calcularRatio(utilidadNeta, patrimonioNeto) * 100;
}

function calcularROCE() {
  const capitalInvertido = patrimonioNeto;
  return calcularRatio(utilidadNeta, capitalInvertido) * 100;
}


///////////////////////     MOSTRAR LOS RATIOS EN LA TABLA  //////////////////////////////

// Insertar los valores calculados en las celdas correspondientes
document.getElementById("liquidez-corriente").textContent = calcularLiquidezCorriente();
document.getElementById("liquidez-acida").textContent = calcularLiquidezAcida();
document.getElementById("disponibilidad-tesoreria").textContent = calcularDisponibilidadTesoreria();
document.getElementById("dias-tesoreria").textContent = calcularDiasTesoreria();
document.getElementById("solvencia").textContent = calcularSolvencia();
document.getElementById("endeudamiento").textContent = calcularEndeudamiento();
document.getElementById("roa").textContent = calcularROA() + " %";
document.getElementById("roe").textContent = calcularROE() + " %";
document.getElementById("roce").textContent = calcularROCE() + " %";