# Auditoría SEO · valeriamelero.com

15/11/2026 · **versión nueva en local, todavía sin publicar** (home «de
seguido», páginas `/planes/`, `/proceso/` y `/preguntas/`, comparativa y
planes nuevos), servida con `astro preview` en `localhost:4321`. Producción
(`www.valeriamelero.com`) se ha mirado sólo para lo que en local no existe:
redirecciones, `vercel.app` y cabeceras. Sin datos de Search Console en
esta auditoría.

## Resumen

**La versión nueva está técnicamente sana: rápida, indexable y con datos
estructurados válidos. Lo pendiente es pulido, no hay ningún fallo que
impida posicionar.**

- **Técnico:** las 11 páginas del sitemap responden 200, con canonical
  propio y sin `noindex`; las 3 páginas nuevas ya están en el sitemap. El
  404 es real. `melero-realty.vercel.app` redirige al dominio.
- **Datos estructurados:** JSON-LD válido en todas las páginas que lo
  llevan. La FAQ (FAQPage) ha pasado de la home a `/preguntas/`, que es
  donde están las 8 preguntas a la vista: ahora el marcado coincide con lo
  que se ve.
- **Velocidad:** Lighthouse 100 en escritorio en las 6 páginas medidas y
  97-99 en móvil. Cero saltos de diseño (CLS 0) y cero bloqueo (TBT 0 ms).
- **Títulos:** únicos en todas las páginas. Dos se pasan de largo
  (`/proceso/` 73 caracteres, `/preguntas/` 70).
- **SEO local:** la ficha de Google Business sigue retirada (ver `NOTAS.md`);
  no se ha podido comparar nada con ella.
- **Palabras clave y competencia:** fuera del alcance de esta pasada (ver
  «Cómo se ha hecho»).

### Las acciones que más mueven la aguja

| # | Prioridad | Acción | Quién | Esfuerzo |
| --- | --- | --- | --- | --- |
| 1 | **Alta** | Publicar la versión nueva: hasta entonces Google sigue viendo la home antigua, sin `/planes/`, `/proceso/` ni `/preguntas/`, y `/contacto/` sigue llevando a `/#planes` | Usuario (dar el visto bueno) · Claude (push) | 5 min |
| 2 | **Alta** | Pedir la indexación de `/planes/`, `/proceso/` y `/preguntas/` en Search Console tras publicar, y reenviar el sitemap | Usuario | 10 min |
| 3 | **Alta** | Pedir a Google que restituya la ficha de empresa (pendiente desde el 26/9/2026) | Negocio (Valeria) | — |
| 4 | **Media** | Acortar el title de `/proceso/` (73) y de `/preguntas/` (70) a ≤ 60, y la description de `/proceso/` (176) a ≤ 160 | Claude | 5 min |
| 5 | **Media** | Fotos del diagnóstico en móvil: generar versiones de 480 px y ajustar `sizes` a lo que de verdad ocupa la tarjeta (≤ 560 px). Ahorro medido: ~360 KB por visita en móvil | Claude | 15 min |
| 6 | *Baja* | Cabeceras de seguridad en `vercel.json`: `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options` y `Permissions-Policy` (sólo está HSTS) | Claude | 10 min |
| 7 | *Baja* | `http://valeriamelero.com` da dos saltos (http → https → www). **Revisado en Vercel el mismo día: no se puede evitar.** El dominio sin `www` ya redirige con 308 a `www`; el primer salto (http → https) lo hace Vercel siempre antes que la redirección de dominio | — | — |
| 8 | *Baja* | `/proceso/`: los pasos van en h3 justo debajo del h1 (salta el h2). Pasarlos a h2 o meter un h2 de sección | Claude | 5 min |
| 9 | *Baja* | Datos estructurados: `@id` en la Organization para enlazarla desde los artículos; `BreadcrumbList` en las páginas interiores; un `OfferCatalog` con los planes en `/planes/` (informativo, no da resultado enriquecido) | Claude | 30 min |
| 10 | *Baja* | Póster del vídeo de YouTube sin `width`/`height` (`VideoEmbed.astro`). Hoy no mueve nada (CLS 0) porque el contenedor tiene proporción fija; es higiene | Claude | 2 min |
| 11 | *Baja* | Vídeo de la portada: 2,9 MB en móvil. No afecta al LCP (se pide al terminar la carga), pero sí a los datos del visitante. Valorar una versión de 720 px para pantallas pequeñas | Claude | 20 min |
| 12 | *Baja* | `og:image` propia para cada artículo (su foto en 1200×630): hoy todos comparten `og-melero.jpg` al compartirse en redes | Claude | 15 min |
| 13 | *Baja* | Descriptions de las legales muy cortas (37-57 caracteres). No posicionan nada; se pueden dejar | — | — |

