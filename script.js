// script.js

const data = [
  {
    semestre: "I Semestre",
    ramos: [
      { nombre: "Introducción a la Fonoaudiología", prerequisitos: [], creditos: 6 },
      { nombre: "Bases teóricas y prácticas de la comunicación humana", prerequisitos: [], creditos: 6 },
      { nombre: "Anatomía", prerequisitos: [], creditos: 4 },
      { nombre: "Matemáticas", prerequisitos: [], creditos: 3 },
      { nombre: "Física", prerequisitos: [], creditos: 3 },
      { nombre: "Biología molecular y celular", prerequisitos: [], creditos: 6 },
      { nombre: "CFG", prerequisitos: [], creditos: 2 }
    ]
  },
  {
    semestre: "II Semestre",
    ramos: [
      { nombre: "Inglés I", prerequisitos: [], creditos: 3 },
      { nombre: "Introducción a la salud pública", prerequisitos: ["Introducción a la Fonoaudiología"], creditos: 2 },
      { nombre: "Morfología", prerequisitos: ["Biología molecular y celular"], creditos: 5 },
      { nombre: "Fisiología I (Célular y neurofisiología)", prerequisitos: ["Biología molecular y celular", "Física"], creditos: 5 },
      { nombre: "Física y fonética acústica", prerequisitos: ["Física"], creditos: 4 },
      { nombre: "Sociedad, cultura y comunicación", prerequisitos: [], creditos: 6 },
      { nombre: "Fonética y fonología españolas", prerequisitos: [], creditos: 5 }
    ]
  },
  {
    semestre: "III Semestre",
    ramos: [
      { nombre: "Fundamentos cognitivos de la comunicación", prerequisitos: ["Fisiología I (Célular y neurofisiología)"], creditos: 4 },
      { nombre: "Morfosintaxis española", prerequisitos: [], creditos: 4 },
      { nombre: "Psicología del desarrollo infantil", prerequisitos: [], creditos: 6 },
      { nombre: "Fisiología II (De sistemas)", prerequisitos: ["Anatomía", "Fisiología I (Célular y neurofisiología)"], creditos: 5 },
      { nombre: "Neurología", prerequisitos: ["Fisiología I (Célular y neurofisiología)"], creditos: 4 },
      { nombre: "Genética", prerequisitos: ["Biología molecular y celular"], creditos: 3 },
      { nombre: "Promoción en salud", prerequisitos: ["Introducción a la salud pública", "Sociedad, cultura y comunicación", "Introducción a la Fonoaudiología"], creditos: 3 },
      { nombre: "CFG", prerequisitos: [], creditos: 2 }
    ]
  },
  {
    semestre: "IV Semestre",
    ramos: [
      { nombre: "Intervención fonoaudiológica y bioética aplicada", prerequisitos: ["Psicología del desarrollo infantil", "Introducción a la Fonoaudiología"], creditos: 5 },
      { nombre: "Semántica y discurso", prerequisitos: ["Sociedad, cultura y comunicación"], creditos: 4 },
      { nombre: "Psicología del desarrollo en adolescentes y adultos", prerequisitos: ["Psicología del desarrollo infantil"], creditos: 4 },
      { nombre: "Psiquiatría", prerequisitos: ["Neurología"], creditos: 3 },
      { nombre: "Fisiopatología y farmacología", prerequisitos: ["Fisiología II (De sistemas)"], creditos: 6 },
      { nombre: "Epidemiología y bioestadística", prerequisitos: ["Introducción a la salud pública"], creditos: 4 },
      { nombre: "Inglés II", prerequisitos: ["Inglés I"], creditos: 3 }
    ]
  },
  {
    semestre: "V Semestre",
    ramos: [
      { nombre: "Evaluación y diagnóstico auditivo y vestibular", prerequisitos: ["Física y fonética acústica", "Fisiopatología y farmacología"], creditos: 5 },
      { nombre: "Motricidad orofacial", prerequisitos: ["Fisiopatología y farmacología"], creditos: 5 },
      { nombre: "Evaluación y diagnóstico de la voz humana", prerequisitos: ["Bases teóricas y prácticas de la comunicación humana", "Física y fonética acústica", "Intervención fonoaudiológica y bioética aplicada"], creditos: 5 },
      { nombre: "Diagnóstico de situación de salud y organización", prerequisitos: ["Epidemiología y bioestadística"], creditos: 3 },
      { nombre: "Gestión I", prerequisitos: [], creditos: 3 },
      { nombre: "Métodos de investigación cualitativos y cuantitativos", prerequisitos: ["Epidemiología y bioestadística"], creditos: 5 },
      { nombre: "Módulo integrado interdisciplinario multiprofesional I (MIIM)", prerequisitos: [], creditos: 4 }
    ]
  },
  {
    semestre: "VI Semestre",
    ramos: [
      { nombre: "Intervención auditiva y vestibular", prerequisitos: ["Evaluación y diagnóstico auditivo y vestibular"], creditos: 4 },
      { nombre: "Intervención del habla", prerequisitos: ["Intervención fonoaudiológica y bioética aplicada", "Neurología"], creditos: 4 },
      { nombre: "Intervención de la deglución y motricidad orofacial", prerequisitos: ["Neurología", "Intervención fonoaudiológica y bioética aplicada"], creditos: 5 },
      { nombre: "Terapia y técnica de la voz humana", prerequisitos: ["Evaluación y diagnóstico de la voz humana"], creditos: 3 },
      { nombre: "Evaluación y diagnóstico de la comunicación en niños y adolescentes en contexto clínico y educativo", prerequisitos: ["Psicología del desarrollo en adolescentes y adultos", "Intervención fonoaudiológica y bioética aplicada"], creditos: 5 },
      { nombre: "Gestión II", prerequisitos: ["Gestión I"], creditos: 3 },
      { nombre: "Diseño de proyecto de investigación", prerequisitos: ["Métodos de investigación cualitativos y cuantitativos"], creditos: 4 },
      { nombre: "CFG III", prerequisitos: [], creditos: 2 }
    ]
  },
  {
    semestre: "VII Semestre",
    ramos: [
      { nombre: "Terapia de la comunicación en niños y adolescentes en el contexto clínico y educativo", prerequisitos: ["Evaluación y diagnóstico de la comunicación en niños y adolescentes en contexto clínico y educativo", "Evaluación y diagnóstico auditivo y vestibular"], creditos: 5 },
      { nombre: "Intervención del lenguaje y comunicación en adultos", prerequisitos: ["Fundamentos cognitivos de la comunicación", "Neurología", "Intervención fonoaudiológica y bioética aplicada"], creditos: 4 },
      { nombre: "Intervención fonoaudiológica en el adulto mayor", prerequisitos: ["Terapia y técnica de la voz humana", "Intervención fonoaudiológica y bioética aplicada", "Intervención del habla", "Intervención auditiva y vestibular"], creditos: 3 },
      { nombre: "Electivo de lingüística aplicada", prerequisitos: ["Semántica y discurso"], creditos: 2 },
      { nombre: "Integrado clínico en salud primaria", prerequisitos: ["Terapia y técnica de la voz humana", "Intervención auditiva y vestibular", "Intervención del habla", "Evaluación y diagnóstico de la comunicación en niños y adolescentes en contexto clínico y educativo", "Intervención de la deglución y motricidad orofacial"], creditos: 4 },
      { nombre: "Proyecto de investigación I", prerequisitos: ["Diseño de proyecto de investigación"], creditos: 10 },
      { nombre: "CFG IV", prerequisitos: [], creditos: 2 }
    ]
  },
  {
    semestre: "VIII Semestre",
    ramos: [
      { nombre: "Integrado educativo en niños", prerequisitos: ["Terapia de la comunicación en niños y adolescentes en el contexto clínico y educativo"], creditos: 4 },
      { nombre: "Intervención cognitiva en adultos", prerequisitos: ["Intervención fonoaudiológica en el adulto mayor", "Fundamentos cognitivos de la comunicación"], creditos: 4 },
      { nombre: "Integrado clínico en adultos", prerequisitos: ["Intervención fonoaudiológica en el adulto mayor", "Intervención del lenguaje y comunicación en adultos"], creditos: 4 },
      { nombre: "Electivo disciplinar", prerequisitos: [], creditos: 2 },
      { nombre: "Curso avanzado", prerequisitos: ["Intervención fonoaudiológica en el adulto mayor"], creditos: 2 },
      { nombre: "Proyecto de investigación II", prerequisitos: ["Proyecto de investigación I"], creditos: 9 },
      { nombre: "Módulo integrado interdisciplinario multiprofesional II (MIIM)", prerequisitos: ["Módulo integrado interdisciplinario multiprofesional I (MIIM)"], creditos: 5 }
    ]
  },
  {
    semestre: "IX y X Semestre",
    ramos: [
      { nombre: "Internado profesional área Infanto-Juvenil", prerequisitos: ["Integrado clínico en adultos"], creditos: 15 },
      { nombre: "Internado profesional área Adultos", prerequisitos: ["Integrado clínico en adultos"], creditos: 15 },
      { nombre: "Internado profesional área Audiología", prerequisitos: ["Integrado clínico en adultos"], creditos: 15 },
      { nombre: "Internado profesional área Voz", prerequisitos: ["Integrado clínico en adultos"], creditos: 15 }
    ]
  }
];

// ... (el resto del código queda igual)

crearMalla();
