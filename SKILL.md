# SKILL: Más diseño para la página — 'mas diseño para la pagina algo diferente'

Descripción
-------------
Habilidad para guiar y generar variaciones de diseño visual y estructural para la página web del proyecto. Facilita un flujo paso a paso para proponer cambios de estilo, estructura HTML y recursos (imágenes, tipografías, paleta de colores) y producir un entregable mínimo (archivos CSS/HTML sugeridos y ejemplos de assets).

Ámbito
------
- Alcance: Workspace-scoped (usa archivos del proyecto y genera/modifica archivos locales).
- Cuando usarla: cuando se quiere una propuesta de diseño alternativa o versiones rápidas de estilo para `index.html`.

Entradas esperadas
------------------
- `objetivo`: breve descripción del objetivo (p.ej., "más moderno y minimalista").
- `prioridad`: qué cambiar primero (colores, tipografía, layout, imágenes).
- `restricciones`: limitaciones (p.ej., mantener HTML actual, no añadir JS, usar imágenes locales).

Proceso paso a paso (flujo humano/automatizable)
-----------------------------------------------
1. Recoger el estado actual: examinar `index.html`, `style.css`/`styles.css` y directorio `imagenes/`.
2. Preguntas rápidas de clarificación si falta información crítica (colores preferidos, referencias visuales, fuentes).
3. Proponer 2-3 líneas de diseño (resumen corto): ejemplo A (limpio), B (colorido), C (tipográfico).
4. Para la opción seleccionada, generar:
   - Paleta de colores (HEX) y uso recomendado.
   - Tipografías sugeridas (con alternativas web-safe).
   - Cambios de layout clave (header, hero, grid, footer).
   - Snippets CSS mínimos (lista de cambios y archivo `styles.css` o `style.css` propuesto).
5. Aplicar cambios opcionales: generar archivos `styles.alt.css` y ejemplo de `index.alt.html` con la estructura mínima para probar el diseño.
6. Checklist de calidad y accesibilidad: contraste, responsive básico, tamaño de texto, órdenes visuales.

Puntos de decisión y lógica de ramificación
-------------------------------------------
- Si el usuario demanda mantener el HTML existente -> generar solo CSS y recomendaciones.
- Si el usuario acepta cambios HTML -> generar `index.alt.html` con la estructura propuesta.
- Si no hay imágenes suficientes -> proponer placeholders y orientación para reemplazo.

Criterios de calidad / checks de finalización
---------------------------------------------
- Propuesta incluida en < 2 alternativas principales.
- CSS entregable mínimo que cambia visualmente la página en vista móvil y escritorio.
- Contraste de texto/ fondo cumple con AA (ratio >= 4.5:1 para texto normal).
- Instrucciones claras para aplicar los cambios (qué archivos reemplazar/añadir).

Salidas esperadas
-----------------
- Archivos generados sugeridos: `styles.alt.css`, `index.alt.html`, `README-design.md` con instrucciones.
- Resumen con paleta, fuentes y explicaciones de las decisiones.

Ejemplos de prompts para usar esta habilidad
-------------------------------------------
- "Quiero un diseño más moderno y minimalista; objetivo: 'mas diseño para la pagina algo diferente'; prioridad: tipografía y paleta; restricciones: mantener HTML".
- "Proponme 2 alternativas rápidas: una colorida y otra monocromática; incluye snippets CSS y un `index.alt.html`."

Iteración y preguntas de clarificación
-------------------------------------
- Si la entrada es ambigua, preguntar:
  1) ¿Preferencia de paleta (fría, cálida, neutra)?
  2) ¿Mantener microinteracciones o JavaScript existente?
  3) ¿Optimización móvil prioritaria?

Notas de implementación para agentes
-----------------------------------
- Inspeccionar y leer `index.html`, `style.css`, `styles.css` si existen.
- No sobrescribir archivos originales sin confirmar; crear archivos alternativos con sufijo `.alt`.
- Validar contraste con reglas básicas y mencionar si se requieren imágenes nuevas.

Sugerencias de personalización posteriores
-----------------------------------------
- Añadir plantillas de componentes (`hero`, `card`, `gallery`) dentro de una carpeta `design-samples/`.
- Integración con un pequeño script para alternar estilos (`data-theme` attributes).

Autor y versión
----------------
Creado: Habilidad generada para el proyecto — versión 0.1