## Cómo se ha hecho

- **Rastreo** propio (`rastreo.mjs` + `analisis.mjs` de la skill) de
  `localhost:4321`: 19 HTML (las 11 locales y las 8 que trae el sitemap de
  producción al seguirlo), 46 recursos.
- **Lighthouse 12** en local, móvil y escritorio, sobre `/`, `/planes/`,
  `/proceso/`, `/sobre-nosotros/`, `/preguntas/` y un artículo. Es
  laboratorio (móvil simulado), no datos de visitantes reales.
- **JSON-LD** leído y validado (parseo) en el HTML compilado de cada tipo de
  página.
- **Producción** con `curl`: redirecciones, `vercel.app`, `/contacto/`, 404 y
  cabeceras.
- **Fuera de esta pasada:** búsquedas en Google y competencia (KW-01 a
  KW-03), directorios (LOC-09) y Search Console (KW-04, MED-04). La
  auditoría de septiembre (`docs/auditoria-seo.md`) cubrió la competencia.

**Falsos positivos descartados.** El análisis automático dio 139 avisos;
la mayoría salen de medir en local: canonical y `og:url` apuntan a
`https://www.valeriamelero.com/…`, como deben, y el rastreador siguió el
sitemap hasta producción y comparó cada página consigo misma («title
duplicado», «huérfana»). El 404 de `/_vercel/insights/script.js` y el error
de consola que baja «Buenas prácticas» a 96 sólo existen en local: ese
script lo sirve Vercel. Los logotipos de la cabecera con `alt=""` son
correctos: el enlace ya lleva su `aria-label`.

## 1. Rastreo e indexación

**Bien**
- Sitemap local con 11 URL, todas 200, canónicas y sin `noindex`; incluye
  las 3 nuevas. `/404` fuera, como debe.
- `robots.txt` abierto, con `Sitemap:` absoluto al dominio real.
- Producción: `https://valeriamelero.com/` → 308 → `https://www.`; sin barra
  final → 308 a la URL con barra; URL inexistente → 404 real con `noindex`.
- `melero-realty.vercel.app/blog/` → 308 → `www.valeriamelero.com/blog/`.

**A mejorar**
- **Alta.** Producción todavía es la versión anterior: `/contacto/` lleva a
  `/#planes` (en local ya va a `/planes/`) y las páginas nuevas no existen.
  Se arregla al publicar.
- *Baja, sin arreglo posible.* `http://valeriamelero.com/` hace dos saltos
  (→ `https://valeriamelero.com/` → `https://www.`).

## 2. Títulos, descripciones y encabezados

**Bien**
- Un title distinto por página y un H1 por página. Sin canibalización: la
  home va a «marketing inmobiliario y captación de leads», `/planes/` a
  «planes y precios de marketing inmobiliario».
- `/planes/` lleva un H1 sólo para lectores de pantalla («Planes y precios
  de Melero Realty») porque su primera sección visible es la comparativa.

**A mejorar**
- **Media.** `/proceso/` 73 caracteres («Cómo trabajamos: cinco fases, del
  diagnóstico al escalado | Melero Realty»); `/preguntas/` 70. Google corta
  hacia los 60. Description de `/proceso/`: 176.
