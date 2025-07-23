export const malla = {
    numero: 1,
    cursos: [
      { nombre: "Quimica", prerequisitos: [] },
      { nombre: "Matematica", prerequisitos: [] },
      { nombre: "Lengua y Oratoria", prerequisitos: [] },
      { nombre: "Introduccion a la Medicina", prerequisitos: [] },
      { nombre: "Desempeno Universitario", prerequisitos: [] },
      { nombre: "Biologia Celular y Molecular", prerequisitos: [] }
    ]
  },
  {
    numero: 2,
    cursos: [
      { nombre: "Redaccion General", prerequisitos: ["Lengua y Oratoria"] },
      { nombre: "Realidad Nacional", prerequisitos: ["Lengua y Oratoria", "Desempeno Universitario"] },
      { nombre: "Morfofisiologia I", prerequisitos: ["Biologia Celular y Molecular"] },
      { nombre: "Intro. a la Investigacion", prerequisitos: [] },
      { nombre: "Bioquimica", prerequisitos: ["Quimica"] },
      { nombre: "Anatomia General", prerequisitos: ["Biologia Celular y Molecular"] }
    ]
  },
  {
    numero: 3,
    cursos: [
      { nombre: "Morfofisiologia II", prerequisitos: ["Anatomia General", "Morfofisiologia I"] },
      { nombre: "Inmunología", prerequisitos: ["Morfofisiologia I"] },
      { nombre: "Genetica Medica", prerequisitos: ["Biologia Celular y Molecular"] },
      { nombre: "Filosofia", prerequisitos: [] },
      { nombre: "Estadistica General", prerequisitos: ["Matematica"] },
      { nombre: "Educacion Ambiental", prerequisitos: [] }
    ]
  },
  {
    numero: 4,
    cursos: [
      { nombre: "Morfofisiologia III", prerequisitos: ["Anatomia General", "Morfofisiologia I"] },
      { nombre: "Infectologia básica", prerequisitos: ["Bioquimica", "Morfofisiologia I"] },
      { nombre: "Fisiopatologia I", prerequisitos: ["Morfofisiologia II"] },
      { nombre: "Desarrollo y Crecimiento", prerequisitos: ["Biologia Celular y Molecular"] },
      { nombre: "Bioetica", prerequisitos: ["Introduccion a la Medicina", "Redaccion General"] }
    ]
  },
  {
    numero: 5,
    cursos: [
      { nombre: "Salud mental", prerequisitos: ["Filosofia"] },
      { nombre: "Morfofisiologia IV", prerequisitos: ["Morfofisiologia III"] },
      { nombre: "Fundamentos de Medicina Intercultural", prerequisitos: ["Filosofia", "Realidad Nacional"] },
      { nombre: "Fisiopatologia II", prerequisitos: ["Morfofisiologia II"] },
      { nombre: "Bioestadistica", prerequisitos: ["Estadistica General"] }
    ]
  },
  {
    numero: 6,
    cursos: [
      {
        nombre: "Semiologia basada en la simulación",
        prerequisitos: [
          "Fisiopatologia I",
          "Fisiopatologia II",
          "Inmunología",
          "Morfofisiologia II",
          "Morfofisiologia III",
          "Morfofisiologia IV"
        ]
      },
      {
        nombre: "Semiologia",
        prerequisitos: [
          "Fisiopatologia I",
          "Fisiopatologia II",
          "Inmunología",
          "Morfofisiologia II",
          "Morfofisiologia III",
          "Morfofisiologia IV"
        ]
      },
      { nombre: "Farmacologia", prerequisitos: ["Infectologia básica"] },
      { nombre: "Apoyo al Diagnostico", prerequisitos: ["Morfofisiologia IV"] },
      { nombre: "Anatomia Patologica", prerequisitos: ["Fisiopatologia II"] }
    ]
  }
];
