# Paquete de diseño para Figma

Este directorio contiene los lienzos vectoriales importados en el archivo de diseño de Figma:
[Portfolio académico — Eduardo Javier Buet](https://www.figma.com/design/E6YgaCBWue3oZg6qEAvu9s/Portfolio-acad%C3%A9mico-%E2%80%94-Eduardo-Javier-Buet).
El archivo está organizado en páginas de research, wireframes desktop/mobile, sistema visual y
prototipo. El mapa de interacciones está documentado; **sus conexiones interactivas todavía no
están configuradas ni verificadas en modo Present**.

## Contenido

| Archivo | Uso sugerido en Figma |
|---|---|
| `portfolio-desktop.svg` | Página `02 · Wireframes`, frame desktop de 1440 px |
| `portfolio-mobile.svg` | Página `02 · Wireframes`, frame mobile de 390 px |
| `ui-system.svg` | Página `03 · Sistema visual`: color, tipografía, espaciado y componentes |
| `research-board.svg` | Página `01 · Research`: audiencia hipotética, hipótesis, tareas y benchmark |
| `prototype-flow.svg` | Página `04 · Prototipo`: mapa de frames y conexiones pendientes de enlazar |

`proceso-uxui.md` conserva la documentación de concepto, arquitectura, benchmark y plan de
validación. El sitio HTML implementado es la referencia funcional para comprobar contenido y
estados.

## Organización y edición

1. Abrí el archivo de Figma enlazado arriba; ya contiene las páginas `01 · Research`,
   `02 · Wireframes desktop`, `02 · Wireframes mobile`, `03 · Sistema visual` y `04 · Prototipo`.
2. Los lienzos ya están importados como vectores. Conservan los tamaños nominales: desktop
   `1440 × 1840`, mobile `390 × 2400`; los tableros de research, sistema y flujo usan las
   dimensiones definidas en cada SVG.
3. Si necesitás editar elementos, desagrupá el SVG importado y ajustá textos, colores y formas en
   Figma. Sincronizá los wireframes con la iteración actual: el hero del sitio ya no incluye el
   retrato; la foto en blanco y negro permanece únicamente en “Sobre mí”.
4. En `04 · Prototipo`, creá o duplica los frames de inicio, proyectos, caso Cubrí, contacto y menú mobile.
   Seleccioná cada hotspot y conectalo con **Prototype → On click → Navigate to** según el mapa.
   Probá las rutas en **Present** y compartí el archivo con permiso de visualización.
5. El enlace se encuentra registrado en este documento, en `proceso-uxui.md` y en el README raíz.

## Mapa mínimo de interacción

- Inicio desktop → `#projects` al elegir “Explorar proyectos”.
- Inicio desktop → Contacto al elegir “Contactarme” o “Contacto”.
- Proyectos → Caso Cubrí al elegir “Leer caso de estudio”.
- Caso Cubrí → Proyectos al elegir “Volver a proyectos”.
- Inicio mobile → navegación abierta al elegir el menú; selección de una ancla cierra el menú.
- Contacto → validación de campos y pantalla/estado explicativo de apertura de correo. El sitio usa
  `mailto:`; no muestra una confirmación falsa de envío.

## Estado de validación y próximos pasos

- El benchmark es exploratorio; completar la revisión entre pares si la consigna lo requiere.
- Se realizaron tres pruebas exploratorias con participantes; los hallazgos y cambios están
  registrados en `../proceso-uxui.md`.
- Para considerar el prototipo completo, falta configurar las conexiones entre frames, probarlas
  en modo Present y confirmar el recorrido.
