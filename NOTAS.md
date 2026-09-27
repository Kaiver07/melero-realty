# Notas del blog

Creado y subido a `main` el 12/9/2026, así que **ya está en producción**:
`/blog/` y `/blog/depender-de-los-portales/`. Se publicó antes de que
Valeria revisara el texto, por decisión del usuario; lo de abajo sigue
pendiente igualmente.

## Fotos de los artículos

Los dos artículos tienen foto propia desde el 26/9/2026, generada con
ChatGPT, en `public/images/blog/<slug>.webp`. Se reducen a 900×1125 con
`sharp` (ya viene instalado con Astro), como el resto de fotos de la web:
la original de ChatGPT sale a 1122×1402 y pesa más del doble.

Para un artículo nuevo:

1. Generar la foto con los requisitos de abajo.
2. Guardarla como `public/images/blog/<slug>.webp`, a 900×1125.
3. En el Markdown del artículo, poner `image.src`, `width`, `height` y `alt`
   (el alt, describiendo lo que se ve de verdad).
4. `npm run build`, revisar y subir.

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

Prompt con el que se hizo la del primer artículo:

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

Resuelto el 26/9/2026: la foto que salía gris en móvil era cosa del panel
de vista previa, que hacía la captura antes de pintarla. Con el CSS
original y esperando 2,5 s antes de capturar, sale bien. No es un fallo de
la web.

## Segundo artículo (26/9/2026)

`/blog/coste-por-lead-y-coste-por-cliente/` — «Los tres números que dicen si
tu captación funciona». Sale de `PRODUCT.md` y `site.ts` (KPIs de negocio,
datos útiles hacia los 20 días, decisiones que rara vez se cierran en cuatro
semanas, «dos o tres números» de `PILARES`). Sin cifras de resultados ni
ejemplos con números. **Texto pendiente de revisión por Valeria
[PENDIENTE DE CONFIRMAR]**, igual que el primero.

Foto definitiva puesta el 26/9/2026:
`public/images/blog/coste-por-lead-y-coste-por-cliente.webp`, generada con
ChatGPT y reducida a 900×1125 (como el resto de fotos de la web). Sustituye
a la provisional `real-guiones.webp`. Prompt con el que se hizo:

> Fotografía realista, formato vertical 4:5 (1080x1350). Vista cenital de
> una mesa de madera clara en una oficina luminosa. Encima: una libreta
> abierta con una tabla de tres columnas dibujada a mano y algunas marcas de
> verificación, sin palabras ni números legibles; una calculadora de
> sobremesa apagada, con la pantalla en blanco; un bolígrafo negro; un juego
> de llaves de piso con llavero de cuero; un móvil boca abajo; una taza de
> café. Una mano sujeta el bolígrafo sobre la libreta, sin que se vea la
> cara de nadie. Luz natural suave de mañana entrando desde un lateral. Los
> objetos principales, en el centro del encuadre. Paleta neutra: blancos,
> beige y madera clara, con algún acento en verde azulado oscuro (#24767B) o
> azul petróleo (#122F35), por ejemplo en la tapa de la libreta. Sin dorado,
> sin logotipos, sin marcas, sin texto ni cifras en ningún sitio, sin
> pantallas encendidas. Aspecto de foto de móvil de buena calidad, nada de
> estética publicitaria ni de banco de imágenes.

Contradicción vista al escribirlo, resuelta el 26/9/2026: la revisión con
el cliente es **cada 15 días**, como decía `PILARES`. Se corrigió «reporte
semanal» en `COMPARISON`, en la tarjeta flotante de la home, en
sobre-nosotros y en `PRODUCT.md`. Se dejó «semana a semana» donde habla de
ajustar las campañas (paso 04 del proceso y el párrafo de introducción de
la home), que es otra cosa.

## Qué hay

- `/blog/` — portada con la lista de artículos.
- `/blog/depender-de-los-portales/` — primer artículo (12/9/2026).
- `/blog/coste-por-lead-y-coste-por-cliente/` — segundo artículo (26/9/2026).
- Los artículos son Markdown en `src/content/blog/`. El nombre del archivo
  es el slug. El frontmatter se valida al compilar (`src/content.config.ts`):
  el build falla si falta la imagen en `public/`, si la descripción no está
  entre 70 y 160 caracteres, si el título no cabe en 60 con « | Melero
  Realty» o si un servicio relacionado no existe en `SERVICES`.
- Los textos fijos del blog (titular, cierre, etiquetas) están en `BLOG`, en
  `src/config/site.ts`.
- Enlace «Blog» en el menú de arriba (también en móvil) y en el pie.

## Pendiente de confirmar

- **Texto del artículo de prueba — [PENDIENTE DE CONFIRMAR].** Todo sale de
  `PRODUCT.md` y de `site.ts` (dependencia de portales, los tres síntomas,
  nutrición de leads, KPIs de negocio, lo que se mira en el diagnóstico).
  No hay cifras, ni nombres, ni promesas de «más clientes». Aun así es copy
  nuevo con la marca, y `PRODUCT.md` pide permiso explícito para eso: que lo
  lea Valeria antes de publicarlo.
- **Fecha de publicación — [PENDIENTE DE CONFIRMAR].** Pone 12/9/2026, que es
  el día en que se escribió. Cambiar `publishDate` al día real de salida.
- **Autoría — resuelto el 26/9/2026.** Los artículos los firman Valeria
  Melero y Yerai Jiménez. Firma visible en la cabecera de cada artículo,
  con enlace al equipo de sobre-nosotros, y `author` de tipo `Person` en el
  schema. El campo `autores` del frontmatter es obligatorio y sólo acepta
  nombres de `TEAM`.
- **Destino del cierre — resuelto el 26/9/2026: manda Calendly.** El botón
  del cierre del blog y el de sobre-nosotros van a Calendly, como los de la
  home, y debajo queda «O cuéntanoslo por escrito» hacia `/contacto/`. La
  llamada dura 45 minutos (antes el blog y sobre-nosotros decían 30).
- **Oferta de los 20 días** — confirmada vigente el 26/9/2026.
- **Masterclass «Captación sin portales» — [PENDIENTE DE CONFIRMAR]** si
  sigue vigente.
- **Google Business Profile.** Melero tiene ficha, pero Google la ha
  retirado por ahora (26/9/2026). Las mejoras de SEO local del estudio de
  `docs/` quedan en espera hasta recuperarla.
- **Enlace en el menú superior — resuelto el 26/9/2026.** «Blog» va en el
  menú de arriba de la home y de las interiores, además del pie. En móvil
  es el único enlace del menú que queda visible (clase `nav-keep`).
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
- **Fotos de los artículos — resuelto el 26/9/2026.** Cada artículo tiene
  su foto propia (ver «Fotos de los artículos», arriba). Si alguna vez hace
  falta una provisional, no usar `band-campanas.webp`: en la pantalla del
  portátil se leen cifras (gasto, ROAS) que en un artículo sobre métricas
  pasarían por resultados reales.

## Cambios fuera de las páginas del blog

- `Layout.astro`: prop `ogType` (los artículos van como `article`) y un
  `<slot name="head" />` para el schema del artículo. El resto de páginas no
  cambia.
- `Footer.astro`: enlace «Blog».
- `index.astro`, `home.css` y `Header.astro`: «Blog» en el menú de arriba.
  En móvil el menú esconde las anclas pero no el blog (clase `nav-keep`).
- `package.json`: script `check` y `@astrojs/check` en devDependencies, para
  poder ejecutar `npm run check`.

## Lo que avisa `npm run check`

28 errores de tipos, **todos anteriores al blog**: `CookieNotice.astro` (12),
el script del menú y del motor en `Layout.astro` (10) e `index.astro` (6).
Son scripts de navegador sin tipar (`Element` en vez de `HTMLElement`,
posibles `null`). El build no los mira y compila bien, pero `npm run check`
saldrá en rojo hasta que alguien los arregle. En los archivos del blog no hay
ninguno.
