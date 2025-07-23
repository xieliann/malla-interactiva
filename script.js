let cursos = {};
let completados = new Set();

document.addEventListener("DOMContentLoaded", () => {
  cursos = window.malla;
  renderCiclos();
});

function renderCiclos() {
  const container = document.getElementById('ciclos-container');
  container.innerHTML = '';

  const ciclos = [...new Set(Object.values(cursos).map(c => c.ciclo))].sort((a, b) => a - b);

  ciclos.forEach(ciclo => {
    const cicloDiv = document.createElement('div');
    cicloDiv.classList.add('ciclo');
    cicloDiv.innerHTML = `<h2>Ciclo ${ciclo}</h2>`;

    Object.entries(cursos).forEach(([nombre, info]) => {
      if (info.ciclo === ciclo) {
        const cursoDiv = document.createElement('div');
        cursoDiv.classList.add('curso');
        cursoDiv.textContent = nombre;
        cursoDiv.dataset.nombre = nombre;

        if (completados.has(nombre)) {
          cursoDiv.classList.add('completado');
        } else if (info.prerequisitos.every(pr => completados.has(pr))) {
          cursoDiv.classList.add('habilitado');
        }

        cursoDiv.addEventListener('click', () => toggleCurso(nombre));
        cicloDiv.appendChild(cursoDiv);
      }
    });

    container.appendChild(cicloDiv);
  });
}

function toggleCurso(nombre) {
  if (completados.has(nombre)) {
    completados.delete(nombre);
  } else {
    completados.add(nombre);
  }
  renderCiclos();
}
