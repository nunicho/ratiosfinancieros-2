function agregarAlReporte(nombre, valor) {
  const reporte = JSON.parse(localStorage.getItem("reporte-ratios")) || [];

  if (!reporte.some((r) => r.nombre === nombre)) {
    reporte.push({ nombre, valor });
    localStorage.setItem("reporte-ratios", JSON.stringify(reporte));
    alert(`${nombre} agregado al reporte.`);
  } else {
    alert(`${nombre} ya está en el reporte.`);
  }

  // Actualizar los botones después de agregar
  actualizarBotones();
}

function eliminarDelReporte(nombre) {
  let reporte = JSON.parse(localStorage.getItem("reporte-ratios")) || [];
  reporte = reporte.filter((r) => r.nombre !== nombre);
  localStorage.setItem("reporte-ratios", JSON.stringify(reporte));
  alert(`${nombre} eliminado del reporte.`);

  // Actualizar los botones después de eliminar
  actualizarBotones();
}

function actualizarBotones() {
  const reporte = JSON.parse(localStorage.getItem("reporte-ratios")) || [];
  const ratios = [
    "Liquidez Corriente",
    "Liquidez Ácida",
    "Disponibilidad de Tesorería",
    "Días de Tesorería",
    "Solvencia",
    "Endeudamiento",
    "ROA",
    "ROE",
    "ROCE",
  ];

  ratios.forEach((ratio) => {
    const row = Array.from(
      document.querySelectorAll("#tabla-ratios tbody tr")
    ).find((r) => r.cells[0].textContent === ratio);
    if (!row) return; // Verifica que la fila exista

    const valorCell = row.cells[1]; // Celda de valor
    const valorRatio = valorCell.textContent; // Obtener el valor

    // Eliminar cualquier botón previo
    const botonesPrevios = row.querySelector(".accion-btns");
    if (botonesPrevios) {
      botonesPrevios.remove();
    }

    // Crear un nuevo contenedor para los botones
    const accionBtns = document.createElement("div");
    accionBtns.className = "accion-btns";

    const agregarBtn = document.createElement("button");
    agregarBtn.textContent = "Agregar";
    agregarBtn.className = "agregar-btn";
    agregarBtn.setAttribute("data-nombre", ratio);
    agregarBtn.addEventListener("click", function () {
      agregarAlReporte(ratio, valorRatio);
    });

    const eliminarBtn = document.createElement("button");
    eliminarBtn.textContent = "Quitar";
    eliminarBtn.className = "eliminar-btn";
    eliminarBtn.setAttribute("data-nombre", ratio);
    eliminarBtn.addEventListener("click", function () {
      eliminarDelReporte(ratio);
    });

    // Añadir los botones al contenedor solo si valorRatio no es null
    if (valorRatio !== "null" && valorRatio.trim() !== "") {
      // Solo mostrar el botón AGREGAR si el ratio tiene un valor válido
      accionBtns.appendChild(agregarBtn);
    }

    // Siempre añadir el botón QUITAR
    accionBtns.appendChild(eliminarBtn);

    // Agregar el contenedor a la fila
    row.appendChild(accionBtns);

    // Mostrar/ocultar botones según el reporte
    if (reporte.some((r) => r.nombre === ratio)) {
      agregarBtn.style.display = "none"; // Oculta el botón AGREGAR
      eliminarBtn.style.display = "inline"; // Muestra el botón QUITAR
    } else {
      agregarBtn.style.display = "inline"; // Muestra el botón AGREGAR
      eliminarBtn.style.display = "none"; // Oculta el botón QUITAR
    }
  });
}

function mostrarReporte() {
  const reporte = JSON.parse(localStorage.getItem("reporte-ratios")) || [];
  const contenedor = document.getElementById("reporte-cards");

  // Limpiar el contenedor antes de agregar nuevos elementos
  contenedor.innerHTML = "";

  // Verifica si hay elementos en el reporte
  if (reporte.length === 0) {
    contenedor.innerHTML = "<p>No hay ratios agregados al reporte.</p>";
    return;
  }

  reporte.forEach((ratio) => {
    // Crear una tarjeta para cada ratio
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
            <h3>${ratio.nombre}</h3>
            <p>Valor: ${ratio.valor}</p>
        `;
    contenedor.appendChild(card);
  });
}

// Llamar a la función para actualizar los botones al cargar la página
window.onload = function () {
  actualizarBotones();
  mostrarReporte();
};


