# Proceso UX/UI — Portfolio académico

**Autor:** Eduardo Javier Buet  
**Carrera:** Licenciatura en Sistemas de Información · UADER · Facultad de Ciencia y Tecnología  
**Estado:** borrador de proceso para revisión académica

Este registro acompaña el sitio y puede servir como base para una presentación de hasta 10 slides.
Distingue las decisiones implementadas de la investigación y validación que todavía deben
realizarse. No contiene participantes, entrevistas, tests ni resultados inventados.

## 1. Objetivo y audiencia

El portfolio reúne formación universitaria, habilidades en desarrollo y trabajos académicos para
que una persona docente o reclutadora pueda entender el perfil y abrir un proyecto en menos de 30
segundos.

### Proto-persona (hipótesis por validar)

- **Perfil:** docente evaluador/a o reclutador/a junior de tecnología.
- **Necesita encontrar:** carrera e institución, tecnologías trabajadas, responsabilidad y alcance
  de cada proyecto, forma de contacto.
- **Escenario:** llega desde un enlace; en una revisión breve busca un trabajo implementado,
  comprende qué hizo Eduardo y comprueba su GitHub.
- **Criterio de éxito propuesto:** localizar formación, abrir un proyecto y encontrar un contacto
  sin tener que recorrer textos extensos.

Es una proto-persona para orientar el diseño, no el resultado de una entrevista.

## 2. Benchmark

Revisión exploratoria de tres portfolios públicos, realizada el **7 de noviembre de 2026**. Son
referencias profesionales y no modelos para copiar; el análisis completo de navegación e
interacción debe repetirse en la revisión de pares.

