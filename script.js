const malla = {
  "Ciclo 1": [
    { nombre: "Quimica", requisitos: [] },
    { nombre: "Matematica", requisitos: [] },
    { nombre: "Lengua y Oratoria", requisitos: [] },
    { nombre: "Introduccion a la Medicina", requisitos: [] },
    { nombre: "Desempeno Universitario", requisitos: [] },
    { nombre: "Biologia Celular y Molecular", requisitos: [] }
  ],
  "Ciclo 2": [
    { nombre: "Redaccion General", requisitos: ["Lengua y Oratoria"] },
    { nombre: "Realidad Nacional", requisitos: ["Lengua y Oratoria", "Desempeno Universitario"] },
    { nombre: "Morfofisiologia I", requisitos: ["Biologia Celular y Molecular"] },
    { nombre: "Intro. a la Investigacion", requisitos: [] },
    { nombre: "Bioquimica", requisitos: ["Quimica"] },
    { nombre: "Anatomia General", requisitos: ["Biologia Celular y Molecular"] }
  ],
  "Ciclo 3": [
    { nombre: "Morfofisiologia II", requisitos: ["Anatomia General", "Morfofisiologia I"] },
    { nombre: "Inmunología", requisitos: ["Morfofisiologia I"] },
    { nombre: "Genetica Medica", requisitos: ["Biologia Celular y Molecular"] },
    { nombre: "Filosofia", requisitos: [] },
    { nombre: "Estadistica General", requisitos: ["Matematica"] },
    { nombre: "Educacion Ambiental", requisitos: [] }
  ],
  "Ciclo 4": [
    { nombre: "Morfofisiologia III", requisitos: ["Anatomia General", "Morfofisiologia I"] },
    { nombre: "Infectologia básica", requisitos: ["Bioquimica", "Morfofisiologia I"] },
    { nombre: "Fisiopatologia I", requisitos: ["Morfofisiologia II"] },
    { nombre: "Desarrollo y Crecimiento", requisitos: ["Biologia Celular y Molecular"] },
    { nombre: "Bioetica", requisitos: ["Introduccion a la Medicina", "Redaccion General"] }
  ],
  "Ciclo 5": [
    { nombre: "Salud mental", requisitos: ["Filosofia"] },
    { nombre: "Morfofisiologia IV", requisitos: ["Morfofisiologia III"] },
    { nombre: "Fundamentos de Medicina Interc", requisitos: ["Filosofia", "Realidad Nacional"] },
    { nombre: "Fisiopatologia II", requisitos: ["Morfofisiologia II"] },
    { nombre: "Bioestadistica", requisitos: ["Estadistica General"] }
  ],
  "Ciclo 6": [
    { nombre: "Semiologia basada en la simulación", requisitos: ["Fisiopatologia I", "Fisiopatologia II", "Inmunología", "Morfofisiologia II", "Morfofisiologia III", "Morfofisiologia IV"] },
    { nombre: "Semiologia", requisitos: ["Fisiopatologia I", "Fisiopatologia II", "Inmunología", "Morfofisiologia II", "Morfofisiologia III", "Morfofisiologia IV"] },
    { nombre: "Farmacologia", requisitos: ["Infectologia básica"] },
    { nombre: "Apoyo al Diagnostico", requisitos: ["Morfofisiologia IV"] },
    { nombre: "Anatomia Patologica", requisitos: ["Fisiopatologia II"] }
  ]
};

const completados = new Set();

document.addEventListener("DOMContentLoaded", () => {
  renderCiclos();
  crearMalla(window.malla);
});

function renderCiclos() {
  const ciclos = Object.values(window.malla);
  if (!ciclos) return;
}

function crearMalla(malla) {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = ""; // Limpia antes de renderizar

  for (const ciclo in malla) {
    const columna = document.createElement("div");
    columna.className = "ciclo";

    const titulo = document.createElement("h3");
    titulo.textContent = ciclo;
    columna.appendChild(titulo);

    malla[ciclo].forEach(curso => {
      const div = document.createElement("div");
      div.className = "curso";
      div.textContent = curso.nombre;
      div.onclick = () => toggleCurso(curso.nombre);
      columna.appendChild(div);
    });

    contenedor.appendChild(columna);
  }
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
    const nombre = div.textContent;
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
  for (const ciclo in window.malla) {
    for (const curso of window.malla[ciclo]) {
      if (curso.nombre === nombre) {
        return curso;
      }
    }
  }
  return null;
}

window.onload = () => {
  crearMalla(malla);
  actualizarColores();
};
