import { malla } from  "./data.js"

const completados = new Set();

document.addEventListener("DOMContentLoaded", () => {
  renderCiclos();
});

function renderCiclos() {
  const contenedor = document.getElementById("malla");

  Object.entries(malla).forEach(([ciclo, cursos]) => {
    const columna = document.createElement("div");
    columna.className = "ciclo";

    const titulo = document.createElement("h3");
    titulo.textContent = ciclo;
    columna.appendChild(titulo);

    cursos.forEach(curso => {
      const div = document.createElement("div");
      div.className = "curso";
      div.textContent = curso.nombre;
      div.dataset.nombre = curso.nombre;
      div.onclick = () => toggleCurso(curso.nombre);
      columna.appendChild(div);
    });

    contenedor.appendChild(columna);
  });

  actualizarColores();
}

function toggleCurso(nombre) {
  if (completados.has(nombre)) {
    completados.delete(nombre);
  } else {
    completados.add(nombre);
  }
  actualizarColores();
}

function actualizarColores() {
  document.querySelectorAll(".curso").forEach(div => {
    const nombre = div.dataset.nombre;
    const curso = buscarCurso(nombre);

    if (!curso) return;

    const requisitosCompletos = curso.requisitos.every(r => completados.has(r));

    if (completados.has(nombre)) {
      div.classList.add("completado");
      div.classList.remove("bloqueado");
    } else if (!requisitosCompletos) {
      div.classList.add("bloqueado");
      div.classList.remove("completado");
    } else {
      div.classList.remove("completado", "bloqueado");
    }
  });
}

function buscarCurso(nombre) {
  for (const ciclo in malla) {
    for (const curso of malla[ciclo]) {
      if (curso.nombre === nombre) {
        return curso;
      }
    }
  }
  return null;
}
