// Script para la malla curricular de Derecho con 12 ciclos

document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.querySelector(".grid-container");

  for (let i = 1; i <= 12; i++) {
    const cicloDiv = document.createElement("div");
    cicloDiv.classList.add("ciclo");
    cicloDiv.setAttribute("data-anio", Math.ceil(i / 2));

    const titulo = document.createElement("h2");
    titulo.textContent = `Ciclo ${i}`;
    cicloDiv.appendChild(titulo);

    for (let j = 1; j <= 5; j++) {
      const curso = document.createElement("div");
      curso.classList.add("curso");
      if (i > 1) curso.classList.add("disabled");
      curso.textContent = `Curso ${j}C${i}`;

      curso.onclick = function () {
        if (!curso.classList.contains("disabled") && !curso.classList.contains("completado")) {
          curso.classList.add("completado");
          habilitarSiguiente(i);
          mostrarInfo(`Curso ${j}C${i}`);
        }
      };
      cicloDiv.appendChild(curso);
    }

    contenedor.appendChild(cicloDiv);
  }
});

function habilitarSiguiente(cicloActual) {
  const siguiente = document.querySelectorAll(`.ciclo:nth-of-type(${cicloActual + 1}) .curso.disabled`);
  siguiente.forEach(curso => curso.classList.remove("disabled"));
}

function mostrarInfo(curso) {
  document.getElementById("modal-title").textContent = curso;
  document.getElementById("modal-desc").textContent = `Información sobre ${curso}.`;
  document.getElementById("modal").style.display = "block";
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}

function filtrarPorAnio() {
  const anio = document.getElementById("anio-select").value;
  document.querySelectorAll(".ciclo").forEach(ciclo => {
    if (anio === "todos" || ciclo.getAttribute("data-anio") === anio) {
      ciclo.style.display = "block";
    } else {
      ciclo.style.display = "none";
    }
  });
}