- *Baja.* `/proceso/` salta de H1 a H3 (Lighthouse `heading-order`,
  accesibilidad 98).

## 3. Datos estructurados

| Página | Tipos | Estado |
| --- | --- | --- |
| `/` | Organization, WebSite | Válido. Organization con `logo` (512×512), `email` info@, `telephone` +34, `sameAs` Instagram y `founder` con LinkedIn y YouTube |
| `/sobre-nosotros/` | Organization | Válido |
| `/preguntas/` | FAQPage (8 preguntas) | Válido; coincide con lo visible. Informativo: Google ya no lo enseña a negocios |
| `/blog/<artículo>/` | BlogPosting, BreadcrumbList | Válido: `headline`, `image` 900×1125, fechas ISO con zona, dos `author` con `url` y `sameAs` (Yerai con su LinkedIn desde hoy), `publisher` con logo |
| `/planes/`, `/proceso/`, `/blog/`, legales | — | Sin JSON-LD |

**Bien**
- Todo el JSON-LD parsea sin errores y describe contenido visible.
- La FAQ ya no está marcada en la home, donde ahora sólo se ven 4 de las 8.
- Ni `aggregateRating` ni reseñas propias marcadas.

**A mejorar**
- *Baja.* Sin `@id` en la Organization: los artículos repiten la empresa en
  `publisher` y `worksFor` en vez de enlazarla.
- *Baja.* `BreadcrumbList` sólo en los artículos.
- *Baja.* `/planes/` sin marcado de la oferta. Un `OfferCatalog` con los
  cuatro planes y sus precios + IVA ayudaría a los buscadores con IA a leer
  el catálogo; no da resultado enriquecido en Google.
- n. a. LocalBusiness: Melero es nombre comercial de persona física, sin
  local abierto; la ficha está retirada. Se decide cuando vuelva la ficha.

## 4. Rendimiento y Core Web Vitals

| Página | Móvil | Escritorio | LCP móvil | CLS | TBT |
| --- | --- | --- | --- | --- | --- |
| `/` | 97 | 100 | 2,6 s | 0 | 0 ms |
| `/planes/` | 97 | 100 | 2,5 s | 0 | 0 ms |
| `/proceso/` | 99 | 100 | 2,0 s | 0 | 0 ms |
| `/sobre-nosotros/` | 98 | 100 | 2,3 s | 0 | 0 ms |
| `/preguntas/` | 99 | 100 | 2,0 s | 0 | 0 ms |
| artículo | 97 | 100 | 2,6 s | 0 | 0 ms |

Accesibilidad 100 (98 en `/proceso/`), SEO 100 en todas.

**Bien**
- Escritorio a 100 en todas. CLS 0 y TBT 0 en todas.
- El LCP de la home es el titular (texto), no una imagen ni el vídeo. Sus
  fases: TTFB 455 ms y 2,1 s de espera hasta pintarse, sin descargas en
  medio. El vídeo de la portada se pide al terminar la carga y no cuenta.

**A mejorar**
- **Media.** Móvil, home: Lighthouse calcula ~360 KB de ahorro en
  imágenes. Las tres fotos del diagnóstico (`diagnostico-informe`,
  `band-campanas`, `svc-consultoria`) se piden en su versión grande
  (1.100/900 px) porque `sizes` dice `100vw` y no hay versión intermedia; en
  el teléfono la tarjeta mide como mucho 560 px.
- *Baja.* LCP de la home y del artículo en móvil, 2,6 s: una décima por
  encima del umbral «bueno» en laboratorio. El retraso es de pintado (la
  fuente), no de red. Vigilar con datos reales cuando los haya.
- *Baja.* Vídeo de portada: 2,9 MB en móvil (versión de 1280 px).

## 5. Contenido

**Bien**
- La home cuenta el diagnóstico y los planes con precio; el detalle tiene
  página propia (`/planes/`, `/proceso/`, `/preguntas/`).
- E-E-A-T: equipo real con foto, rol y biografía en `/sobre-nosotros/`
  (Valeria con su trayectoria y LinkedIn; Yerai con su LinkedIn), reseña
  real de MundialRooms con nombre, datos legales completos en el aviso
  legal, artículos firmados con experiencia de los diagnósticos.
