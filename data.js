// data.js

export const coursesByCycle = {
  'Ciclo 1': [
    'Química',
    'Matemática',
    'Lengua y Oratoria',
    'Introducción a la Medicina',
    'Desempeño Universitario',
    'Biología Celular y Molecular'
  ],
  'Ciclo 2': [
    'Redacción General',
    'Realidad Nacional',
    'Morfofisiología I',
    'Introducción a la Investigación',
    'Bioquímica',
    'Anatomía General'
  ],
  'Ciclo 3': [
    'Morfofisiología II',
    'Inmunología',
    'Genética Médica',
    'Filosofía',
    'Estadística General',
    'Educación Ambiental'
  ],
  'Ciclo 4': [
    'Morfofisiología III',
    'Infectología básica',
    'Fisiopatología I',
    'Desarrollo y Crecimiento',
    'Bioética'
  ],
  'Ciclo 5': [
    'Salud Mental',
    'Morfofisiología IV',
    'Fundamentos de Medicina Intercultural',
    'Fisiopatología II',
    'Bioestadística'
  ],
  'Ciclo 6': [
    'Semiología basada en la simulación',
    'Semiología',
    'Farmacología',
    'Apoyo al Diagnóstico',
    'Anatomía Patológica'
  ]
};

export const courseRequirements = {
  'Redacción General': ['Lengua y Oratoria'],
  'Realidad Nacional': ['Lengua y Oratoria', 'Desempeño Universitario'],
  'Morfofisiología I': ['Biología Celular y Molecular'],
  'Bioquímica': ['Química'],
  'Anatomía General': ['Biología Celular y Molecular'],
  'Morfofisiología II': ['Anatomía General', 'Morfofisiología I'],
  'Inmunología': ['Morfofisiología I'],
  'Genética Médica': ['Biología Celular y Molecular'],
  'Estadística General': ['Matemática'],
  'Morfofisiología III': ['Anatomía General', 'Morfofisiología I'],
  'Infectología básica': ['Bioquímica', 'Morfofisiología I'],
  'Fisiopatología I': ['Morfofisiología II'],
  'Desarrollo y Crecimiento': ['Biología Celular y Molecular'],
  'Bioética': ['Introducción a la Medicina', 'Redacción General'],
  'Salud Mental': ['Filosofía'],
  'Morfofisiología IV': ['Morfofisiología III'],
  'Fundamentos de Medicina Intercultural': ['Filosofía', 'Realidad Nacional'],
  'Fisiopatología II': ['Morfofisiología II'],
  'Bioestadística': ['Estadística General'],
  'Semiología basada en la simulación': [
    'Fisiopatología I',
    'Fisiopatología II',
    'Inmunología',
    'Morfofisiología II',
    'Morfofisiología III',
    'Morfofisiología IV'
  ],
  'Semiología': [
    'Fisiopatología I',
    'Fisiopatología II',
    'Inmunología',
    'Morfofisiología II',
    'Morfofisiología III',
    'Morfofisiología IV'
  ],
  'Farmacología': ['Infectología básica'],
  'Apoyo al Diagnóstico': ['Morfofisiología IV'],
  'Anatomía Patológica': ['Fisiopatología II']
};
