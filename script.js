function calcular() {
  const filas = document.querySelectorAll("#tablaProductos tbody tr");
  filas.forEach(fila => {
    const anterior = parseInt(fila.querySelector(".anterior").value) || 0;
    const actual = parseInt(fila.querySelector(".actual").value) || 0;
    const ventas = parseInt(fila.querySelector(".ventas").value) || 0;
    const precio = parseFloat(fila.dataset.precio);

    const total = anterior + actual;
    const restante = total - ventas;
    const ingreso = ventas * precio;

    fila.querySelector(".total").textContent = total;
    fila.querySelector(".restante").textContent = restante;
    fila.querySelector(".ingreso").textContent = "Q" + ingreso.toFixed(2);
  });
}

function guardar() {
  alert("Datos guardados correctamente.");
}

function editar() {
  alert("Modo edición activado.");
}

function descargarExcel() {
  alert("Función de descarga Excel aún no implementada.");
}

function descargarPDF() {
  alert("Función de descarga PDF aún no implementada.");
}
document.addEventListener("DOMContentLoaded", () => {
  const fecha = new Date();
  const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById("fechaActual").textContent = fecha.toLocaleDateString('es-ES', opciones);
});
