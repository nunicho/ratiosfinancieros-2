const datosEmpresaBtn = document.getElementById("datos-empresa");
const datosContablesBtn = document.getElementById("datos-contables");
const calcularRatiosBtn = document.getElementById("calcular-ratios");
const mostrarReporteBtn = document.getElementById("mostrar-reporte");
const limpiarDatosBtn = document.getElementById("limpiar-datos");

const instruccionesBtn = document.getElementById("instrucciones-btn");
const modal = document.getElementById("instrucciones-modal");
const spanCerrar = document.querySelector(".close");

datosEmpresaBtn.addEventListener("click", function () {
  window.location.href = "pages/empresa.html";
});

datosContablesBtn.addEventListener("click", function () {
  window.location.href = "pages/balances.html";
});

calcularRatiosBtn.addEventListener("click", function () {
  window.location.href = "pages/ratios.html";
});

mostrarReporteBtn.addEventListener("click", function () {
  window.location.href = "pages/reporte.html";
});

limpiarDatosBtn.addEventListener("click", function () {
  const confirmacion = confirm(
    "¿Estás seguro de que deseas limpiar los datos seleccionados?"
  );
  if (confirmacion) {
    const clavesAEliminar = [
      "form-patrimonio",
      "form-resultados",
      "empresa",
      "reporte-ratios",
    ];
    clavesAEliminar.forEach((clave) => {
      localStorage.removeItem(clave);
    });

    alert("Datos seleccionados han sido limpiados.");
  }
});

//// MODAL DE INSTRUCCIONES 

instruccionesBtn.addEventListener("click", function () {
  modal.style.display = "block";
});

spanCerrar.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
