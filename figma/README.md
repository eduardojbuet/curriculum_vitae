# Paquete de diseño para Figma

Este directorio contiene los lienzos vectoriales importados en el archivo de diseño de Figma:
[Portfolio académico — Eduardo Javier Buet](https://www.figma.com/design/E6YgaCBWue3oZg6qEAvu9s/Portfolio-acad%C3%A9mico-%E2%80%94-Eduardo-Javier-Buet).
La [presentación de `portfolio-prototype`](https://www.figma.com/proto/E6YgaCBWue3oZg6qEAvu9s/Portfolio-acad%C3%A9mico-%E2%80%94-Eduardo-Javier-Buet?node-id=10-7&starting-point-node-id=10-7)
abre el flujo de inicio configurado; los clics a sus destinos todavía no están validados.
El archivo está organizado en páginas de research, wireframes desktop/mobile, sistema visual y
prototipo. En `02 · Wireframes desktop` se conservó el frame original y se creó una copia,
`portfolio-prototype`, con un flujo de inicio. Sus dos acciones están configuradas para abrir
secciones del sitio publicado; **la navegación por clic en modo Present todavía no está verificada**.

## Contenido

| Archivo | Uso sugerido en Figma |
|---|---|
| `portfolio-desktop.svg` | Página `02 · Wireframes`, frame desktop de 1440 px |
| `portfolio-mobile.svg` | Página `02 · Wireframes`, frame mobile de 390 px |
| `ui-system.svg` | Página `03 · Sistema visual`: color, tipografía, espaciado y componentes |
| `research-board.svg` | Página `01 · Research`: audiencia hipotética, hipótesis, tareas y benchmark |
| `prototype-flow.svg` | Página `04 · Prototipo`: mapa del flujo propuesto |

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
4. En `02 · Wireframes desktop`, usá `portfolio-prototype` para probar el flujo sin alterar
   `portfolio-desktop`. “Explorar proyectos” abre
   `https://eduardojbuet.github.io/curriculum_vitae/#projects` y “Contactarme” abre
   `https://eduardojbuet.github.io/curriculum_vitae/#contact`; ambas acciones están configuradas
   para abrir una pestaña nueva. El desplazamiento dentro de Figma no se pudo validar con el frame
   completo, así que los hotspots enlazan al sitio publicado.
5. Probá ambos clics en **Present**. La sesión actual no confirmó que abran el sitio; no presentes
   el recorrido como validado hasta comprobarlo. Compartí el archivo con permiso de visualización.
6. El enlace se encuentra registrado en este documento, en `proceso-uxui.md` y en el README raíz.

## Mapa mínimo de interacción

- Inicio desktop → sitio publicado, ancla `#projects`, al elegir “Explorar proyectos”.
- Inicio desktop → sitio publicado, ancla `#contact`, al elegir “Contactarme”.
- Proyectos → Caso Cubrí al elegir “Leer caso de estudio”.
- Caso Cubrí → Proyectos al elegir “Volver a proyectos”.
- Inicio mobile → navegación abierta al elegir el menú; selección de una ancla cierra el menú.
- Contacto → validación de campos y pantalla/estado explicativo de apertura de correo. El sitio usa
  `mailto:`; no muestra una confirmación falsa de envío.

## Estado de validación y próximos pasos

- El benchmark es exploratorio; completar la revisión entre pares si la consigna lo requiere.
- Se realizaron tres pruebas exploratorias con participantes; los hallazgos y cambios están
  registrados en `../proceso-uxui.md`.
- La copia `portfolio-prototype` y el flujo de inicio están en `02 · Wireframes desktop`; se
  configuraron las dos acciones externas descritas arriba. La presentación abre el frame, pero el
  clic de prueba no abrió el sitio. Falta validar los hotspots en **Present** antes de considerar
  navegable el recorrido.
