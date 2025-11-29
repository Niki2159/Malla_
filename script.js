// Créditos oficiales de cada ramo
const creditos = {
  'Química General': 4,
  'Vivamos la Universidad': 1,
  'Español Académico': 3,
  'Álgebra y Trigonometría': 3,
  'Geometría Euclidiana': 3,
  'Cálculo Diferencial': 3,
  'English 1': 2,
  'Cálculo Integral': 3,
  'Geometría Vectorial y Analítica': 3,
  'Descubriendo la Física': 3,
  'Introducción Ingeniería Química': 1,
  'Expresión Gráfica para Ingenieros': 2,
  'Química Inorgánica': 4,
  'English 2': 2,
  'Cálculo Vectorial': 3,
  'Álgebra Lineal': 3,
  'Física Mecánica': 3,
  'Algoritmos y Programación': 3,
  'Química Orgánica': 4,
  'Formación Ciudadana y Constitucional': 1,
  'English 3': 2,
  'Ecuaciones Diferenciales': 3,
  'Física de Campos': 3,
  'Termodinámica I': 4,
  'Biología para Ingenieros': 3,
  'Química Analítica e Instrumental': 4,
  'English 4': 2,
  'Fenómenos de Transporte I': 3,
  'Balances de Materia y Energía': 4,
  'Física de Ondas': 3,
  'Termodinámica II': 3,
  'Ingeniería Económica': 3,
  'English 5': 2,
  'Laboratorio Integrado de Física': 2,
  'Mecánica de Fluidos': 4,
  'Termodinámica Química': 5,
  'Matemáticas Especiales': 3,
  'Fenómenos de Transporte II': 3,
  'Operaciones con Transferencia de Calor': 4,
  'Operaciones con Transferencia de Masa': 4,
  'Ingeniería de los Materiales': 4,
  'Estadística y Diseño de Experimentos': 3,
  'Ética': 1,
  'Ingeniería de las Reacciones Químicas': 4,
  'Operaciones con Sólidos': 4,
  'Electricidad y Electrónica': 3,
  'Anteproyecto': 1,
  'Fundamentos de Economía': 3,
  'Diseño de Procesos y Productos I': 5,
  'Control de Procesos': 4,
  'Diseño de Procesos y Productos II': 3
};

