# Proceso UX/UI — Portfolio académico

**Autor:** Eduardo Javier Buet  
**Carrera:** Licenciatura en Sistemas de Información · UADER · Facultad de Ciencia y Tecnología  
**Estado:** proceso documentado; algunas validaciones y objetivos siguen pendientes

Este registro acompaña el sitio y complementa la presentación de 8 diapositivas en
[`entrega/presentacion.pdf`](./entrega/presentacion.pdf), cuya fuente editable está en
[`entrega/presentacion.html`](./entrega/presentacion.html).
Distingue las decisiones implementadas de la investigación y validación que todavía deben
realizarse. Incluye los resultados observados en tres pruebas exploratorias, sin datos personales
ni resultados inventados.

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
con el enlace. En `02 · Wireframes desktop` se preservó `portfolio-desktop` y se creó la copia
`portfolio-prototype`, de 1440 × 1840 px, con el flujo de inicio `Recorrido portfolio desktop`.
Los hotspots “Explorar proyectos” y “Contactarme” tienen configuradas acciones `Abrir enlace` a
`https://eduardojbuet.github.io/curriculum_vitae/#projects` y
`https://eduardojbuet.github.io/curriculum_vitae/#contact`, respectivamente, en una pestaña nueva.
La acción de desplazamiento interno no se pudo validar con el frame de altura completa; por eso se
usaron enlaces al sitio publicado. En el modo Present disponible, un clic de prueba no abrió el
sitio. Las acciones aparecen configuradas en el editor, pero no se consideran verificadas hasta que
se compruebe el recorrido con clics en Present.

## 6. Validación de usabilidad

Se hicieron tres pruebas exploratorias del sitio publicado el **7 de noviembre de 2026**. Las
notas disponibles no especifican dispositivo, duración ni el recorrido completo de cada persona;
por eso se registran solo las observaciones compartidas y no se infieren tareas no mencionadas.

Las tareas propuestas fueron encontrar la carrera y la institución, revisar un proyecto y ubicar
la forma de contacto. Aunque se indicó no enviar mensajes, P2 efectivamente envió un correo desde
el contacto del portfolio. No se registra ni publica la dirección de correo ni el contenido del
mensaje.

| Participante anónimo | Tarea / resultado observado | Comentario u observación | Cambio aplicado |
|---|---|---|---|
| P1 | Encontró fácilmente qué estudia Eduardo. Comentó que recorrió el sitio. | No le gustaron mucho los tonos de color y percibió que la foto resalta demasiado frente al resto. | El retrato se pasó a blanco y negro y se retiró del hero para darle prioridad al perfil y los proyectos. |
| P2 | Envió un correo desde el contacto del portfolio. No se especificaron las demás tareas completadas. | Dijo que no encontró dudas y que el sitio le pareció claro. Reportó que los espacios del correo recibido aparecían como signos `+`. | Se corrigió la codificación del enlace `mailto:` para representar espacios como `%20`; falta verificar el envío real después del despliegue. |
| P3 | Recorrió los enlaces a todos los repositorios de proyectos. | Le parecieron muy buenos y fáciles de entender; dijo que la información es fácil de leer. Sugirió que la imagen se vería mejor en blanco y negro y que el contacto fuera por WhatsApp en vez de email. | El retrato se pasó a blanco y negro, se retiró del hero y se agregó un acceso directo a WhatsApp junto al email. |

### Lectura inicial

Las tres personas dieron señales positivas sobre la claridad o legibilidad: P2 dijo que el sitio
era claro y no le generó dudas; P3 pudo recorrer todos los enlaces a repositorios y consideró la
información fácil de leer. P1 encontró fácilmente la formación. P1 y P3 coincidieron en comentar
la presencia visual de la foto; P3 propuso probarla en blanco y negro. Como iteración de diseño,
el retrato se pasó a escala de grises y se quitó del hero; permanece más abajo, en la sección
“Sobre mí”, para que el perfil y los proyectos sean el foco inicial. Hay que verificar el resultado
visual publicado antes de considerar validada la solución. P2 reportó un problema
funcional en el formato del mensaje; se corrigió la codificación de espacios y queda pendiente
validar el envío en un cliente de correo. P3 sugirió reemplazar el email por WhatsApp; se agregó
un enlace directo a WhatsApp y se conservó el formulario de email como alternativa. No se
registraron tiempos ni se hicieron mediciones comparativas.

## 7. Implementación, despliegue y medición

La solución usa HTML/CSS y JavaScript vanilla y está publicada en GitHub Pages con el workflow del
repositorio. El **7 de noviembre de 2026** se comprobó que no hay desbordamiento horizontal en
viewport de 375, 768 y 1280 px, no hay imágenes rotas, y el menú mobile se abre con Enter; Escape
lo cierra y devuelve el foco al botón. También se comprobó el destino de las 20 anclas internas y
se ejecutó una pasada automatizada de contraste del texto visible en el estado normal, sin pares
por debajo de los umbrales AA estándar. Se corrigió localmente el color de los enlaces sociales
del pie, que antes heredaban texto blanco sobre fondo claro; este ajuste todavía debe publicarse.
El formulario requiere nombre, correo y mensaje; los campos vacíos no pasan la validación nativa
del navegador. Esta revisión no envió el correo ni verifica la apertura de una aplicación de email.

- revisar manualmente el resto de los enlaces externos y comprobar la apertura del cliente de correo;
- Lighthouse Mobile medido en Chrome con emulación iPhone 16 (393 × 852) el **7 de noviembre de
  2026**. Puntajes de la captura compartida: Performance **89**, Accessibility **96**, Best
  Practices **100** y SEO **100**. Tres categorías alcanzan la meta de 90; Performance queda un
  punto por debajo. La captura está en la conversación de entrega; falta revisar las
  oportunidades detalladas de rendimiento y repetir la medición después de publicar la corrección
  local del pie;
- validar en modo Present que “Explorar proyectos” abra `#projects` y “Contactarme” abra `#contact`.
  Las dos acciones ya están configuradas en `portfolio-prototype`, pero un clic de prueba no abrió
  el sitio; no se da por probado el recorrido;
- el historial público ya supera los 10 commits incrementales mínimos y descriptivos;
- la presentación del proceso se preparó en 8 diapositivas: `entrega/presentacion.pdf` (fuente:
  `entrega/presentacion.html`).

El objetivo de la rúbrica es al menos 90 en Performance, Accessibility, Best Practices y SEO.
La medición disponible alcanza el objetivo en tres categorías; Performance obtuvo 89.