| Referencia | Qué funciona para encontrar y entender el trabajo | Límite observado para este proyecto | Decisión aplicada |
|---|---|---|---|
| [Brittany Chiang](https://brittanychiang.com/) | Presenta una descripción profesional y organiza la trayectoria y las tecnologías como bloques distinguibles. | Su cantidad de experiencia y detalle de trayectoria es propia de un perfil senior; no corresponde trasladarla a un perfil estudiante. | Mostrar primero carrera, proyectos académicos y stack real, sin inventar puestos o años de experiencia. |
| [Jhey Tompkins](https://jhey.dev/) | El mensaje inicial conecta el perfil con interfaces, prototipos y experimentación; enlaza a trabajos demostrables. | El extracto inicial consultado es muy breve y no explica por sí solo el proceso de cada proyecto. | Mantener una propuesta breve y añadir un caso de estudio que explique desafío, proceso, solución y alcance. |
| [Adham Dannaway](https://www.adhamdannaway.com/) | Comunica con claridad el cruce entre diseño y código y muestra trabajos recientes con títulos y categorías. | La presentación visual tiene más peso que el contexto escrito en la página inicial consultada. | Combinar previews visuales con descripciones, tecnologías, aprendizajes y enlaces a los proyectos. |
| [Ernesto Ledesma](https://ernesto-ledesma-portfolio.vercel.app/) · referencia compartida por el docente | El hero reúne disponibilidad, identidad profesional, especialidad, una propuesta breve y acciones de contacto o exploración; las secciones posteriores amplían habilidades y experiencia. | Las métricas y afirmaciones de trayectoria del ejemplo corresponden a un profesional con experiencia y no son transferibles a un perfil universitario. | Adaptar la jerarquía a una presentación académica: carrera e institución, intereses aplicados y proyectos comprobables, sin copiar texto, métricas, plantilla ni recursos. |

La selección contrasta perfiles de desarrollo, experimentación web y diseño/desarrollo. La
propuesta resultante prioriza claridad académica, descripción del alcance y evidencia verificable,
en vez de replicar sus layouts o estilos.

## 3. Concepto visual

**Palabras clave:** sobrio, académico y cercano.

- **Color:** papel cálido y neutros para lectura prolongada; verde oscuro como acento para
  jerarquía, enlaces y estados. Se evita copiar la paleta oscura del portfolio de referencia de la
  consigna.
- **Tipografía:** Georgia para títulos editoriales y tipografía de sistema sans-serif para lectura
  e interfaz. No se cargan familias remotas.
- **Imagen:** retrato provisto por Eduardo y piezas visuales propias de los proyectos; las
  ilustraciones de interfaz son mockups del portfolio, no capturas de resultados de usuarios.
- **Tono:** primera persona, profesional y preciso; se declaran como exploración los trabajos
  incompletos.

## 4. Arquitectura de información

`Header → Hero → Resumen → Sobre mí → Habilidades → Proyectos → Formación → Contacto → Footer`

La navegación prioriza los datos que permiten evaluar el perfil rápidamente. Las fichas de Cubrí
Seguros y OpenArt se abren en páginas internas: la primera documenta el caso de estudio; la
segunda aclara que solo existe una exploración del brief.

### Agrupación del contenido

- **Perfil:** nombre, rol académico, carrera, institución y principios.
- **Capacidades:** desarrollo web, programación/datos, UX/UI y control de versiones.
- **Evidencia:** proyectos académicos y ejercicios de práctica.
- **Contacto:** correo, LinkedIn y GitHub.

Esta organización se hizo como clasificación de escritorio del contenido disponible, no como
card sorting con participantes.

## 5. Wireframes y sistema visual

El HTML implementado es la referencia funcional del sitio; su layout cambia en mobile, tablet y
desktop. Los tokens de color, tipografía y espaciado están en `styles.css` bajo `:root`. La grilla
usa Flexbox y CSS Grid; los estados interactivos, el foco visible, el menú móvil, el salto a
contenido y la preferencia de movimiento reducido se resuelven en CSS/HTML/JavaScript.

**Archivo Figma:** [Portfolio académico — Eduardo Javier Buet](https://www.figma.com/design/E6YgaCBWue3oZg6qEAvu9s/Portfolio-acad%C3%A9mico-%E2%80%94-Eduardo-Javier-Buet).
Contiene páginas para research, wireframes desktop/mobile, sistema visual y mapa del flujo; los
SVG de origen están en `figma/`. El enlace de visualización se configuró para cualquier persona
con el enlace. El mapa describe las interacciones propuestas, pero las conexiones entre frames
todavía deben implementarse y probarse en modo Present; no se presenta como un prototipo
interactivo ya validado.

## 6. Validación de usabilidad

No se realizaron tests. Plan mínimo para completar antes de la entrega:

1. Con el sitio en mobile, pedir que se encuentre el correo de contacto.
2. Pedir que se abra el proyecto más reciente y se explique qué resultado tiene y qué no hace.
3. Pedir que se encuentre la carrera y la institución.

Registrar por persona un identificador anónimo, tarea, éxito/fracaso, tiempo aproximado,
dificultad observada y cambio aplicado. La consigna requiere al menos tres participantes; no
publicar nombres ni información personal. Luego repetir las tareas y documentar los hallazgos y
cambios reales.

| Participante anónimo | Tarea | Resultado y observación | Cambio aplicado |
|---|---|---|---|
| Pendiente | Pendiente | Pendiente | Pendiente |
| Pendiente | Pendiente | Pendiente | Pendiente |
| Pendiente | Pendiente | Pendiente | Pendiente |

## 7. Implementación, despliegue y medición

La solución usa HTML/CSS y JavaScript vanilla; la página puede publicarse desde GitHub Pages con
el workflow del repositorio. Antes de entregar:

- probar anchos de 375, 768 y 1280 px y confirmar que no haya scroll horizontal;
- recorrer con teclado el menú, enlaces y formulario;
- verificar contraste y nombres accesibles;
- ejecutar Lighthouse en mobile, guardar la captura y revisar las cuatro categorías;
- crear el repositorio público y realizar al menos 10 commits incrementales y descriptivos;
- pegar la URL real de Figma, el sitio publicado y el repositorio en el README.

El objetivo de la rúbrica es al menos 90 en Performance, Accessibility, Best Practices y SEO.
Todavía no se afirma haber medido ni alcanzado esos puntajes.
