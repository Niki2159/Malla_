// Créditos oficiales de cada ramo
const creditos = {
  'Cálculo Diferencial': 3,
  'Álgebra y trigonometría': 3,
  'Geometría euclidiana': 3,
  'Química general': 4,
  'Vivamos la universidad': 1,
  'Lectoescritura': 3,
  'inglés 1': 2,
  'Cálculo integral': 3,
  'Geometría vectorial y analítica': 3,
  'Descubriendo la física': 3,
  'Introducción a la ingeniería química': 1,
  'Expresión gráfica para ingenieros': 3,
  'Química inorgánica': 4,
  'inglés 2': 2,
  'Cálculo Vectorial': 3,
  'Álgebra lineal': 3,
  'Física mecánica': 3,
  'Algoritmos y programación': 3,
  'Química orgánica': 4,
  'Formación ciudadana y constitucional': 1,
  'Ingles 3': 2,
  'Ecuaciones diferenciales': 1,
  'Física de campos': 3,
  'Termodinámica I': 4,
  'Biología para ingenieros': 3,
  'Química analítica e instrumental': 4,
  'Ingles 4': 2,
  'Fenómenos de transporte I': 3,
  'Balance de materia y energía': 4,
  'Física de ondas': 3,
  'Termodinámica II': 3,
  'Ingeniería económica': 3,
  'inglés 5': 2,
  'Laboratorio integrado de física': 2,
  'Mecánica de fluidos': 4,
  'Termodinámica química': 5,
  'Matemáticas especiales': 3,
  'Fenómenos de transporte II': 3,
  'Operaciones con transferencia de calor': 4,
  'Operaciones con transferencia de masa': 4,
  'Ingeniería de los materiales': 4,
  'Estadística y diseño de experimentos': 3,
  'Ética': 1,
  'Ingeniería de las reacciones químicas': 4,
  'Operaciones con solidos': 4,
  'Electricidad y electrónica': 5,
  'Anteproyecto': 1,
  'Fundamentos de economía': 3,
  'Línea de profundización I': 3,
  'Diseño de productos y procesos': 5,
  'Control de procesos': 4,
  'Línea de profundización': 3,
  'Electiva profesional': 3,
  'Diseño de productos y procesos II': 3,
  'Prácticas académicas': 12
};

// Prerrequisitos de cada ramo (ramos que deben estar aprobados para desbloquear este)
const prerequisitos = {
  'Cálculo Diferencial': [],
  'Álgebra y trigonometría': [],
  'Geometría euclidiana': [],
  'Química general': [],
  'Vivamos la universidad': [],
  'Lectoescritura': [],
  'inglés 1': [],
  'Cálculo integral': ['Cálculo Diferencial', 'Álgebra y trigonometría'],
  'Geometría vectorial y analítica': [],
  'Descubriendo la física': [],
  'Introducción a la ingeniería química': [],
  'Expresión gráfica para ingenieros': ['Geometría euclidiana'],
  'Química inorgánica': ['Química general'],
  'inglés 2': ['inglés 1'],
  'Cálculo Vectorial': ['Cálculo integral', 'Geometría vectorial y analítica'],
  'Álgebra lineal': ['Geometría vectorial y analítica', 'Álgebra y trigonometría'],
  'Física mecánica': ['Descubriendo la física', 'Geometría vectorial y analítica', 'Cálculo Diferencial'],
  'Algoritmos y programación': [],
  'Química orgánica': ['Química inorgánica'],
  'Formación ciudadana y constitucional': [],
  'Ingles 3': ['inglés 2'],
  'Ecuaciones diferenciales': ['Cálculo integral', 'Álgebra lineal'],
  'Física de campos': ['Cálculo integral', 'Física mecánica'],
  'Termodinámica I': ['Algoritmos y programación'],
  'Biología para ingenieros': ['Química orgánica'],
  'Química analítica e instrumental': ['Química orgánica'],
  'Ingles 4': ['Ingles 3'],
  'Fenómenos de transporte I': ['Ecuaciones diferenciales'],
  'Balance de materia y energía': ['Termodinámica I', 'Expresión gráfica para ingenieros'],
  'Física de ondas': ['Física mecánica'],
  'Termodinámica II': ['Termodinámica I'],
  'Ingeniería económica': [],
  'inglés 5': ['Ingles 4'],
  'Laboratorio integrado de física': ['Física de ondas', 'Física de campos'],
  'Mecánica de fluidos': ['Fenómenos de transporte I'],
  'Termodinámica química': ['Química analítica e instrumental', 'Termodinámica II', 'Balance de materia y energía'],
  'Matemáticas especiales': ['Algoritmos y programación', 'Ecuaciones diferenciales'],
  'Fenómenos de transporte II': ['Fenómenos de transporte I'],
  'Operaciones con transferencia de calor': ['Balance de materia y energía', 'Matemáticas especiales', 'Mecánica de fluidos'],
  'Operaciones con transferencia de masa': ['Fenómenos de transporte II', 'Termodinámica química'],
  'Ingeniería de los materiales': ['Ingeniería económica'],
  'Estadística y diseño de experimentos': ['Química analítica e instrumental'],
  'Ética': [],
  'Ingeniería de las reacciones químicas': ['Estadística y diseño de experimentos', 'Operaciones con transferencia de calor', 'Biología para ingenieros'],
  'Operaciones con solidos': [],
  'Electricidad y electrónica': ['Física de campos'],
  'Anteproyecto': ['Estadística y diseño de experimentos'],
  'Fundamentos de economía': [],
  'Línea de profundización I': [],
  'Diseño de productos y procesos': ['Operaciones con transferencia de masa', 'Operaciones con solidos', 'Ingeniería de las reacciones químicas', 'Ingeniería de los materiales'],
  'Control de procesos': ['Electricidad y electrónica', 'Ingeniería de las reacciones químicas'],
  'Línea de profundización': [],
  'Electiva profesional': [],
  'Diseño de productos y procesos II': ['Diseño de productos y procesos'],
  'Prácticas académicas': [],
};