- Sin cifras de resultados publicadas (regla de la web) y la comparativa no
  inventa datos de la competencia.

**A mejorar**
- *Baja.* Dos artículos en el blog. Más artículos con la experiencia de los
  diagnósticos reforzarían las búsquedas informativas (pendiente de
  `NOTAS.md`).

## 6. Enlazado interno

**Bien**
- Menú y pie llevan a `/planes/`, `/proceso/`, `/sobre-nosotros/#equipo`,
  `/preguntas/` y `/blog/` desde todas las páginas (11 enlaces entrantes
  cada una). Los dos artículos enlazan ya a `/planes/`, `/proceso/` y
  `/preguntas/`, no a anclas de la home.
- Ningún enlace interno roto.

## 7. Imágenes

**Bien**
- 31 imágenes distintas, ninguna de más de 200 KB; WebP con `srcset`.
- `alt` descriptivo en las de contenido.

**A mejorar**
- **Media.** Versiones intermedias de las fotos del diagnóstico (ver 4).
- *Baja.* Póster del vídeo de YouTube sin `width`/`height`.

## 8. SEO local

- **LOC-01 a LOC-08: pendiente.** La ficha de Google Business está retirada
  desde el 26/9/2026 (`NOTAS.md`). Hasta que vuelva no hay nada que comparar.
- NAP de la web, para entonces: Melero Realty · +34 674 82 90 42 ·
  `info@valeriamelero.com` (desde hoy) · lunes a viernes 9-14 y 16-18 · sin
  dirección publicada (Nerva, Huelva, como sede; atención en la agencia del
  cliente).

## 9. Palabras clave y competencia

No se ha repetido en esta pasada. La correspondencia actual página →
búsqueda: home → «agencia de marketing inmobiliario», «captación de leads
inmobiliaria»; `/planes/` → «precio marketing inmobiliario»; blog →
«dependencia de portales inmobiliarios», «coste por lead inmobiliaria».

## 10. Seguridad, móvil y accesibilidad

**Bien**
- HTTPS con HSTS de 2 años. Sin scroll horizontal a 390 px en ninguna página
  (comprobado en Chrome). Aviso de cookies con Aceptar y Rechazar al mismo
  nivel, sin bloquear la página.

**A mejorar**
- *Baja.* Faltan `X-Content-Type-Options`, `Referrer-Policy`,
  `X-Frame-Options` y `Permissions-Policy`.

## 11. Medición

- Search Console verificado (archivo `google824e0cd48fd6c0fc.html`), GA4
  con consentimiento y Vercel Web Analytics, con el evento «contacto» en
  cada botón de reserva y de plan (los de la home llevan `-home` desde hoy).
- Tras publicar: reenviar el sitemap y pedir indexación de las 3 páginas
  nuevas (acción 2).

## Estado de la checklist

