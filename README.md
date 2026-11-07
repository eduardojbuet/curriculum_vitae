# Portfolio académico — Eduardo Javier Buet

Sitio personal estático para presentar la formación y los proyectos académicos de un estudiante
de la **Licenciatura en Sistemas de Información** de la **Universidad Autónoma de Entre Ríos
(UADER), Facultad de Ciencia y Tecnología**.

## Sitio y contacto

- URL del portfolio: <https://eduardojbuet.github.io/curriculum_vitae/>. Verificarla después del primer despliegue.
- GitHub: <https://github.com/eduardojbuet/>
- LinkedIn: <https://www.linkedin.com/in/eduardo-buet-22a31683/>
- Email: <mailto:bueteduardoj@gmail.com>

## Proyectos

| Proyecto | Alcance presentado | Enlaces |
|---|---|---|
| Cubrí Seguros | Prototipo frontend multipágina de contratación simulada. | [Caso de estudio](./caso-cubri-seguros.html) · [sitio](https://eduardojbuet.github.io/cubri-seguros/) · [repositorio](https://github.com/eduardojbuet/cubri-seguros) |
| Coffea | PRD y landing page académica para una cafetería. | [sitio](https://coffea-landing.netlify.app/) · [repositorio](https://github.com/eduardojbuet/coffea-landing) |
| OpenArt NFTs | Exploración inicial de un brief, sin prototipo final. | [ficha de alcance](./proyecto-openart.html) |
| Ejercicios de CSS | Práctica complementaria de maquetación y estilos. | [repositorio](https://github.com/eduardojbuet/tp_uxui) |

Los proyectos se describen según el material disponible en `D:\Desktop\UX-UI` y los repositorios
locales. Cubrí Seguros es una simulación académica: no ofrece cobertura ni procesa pagos reales.
OpenArt se identifica como exploración; no se le atribuyen resultados de investigación o
prototipos que todavía no existen.

## Stack y accesibilidad

- HTML semántico, CSS propio y JavaScript vanilla; sin frameworks ni servicios de terceros.
- Diseño mobile-first con ajustes para 480, 768 y 1280 px; la consigna pide probar como mínimo
  375, 768 y 1280 px.
- Navegación móvil operable por teclado, enlaces de salto, foco visible, etiquetas de formulario y
  respeto por `prefers-reduced-motion`.
- Metadatos de título, descripción y Open Graph, `theme-color`, favicon y `viewport`.
- Tipografías de sistema para no bloquear el contenido ni cargar fuentes externas.
- Formulario de contacto con validación del navegador que prepara un email `mailto:`; no guarda
  ni transmite datos a un servidor.
- El formulario solicita nombre, correo y mensaje; al enviarlo abre la aplicación de correo
  configurada para que la persona revise y envíe el contenido.

## Ejecutar localmente

Abrí `index.html` en un navegador o usá una extensión de servidor estático, como Live Server.
El formulario requiere una aplicación de correo configurada para abrir el mensaje.

## Publicar en GitHub Pages

El workflow de `.github/workflows/pages.yml` está preparado para desplegar el contenido de la
raíz cuando se publique en la rama `main`.

1. Repositorio público: <https://github.com/eduardojbuet/curriculum_vitae>.
2. Publicá la rama `main`; el workflow de GitHub Actions despliega el contenido de la raíz.
3. En **Settings → Pages**, la fuente de publicación está configurada como **GitHub Actions**.
4. Verificá <https://eduardojbuet.github.io/curriculum_vitae/> y sus enlaces.

Los repositorios existentes no se modifican. El historial de este repositorio comienza con la
publicación del sitio; los 10 commits incrementales que pide la consigna deben registrarse durante
el proceso real de trabajo, sin inventar actividad pasada.

## Proceso y estado de entrega

El [registro del proceso UX/UI](./proceso-uxui.md) documenta el concepto, la arquitectura, los
criterios de diseño y el plan de validación.

Archivo de diseño creado en Figma: [Portfolio académico — Eduardo Javier Buet](https://www.figma.com/design/E6YgaCBWue3oZg6qEAvu9s/Portfolio-acad%C3%A9mico-%E2%80%94-Eduardo-Javier-Buet).
Contiene páginas para research, wireframes desktop y mobile, sistema visual y mapa del flujo.
El directorio [`figma/`](./figma/README.md) conserva los SVG de origen y explica su estructura.
Las conexiones interactivas del prototipo y su recorrido en modo Present todavía deben completarse
y probarse.

| Entregable de la consigna | Estado |
|---|---|
| Portfolio one-page con las nueve secciones y navegación por anclas | Implementado |
| Tres proyectos con año, alcance, aprendizaje y enlaces | Implementado |
| Caso de estudio propio en una página interna | Implementado para Cubrí Seguros |
| Diseño responsive, HTML semántico y metadatos | Implementado; requiere comprobación final en navegador |
| Figma con research, wireframes, sistema y prototipo navegable | Archivo creado y compartido con tableros de research, wireframes desktop/mobile, sistema visual y mapa de interacciones; falta configurar y probar las conexiones interactivas |
| Benchmark de tres portfolios | Revisión exploratoria documentada en `proceso-uxui.md`; falta revisión entre pares |
| Test con tres personas, hallazgos y cambios | Dos pruebas exploratorias registradas; falta una tercera, aclarar un resultado de contacto y decidir cambios a partir de evidencia suficiente |
| Auditoría Lighthouse en mobile y captura del resultado | Pendiente de ejecutar tras publicar |
| README, fuentes, stack y pasos de deploy | Documentado aquí |
| URL pública, repositorio y 10 commits incrementales | Repositorio creado y Pages configurado; verificar el despliegue y continuar el historial con cambios reales |
| Presentación breve del proceso (máximo 10 slides) | El material base está en `proceso-uxui.md`; falta maquetarlo/exportarlo con resultados reales |

## Fuentes y uso de IA

- No se usó un template externo. La estructura y los estilos se implementaron para este portfolio.
- Como referencia visual indicada por el docente se consultó
  <https://ernesto-ledesma-portfolio.vercel.app/> para observar la jerarquía del hero, la
  presentación del perfil y las llamadas a la acción. Se tomó como orientación, sin reutilizar su
  plantilla, textos, métricas ni recursos visuales; el contenido del hero se redactó para el
  perfil académico y los proyectos reales de Eduardo.
- La foto de Eduardo y el banner de Coffea se reutilizan desde los materiales del portfolio local.
- El contenido de proyectos se contrastó con sus archivos, documentación y enlaces de GitHub.
- Se usó asistencia de IA para redactar y revisar el código y la documentación; los datos personales,
  proyectos y estados se contrastaron con la información proporcionada por Eduardo. No se inventaron
  resultados de investigación, pruebas o métricas.
- Las imágenes llevan dimensiones declaradas; la fotografía principal carga con prioridad alta y
  la imagen de Coffea usa carga diferida. La auditoría de peso y Lighthouse queda pendiente.