// Prerrequisitos de cada ramo (ramos que deben estar aprobados para desbloquear este)
const prerequisitos = {
  'Cálculo Diferencial': [],
  'Álgebra y Trigonometría': [],
  'Geometría Euclidiana': [],
  'Química General': [],
  'Vivamos la Universidad': [],
  'Español Académico': [],
  'English 1': [],
  'Cálculo Integral': ['Cálculo Diferencial', 'Álgebra y Trigonometría'],
  'Geometría Vectorial y Analítica': [],
  'Descubriendo la Física': [],
  'Introducción Ingeniería Química': [],
  'Expresión Gráfica para Ingenieros': ['Geometría Euclidiana'],
  'Química Inorgánica': ['Química General'],
  'English 2': ['English 1'],
  'Cálculo Vectorial': ['Cálculo Integral', 'Geometría Vectorial y Analítica'],
  'Álgebra Lineal': ['Geometría Vectorial y Analítica', 'Álgebra y Trigonometría'],
  'Física Mecánica': ['Descubriendo la Física', 'Geometría Vectorial y Analítica', 'Cálculo Diferencial'],
  'Algoritmos y Programación': [],
  'Química Orgánica': ['Química Inorgánica'],
  'Formación Ciudadana y Constitucional': [],
  'English 3': ['English 2'],
  'Ecuaciones Diferenciales': ['Cálculo Integral', 'Álgebra Lineal'],
  'Física de Campos': ['Cálculo Integral', 'Física Mecánica'],
  'Termodinámica I': ['Algoritmos y Programación'],
  'Biología para Ingenieros': ['Química Orgánica'],
  'Química Analítica e Instrumental': ['Química Orgánica'],
  'English 4': ['English 3'],
  'Fenómenos de Transporte I': ['Ecuaciones Diferenciales'],
  'Balances de Materia y Energía': ['Termodinámica I', 'Expresión Gráfica para Ingenieros'],
  'Física de Ondas': ['Física Mecánica'],
  'Termodinámica II': ['Termodinámica I'],
  'Ingeniería Económica': [],
  'English 5': ['English 4'],
  'Laboratorio Integrado de Física': ['Física de Ondas', 'Física de Campos'],
  'Mecánica de Fluidos': ['Fenómenos de Transporte I'],
  'Termodinámica Química': ['Química Analítica e Instrumental', 'Termodinámica II', 'Balances de Materia y Energía'],
  'Matemáticas Especiales': ['Algoritmos y Programación', 'Ecuaciones Diferenciales'],
  'Fenómenos de Transporte II': ['Fenómenos de Transporte I'],
  'Operaciones con Transferencia de Calor': ['Balances de Materia y Energía', 'Matemáticas Especiales', 'Mecánica de Fluidos'],
  'Operaciones con Transferencia de Masa': ['Fenómenos de Transporte II', 'Termodinámica Química'],
  'Ingeniería de los Materiales': ['Ingeniería Económica'],
  'Estadística y Diseño de Experimentos': ['Química Analítica e Instrumental'],
  'Ética': [],
  'Ingeniería de las Reacciones Químicas': ['Estadística y Diseño de Experimentos', 'Operaciones con Transferencia de Calor', 'Biología para Ingenieros'],
  'Operaciones con Sólidos': [],
  'Electricidad y Electrónica': ['Física de Campos'],
  'Anteproyecto': ['Estadística y Diseño de Experimentos'],
  'Fundamentos de Economía': [],
  'Diseño de Procesos y Productos I': ['Operaciones con Transferencia de Masa', 'Operaciones con Sólidos', 'Ingeniería de las Reacciones Químicas', 'Ingeniería de los Materiales'],
  'Control de Procesos': ['Electricidad y Electrónica', 'Ingeniería de las Reacciones Químicas'],
  'Diseño de Procesos y Productos II': ['Diseño de Procesos y Productos I']
};

// Funciones de almacenamiento local
function obtenerAprobados() {
  const data = localStorage.getItem('mallaAprobados');
  return data ? JSON.parse(data) : [];
}

function guardarAprobados(aprobados) {
  localStorage.setItem('mallaAprobados', JSON.stringify(aprobados));
}

// Total de créditos aprobados
function calcularCreditosAprobados() {
  const aprobados = obtenerAprobados();
  return aprobados.reduce((sum, ramo) => sum + (creditos[ramo] || 0), 0);
}

// Actualiza desbloqueos
function actualizarDesbloqueos() {
  const aprobados = obtenerAprobados();
  const totalCreditos = calcularCreditosAprobados();

  for (const [destino, reqs] of Object.entries(prerequisitos)) {
    const elem = document.getElementById(destino);
    if (!elem) continue;

    let puedeDesbloquear = true;
    const missing = [];

    reqs.forEach(r => {
      if (r.startsWith("CREDITOS:")) {
        const need = parseInt(r.split(":")[1]);
        if (totalCreditos < need) {
          puedeDesbloquear = false;
          missing.push(`Créditos requeridos: ${need}`);
        }
      } else if (!aprobados.includes(r)) {
        puedeDesbloquear = false;
        missing.push(r);
      }
    });

    if (!elem.classList.contains('aprobado')) {
      if (puedeDesbloquear) elem.classList.remove('bloqueado');
      else elem.classList.add('bloqueado');
    } else {
      elem.classList.remove('bloqueado');
    }

    let tip = elem.querySelector('.tooltip');
    if (!tip) {
      tip = document.createElement('div');
      tip.className = 'tooltip';
      elem.appendChild(tip);
    }
    tip.textContent = missing.length > 0 ? "Falta: " + missing.join(", ") : "";
  }
}

// Maneja clics para aprobar/desaprobar
function aprobar(event) {
  const ramo = event.currentTarget;
  if (!ramo || ramo.classList.contains('bloqueado')) return;

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

// Inicialización al cargar la página
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
