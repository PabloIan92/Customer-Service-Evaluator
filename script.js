const form = document.getElementById("evaluacionForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const nombreEmpleado = document.getElementById("nombreEmpleado").value;
  const cliente = document.getElementById("cliente").value;
  const telefono = document.getElementById("telefono").value;
  const fecha = document.getElementById("fecha").value;
  const checkboxes = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );
  let totalPuntos = 0;
  checkboxes.forEach(function (checkbox) {
    totalPuntos += parseInt(checkbox.value);
  });
  let resultadoFinal;
  if (totalPuntos >= 8) {
    resultadoFinal = "Aprobado";
  } else {
    resultadoFinal = "Desaprobado";
  }

  // Mostrar el informe final
  document.getElementById("nombreEmpleadoInforme").textContent =
    "Nombre del Empleado: " + nombreEmpleado;
  document.getElementById("clienteInforme").textContent = "Cliente: " + cliente;
  document.getElementById("telefonoInforme").textContent =
    "Teléfono: " + telefono;
  document.getElementById("fechaInforme").textContent = "Fecha: " + fecha;
  document.getElementById("puntajeFinal").textContent =
    "Puntaje Total: " + totalPuntos + " puntos";
  document.getElementById("resultadoFinal").textContent =
    "Resultado de la Evaluación: " + resultadoFinal;
  document.getElementById("resultadoEvaluacion").style.display = "block";
});