// Funciones para guardar y cargar progreso en localStorage
function obtenerAprobados() {
  const data = localStorage.getItem('mallaAprobados');
  return data ? JSON.parse(data) : [];
}

function guardarAprobados(aprobados) {
  localStorage.setItem('mallaAprobados', JSON.stringify(aprobados));
}

// Calcula el total de créditos de ramos aprobados
function calcularCreditosAprobados() {
  const aprobados = obtenerAprobados();
  return aprobados.reduce((sum, ramo) => sum + (creditos[ramo] || 0), 0);
}

// Aprobados y bloqueados
const aprobados = new Set();

function aprobar(id) {
  const ramo = document.getElementById(id);

  if (ramo.classList.contains("bloqueado")) return; // No hacer nada si está bloqueado

  // Si ya está aprobado, no hacer nada
  if (aprobados.has(id)) return;

  // Marcar como aprobado
  ramo.classList.add("aprobado");
  aprobados.add(id);

  // Revisar qué ramos dependen de este
  Object.entries(prerrequisitos).forEach(([ramoDestino, requisitos]) => {
    if (requisitos.every(r => aprobados.has(r))) {
      const nodo = document.getElementById(ramoDestino);
      if (nodo && nodo.classList.contains("bloqueado")) {
        nodo.classList.remove("bloqueado");
      }
    }
  });
}

// Maneja el clic para aprobar o desaprobar un ramo (solo si no está bloqueado)
function aprobar(e) {
  const ramo = e.currentTarget;
  if (ramo.classList.contains('bloqueado')) return;

  ramo.classList.toggle('aprobado');

  const aprobados = obtenerAprobados();
  if (ramo.classList.contains('aprobado')) {
    if (!aprobados.includes(ramo.id)) aprobados.push(ramo.id);
  } else {
    const idx = aprobados.indexOf(ramo.id);
    if (idx > -1) aprobados.splice(idx, 1);
  }
  guardarAprobados(aprobados);

  actualizarDesbloqueos();
}

// Al cargar la página, asignar eventos, cargar progreso y actualizar desbloqueos
window.addEventListener('DOMContentLoaded', () => {
  const todosRamos = document.querySelectorAll('.ramo');

  const aprobados = obtenerAprobados();
  todosRamos.forEach(ramo => {
    if (aprobados.includes(ramo.id)) {
      ramo.classList.add('aprobado');
    }
  });

  todosRamos.forEach(ramo => {
    ramo.addEventListener('click', aprobar);
  });

  actualizarDesbloqueos();
});
