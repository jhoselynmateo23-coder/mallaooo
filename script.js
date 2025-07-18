
function mostrarInfo(nombre) {
  document.getElementById('modal-title').innerText = nombre;
  document.getElementById('modal-desc').innerText = "Aquí irá la información detallada del curso '" + nombre + "'. Puedes editar esto en el código.";
  document.getElementById('modal').style.display = "block";
}

function cerrarModal() {
  document.getElementById('modal').style.display = "none";
}
