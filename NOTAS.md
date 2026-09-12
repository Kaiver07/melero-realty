# Notas del blog

Creado y subido a `main` el 12/9/2026, así que **ya está en producción**:
`/blog/` y `/blog/depender-de-los-portales/`. Se publicó antes de que
Valeria revisara el texto, por decisión del usuario; lo de abajo sigue
pendiente igualmente.

## Dónde lo dejamos (12/9/2026)

Siguiente paso: **la imagen propia del artículo de prueba.** Se va a generar
con ChatGPT. Cuando esté:

1. Guardarla como `public/images/blog/depender-de-los-portales.webp` (o `.jpg`).
2. En `src/content/blog/depender-de-los-portales.md`, cambiar `image.src`,
   `width`, `height` y `alt` (el alt, describiendo lo que se ve de verdad).
3. `npm run build`, revisar y subir.

Requisitos de la imagen:

- Vertical 4:5, mínimo 900×1125 (mejor 1080×1350). En escritorio se ve
  entera; en móvil se recorta a 4:3 por el centro, así que lo importante
  tiene que ir en el centro.
- Sin texto, sin cifras legibles en pantallas o papeles, sin logotipos.
- Sin caras reconocibles: no puede pasar por alguien del equipo o un cliente.
- Sin dorado. Neutros con algún acento `#24767B` o `#122F35`.
- Opcional: versión 1200×630 para compartir el enlace (hoy se usa
  `og-melero.jpg`; aceptar una por artículo pide un cambio pequeño en
  `[slug].astro`).

Prompt de partida para ChatGPT:

> Fotografía realista, formato vertical 4:5 (1080x1350). Mesa de trabajo de
> un asesor inmobiliario en un piso luminoso de estilo mediterráneo, suelo
> claro, luz natural cálida de mañana entrando por un ventanal. Sobre una
> mesa de cristal: un móvil boca arriba con la pantalla desenfocada llena de
> notificaciones sin texto legible, una libreta abierta con un esquema de
> flechas dibujado a mano sin palabras ni números, una taza de café y unas
> llaves de piso. Una mano entra por el borde del encuadre, sin que se vea
> la cara de nadie. Encuadre cenital ligeramente inclinado, con los objetos
> principales en el centro. Paleta neutra: blancos, beige, madera clara y
> algún acento en verde azulado oscuro (#24767B) o azul petróleo (#122F35).
> Sin dorado, sin logotipos, sin marcas, sin texto ni cifras en ningún
> sitio. Aspecto de foto de móvil de buena calidad, nada de estética
> publicitaria ni de banco de imágenes.

Pendiente de revisar en un teléfono real: en la vista previa del editor la
foto del artículo salía como un bloque gris en móvil (en escritorio se veía
bien, y el navegador la daba por cargada).

## Qué hay

- `/blog/` — portada con la lista de artículos.
- `/blog/depender-de-los-portales/` — artículo de prueba.
- Los artículos son Markdown en `src/content/blog/`. El nombre del archivo
  es el slug. El frontmatter se valida al compilar (`src/content.config.ts`):
  el build falla si falta la imagen en `public/`, si la descripción no está
  entre 70 y 160 caracteres, si el título no cabe en 60 con « | Melero
  Realty» o si un servicio relacionado no existe en `SERVICES`.
- Los textos fijos del blog (titular, cierre, etiquetas) están en `BLOG`, en
  `src/config/site.ts`.
- Enlace «Blog» en el pie, en la columna Navegación.

## Pendiente de confirmar

- **Texto del artículo de prueba — [PENDIENTE DE CONFIRMAR].** Todo sale de
  `PRODUCT.md` y de `site.ts` (dependencia de portales, los tres síntomas,
  nutrición de leads, KPIs de negocio, lo que se mira en el diagnóstico).
  No hay cifras, ni nombres, ni promesas de «más clientes». Aun así es copy
  nuevo con la marca, y `PRODUCT.md` pide permiso explícito para eso: que lo
  lea Valeria antes de publicarlo.
- **Fecha de publicación — [PENDIENTE DE CONFIRMAR].** Pone 12/9/2026, que es
  el día en que se escribió. Cambiar `publishDate` al día real de salida.
- **Autoría — [PENDIENTE DE CONFIRMAR].** El artículo no lleva firma
  visible y el schema lo atribuye a «Melero Realty» como organización.
  Falta decidir si los artículos los firma Valeria (u otra persona del
  equipo) y con qué nombre.
- **Destino del cierre — [PENDIENTE DE CONFIRMAR].** El botón «Solicitar
  diagnóstico gratuito» va a `/contacto`, igual que en sobre-nosotros. Los
  CTA principales de la home van a Calendly. Es la deuda de los dos embudos
  de `CLAUDE.md`: cuando se decida cuál manda, cambiar `BlogCta.astro`.
- **Enlace en el menú superior — [PENDIENTE DE CONFIRMAR].** Sólo está en el
  pie. Meterlo arriba toca la navegación de la home (que va dentro del
  hero) y la de las interiores, y eso ya es rediseño.
- **Zonas — [PENDIENTE DE CONFIRMAR].** La web no tiene páginas de zona ni
  publica en qué zonas trabaja (sólo «exclusividad por zona»). Por eso los
  artículos se relacionan con servicios, no con zonas. `PRODUCT.md` menciona
  una investigación de palabras clave para Sevilla y Marbella que no está
  en el repositorio; si se quiere escribir sobre zonas, hace falta.
- **Servicios sin página propia.** Los servicios sólo existen como sección de
  la home, así que «Ver todos los servicios» lleva a `/#servicios` y no a una
  página por servicio.
- **Imagen al compartir el enlace.** Los artículos usan la tarjeta general
  del sitio (`og-melero.jpg`, 1200×630). No hay imagen 1200×630 propia para
  el artículo; la foto del artículo es vertical y quedaría recortada.
- **Foto del artículo.** Es `svc-consultoria.webp`, la misma de la tarjeta
  de consultoría de la home. No hay fotos exclusivas para el blog. Se
  descartó `band-campanas.webp` porque en la pantalla del portátil se leen
  cifras (gasto, ROAS) que en un artículo sobre métricas pasarían por
  resultados reales.

## Cambios fuera de las páginas del blog

- `Layout.astro`: prop `ogType` (los artículos van como `article`) y un
  `<slot name="head" />` para el schema del artículo. El resto de páginas no
  cambia.
- `Footer.astro`: enlace «Blog».
- `package.json`: script `check` y `@astrojs/check` en devDependencies, para
  poder ejecutar `npm run check`.

## Lo que avisa `npm run check`

28 errores de tipos, **todos anteriores al blog**: `CookieNotice.astro` (12),
el script del menú y del motor en `Layout.astro` (10) e `index.astro` (6).
Son scripts de navegador sin tipar (`Element` en vez de `HTMLElement`,
posibles `null`). El build no los mira y compila bien, pero `npm run check`
saldrá en rojo hasta que alguien los arregle. En los archivos del blog no hay
ninguno.
