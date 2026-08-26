# melero-realty

Astro + Tailwind v4. Web de captación de leads para agencias inmobiliarias
(Valeria Melero, CEO). Dominio real: `valeriamelero.com`, ya conectado en
Vercel (`prj_QaE5SswR7rPo6byGrRAnPho8YLZ9`).

## Rediseño "Modernist" (26/8/2026)

La home se rediseñó por completo usando **Claude Design** (claude.ai/design)
en vez de Figma — el usuario no tiene integración con Figma, pero sí con
Claude Design vía la herramienta `DesignSync`. El proceso:

1. Se escribió `DESIGN.md` (brief) con contexto del negocio, qué NO cambiar
   (contenido/estructura de `site.ts`, ya validado) y dirección creativa
   (premium B2B inmobiliario, no genérico de agencia de marketing).
2. El usuario construyó el diseño en claude.ai/design con el sistema
   **Modernist**: tipografía Archivo, cero border-radius, reglas de 2px,
   fotografía en blanco y negro, acento dorado `#b5893c` (extraído del
   logo real — antes el sistema base usaba rojo `#ec3013`).
3. Se importó con `DesignSync` (`get_project`/`list_files`/`get_file`) desde
   el proyecto `Melero Realty` (id `6507e085-be12-4d76-923c-80fee5f7477e`,
   tipo `PROJECT_TYPE_PROJECT` — **no** el proyecto `Modernist`
   `90d9439e-...`, que es solo el sistema de diseño base/reutilizable).
4. Se portó `Melero Realty Landing.dc.html` (formato propio de Claude
   Design, componentes `x-dc`/`image-slot`/`sc-if`) a Astro puro, conectado
   a los datos reales de `src/config/site.ts` (no se reescribió copy).

**Importante para la próxima vez que se use `DesignSync` en este o cualquier
proyecto:** `get_file` tiene un tope duro de 256 KiB. Para imágenes subidas
al proyecto de diseño que pesen más que eso, no se pueden traer completas —
hay que pedirle al usuario que las descargue/envíe directamente.

### Pendiente de esta ronda

- [ ] **Foto del hero** — el diseño final usa un skyline en B/N subido al
  proyecto de Claude Design (`uploads/assets-1787741421281-tgic.png`), pero
  pesa más de 256 KiB y no se pudo traer por `DesignSync`. De momento el
  hero sigue usando `public/images/hero-villa.webp` (la foto de villa
  antigua, con filtro grayscale aplicado) como placeholder. Pedir al
  usuario que la descargue de claude.ai/design y la pase directamente.
- [ ] Verificación visual en navegador — no se pudo levantar Chromium
  headless en este entorno (faltan librerías del sistema como `libnspr4`,
  sin acceso `sudo`). La verificación se hizo por build limpio + revisión
  manual de balance de etiquetas HTML, no por captura de pantalla real.
  Recomendado: abrir `npm run dev` y revisarlo tú mismo antes de darlo por
  bueno del todo, sobre todo en móvil.
- [ ] `contacto.astro` (formulario de 5 pasos) y `sobre-nosotros.astro` se
  migraron a los tokens de color nuevos (`--color-*`) pero conservan su
  estructura/clases Tailwind originales (bordes redondeados, tarjetas
  blancas) — no se les aplicó el tratamiento "sin radius / grid modernista"
  del nuevo sistema. Si se quiere consistencia total, portarlas también.
- [ ] `Footer.astro` perdió el formulario de newsletter que tenía antes
  (usaba `SITE.web3formsKey`, un campo que ni siquiera existía en
  `site.ts` — probablemente ya estaba roto). El nuevo diseño no incluye
  newsletter, solo enlaces de contacto directo.

### Tokens de marca

```
--color-bg:     #f3f2f2
--color-surface:#eae9e9
--color-ink:    #131211  (secciones oscuras a sangre completa: hero, CTA, footer)
--color-text:   #201e1d
--color-accent: #b5893c  (dorado real, del logo)
--radius-md:    0px      (Modernist: cero esquinas redondeadas)
```

Fuente: **Archivo** (pesos 400–900), cargada desde Google Fonts en
`Layout.astro`. Antes era Satoshi vía Fontshare.