| Código | Hoy | 27/9/2026 | Nota |
| --- | --- | --- | --- |
| RAS-01 | OK | OK | 11 URL, todas 200 y canónicas |
| RAS-02 | OK | OK | |
| RAS-03 | OK | OK | |
| RAS-04 | aviso | — | http sin www: dos saltos |
| RAS-05 | OK | — | vercel.app → dominio (308) |
| RAS-06 | OK | OK | |
| RAS-07 | OK | — | `lastmod` sólo en los artículos |
| RAS-08 | OK | OK | |
| TIT-01 | OK | OK | |
| TIT-02 | aviso | OK | `/proceso/` 73, `/preguntas/` 70 |
| TIT-03 | aviso | OK | `/proceso/` 176; legales cortas |
| TIT-04 | aviso | OK | `/proceso/` salta de H1 a H3 |
| TIT-05 | OK | — | |
| SCH-01 | OK | OK | |
| SCH-02 | n. a. | n. a. | sin ficha ni local |
| SCH-03 | n. a. | n. a. | sin horario marcado |
| SCH-04 | aviso | aviso | sin `@id`; `sameAs` sólo Instagram en la empresa |
| SCH-05 | n. a. | n. a. | |
| SCH-06 | OK | OK | |
| SCH-07 | OK | OK | |
| SCH-08 | aviso | — | migas sólo en artículos |
| SCH-09 | OK | aviso | FAQ en `/preguntas/`, ya no en la home |
| REN-01 | OK | OK | 97-100 |
| REN-02 | aviso | aviso | LCP móvil 2,6 s en home y artículo (laboratorio) |
| REN-03 | n. a. | n. a. | sin CrUX |
| REN-04 | OK | OK | YouTube con fachada, se carga al pulsar |
| REN-05 | OK | OK | el LCP es texto; el fotograma de la portada, `eager` |
| REN-06 | OK | OK | Brotli; `_astro/` con `max-age=31536000, immutable` |
| CON-01 | OK | aviso | planes con página propia |
| CON-02 | n. a. | n. a. | sin páginas de zona |
| CON-03 | — | — | no revisado en esta pasada |
| CON-04 | OK | aviso | equipo, legales y artículos con experiencia |
| CON-05 | OK | OK | |
| CON-06 | OK | OK | |
| CON-07 | OK | OK | fotos propias |
| ENL-01 | OK | OK | |
| ENL-02 | OK | aviso | todas enlazadas desde el menú |
| ENL-03 | OK | — | |
| ENL-04 | OK | — | artículos → planes, proceso y preguntas |
| ENL-05 | OK | OK | |
| IMG-01 | OK | OK | |
| IMG-02 | aviso | OK | póster de YouTube sin medidas |
| IMG-03 | aviso | aviso | ~360 KB de ahorro en móvil |
| IMG-04 | aviso | aviso | la misma og:image en todas, también en los artículos |
| LOC-01…09 | pendiente | pendiente | ficha retirada |
| KW-01…04 | — | OK | no revisado en esta pasada |
| SEG-01 | OK | OK | |
| SEG-02 | aviso | aviso | sólo HSTS |
| SEG-03 | OK | OK | |
| SEG-04 | OK | OK | |
| MED-01 | aviso | OK | reenviar sitemap tras publicar |
| MED-02 | OK | OK | |
| MED-03 | — | — | |
| MED-04 | — | — | |

## Fuentes

- Google Search Central, títulos: https://developers.google.com/search/docs/appearance/title-link
- Datos estructurados (introducción y FAQPage): https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data · https://developers.google.com/search/docs/appearance/structured-data/faqpage
- Organization: https://developers.google.com/search/docs/appearance/structured-data/organization
- Core Web Vitals: https://web.dev/articles/vitals
- Imágenes adaptables (`srcset`/`sizes`): https://web.dev/articles/serve-responsive-images
- Cabeceras de seguridad: https://developer.mozilla.org/en-US/observatory

## Anexo: datos por página (local)

| Página | Title (car.) | Description (car.) | H1 | Palabras | JSON-LD |
| --- | --- | --- | --- | --- | --- |
| `/` | 59 | 128 | 1 | 778 | Organization, WebSite |
| `/planes/` | 58 | 143 | 1 | 720 | — |
| `/proceso/` | 73 | 176 | 1 | 519 | — |
| `/preguntas/` | 70 | 157 | 1 | 523 | FAQPage |
| `/sobre-nosotros/` | 57 | 148 | 1 | 361 | Organization |
| `/blog/` | 46 | 150 | 1 | 153 | — |
| `/blog/coste-por-lead-y-coste-por-cliente/` | 60 | 144 | 1 | 803 | BlogPosting, BreadcrumbList |
| `/blog/depender-de-los-portales/` | 57 | 144 | 1 | 890 | BlogPosting, BreadcrumbList |
| `/aviso-legal/` | 27 | 51 | 1 | 194 | — |
| `/politica-de-privacidad/` | 38 | 57 | 1 | 251 | — |
| `/politica-de-cookies/` | 35 | 37 | 1 | 353 | — |
