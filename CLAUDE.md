# melero-realty

Web de Melero Realty, agencia de marketing inmobiliario: capta leads para
inmobiliarias que ya facturan. Valeria Melero es la CEO. Astro 5 estático +
Tailwind v4, desplegado en Vercel desde `main`.

- Producción: **https://www.valeriamelero.com** (con `www`; el dominio
  desnudo devuelve un 308 hacia aquí).
- Proyecto de Vercel: `prj_QaE5SswR7rPo6byGrRAnPho8YLZ9`.
- **Push a `main` = despliegue.** No hay staging. Tarda ~1 minuto.
- El DNS lo gestiona **Hostinger** (`*.dns-parking.com`), no Vercel. Los
  registros TXT y demás se tocan allí.

La verdad de negocio —a quién se vende, qué se promete, qué está verificado
y qué no— vive en `PRODUCT.md`. Este archivo es sólo cómo se trabaja el
código.

## Compilar en Windows

`npm run build` y `npx astro build` **fallan** con `'astro' is not
recognized`. Lo que funciona:

```
node node_modules/astro/astro.js build
node node_modules/astro/astro.js preview --port 4321
```

Si salta `Cannot find module @rollup/rollup-win32-x64-msvc`, es el bug
conocido de npm con dependencias opcionales:

```
npm i @rollup/rollup-win32-x64-msvc --no-save
```

## Dónde está cada cosa

```
src/config/site.ts     TODO el contenido: copy, servicios, proceso, FAQ,
                       equipo, el caso de ARC, enlaces y claves.
src/pages/index.astro  La home entera, sección a sección.
src/layouts/Layout.astro  <head>, schema, ClientRouter y el motor GSAP.
src/components/        CookieNotice (consentimiento + GA4), Footer, Header,
                       VideoEmbed (fachada de YouTube), BlogList, BlogCta.
src/styles/global.css  Tokens y cromo compartido (nav, footer, .wrap).
src/styles/home.css    El sistema visual de la home. ~900 líneas.
src/content/blog/      Un Markdown por artículo; el nombre es el slug.
src/content.config.ts  Esquema de los artículos. Valida imagen, longitudes
                       de título y descripción, y servicios relacionados.
src/pages/blog/        Portada del blog y plantilla de artículo.
src/styles/blog.css    Estilos del blog, prefijo bl-.
```

Lo pendiente del blog —firma, fecha, destino del cierre— está en
`NOTAS.md`. `npm run check` (astro check) da 28 errores de tipos anteriores
al blog, en los scripts de `CookieNotice`, `Layout` e `index`.

**El copy no se escribe en las plantillas.** Si un texto se repite o puede
cambiar, va en `site.ts` y la plantilla lo pinta. Ya pasó una vez lo
contrario: había tarjetas de servicios con el texto incrustado mientras
`SERVICES` decía otra cosa.

## Reglas que no se rompen

**Ninguna cifra sin las cuatro cosas.** Nombre, empresa, enlace y permiso.
La única publicable hoy es el +30% de ARC. Hubo `STATS`, `STATS_BIG` y tres
testimonios con nombres inventados; se borraron el 7/9/2026 y no vuelven.

**Nada de analítica fuera del consentimiento.** GA4 (`G-3038QG3XN3`) sólo se
carga al pulsar Aceptar: el `<script>` de Google no existe en la página
antes de eso. Aceptar y Rechazar tienen el mismo peso visual a propósito, y
el pie lleva «Preferencias» para cambiar de opinión. Si se toca algo de
esto, la política de cookies tiene que seguir describiendo la realidad —ya
declaró una vez cookies de Google Analytics que no existían.

**No borrar `public/google824e0cd48fd6c0fc.html`.** Es la verificación de
Search Console. Si desaparece, Google revoca el acceso a la propiedad.

**Los números de sección se calculan solos.** `index.astro` define un
contador y cada antetítulo llama a `num()`. No escribirlos a mano: cuando lo
estaban había dos `(08)` a la vez, invisibles sólo porque la sección de
Instagram está oculta.

**La sección de Instagram aparece sola.** Se pinta si existen las miniaturas
en `public/images/social/<código>.webp`. Instagram no deja descargarlas por
programa: se aportan a mano.

## Trampas que ya nos han mordido

**Especificidad CSS.** `.contenedor p` pesa (0,1,1) y le gana a cualquier
clase suelta (0,1,0). Pasó tres veces: `.band-quote`, `.cta-note` y los
antetítulos de dos secciones, que llevaban meses pintándose a 16px sin que
nadie supiera por qué. `.band-copy` y `.cta` ya están envueltos en
`:where()`, que no aporta especificidad. **Al añadir un párrafo dentro de un
bloque, dale su propia clase** y no confíes en heredar.

**El panel de vista previa no sirve para verificar.** No pinta este sitio,
no ejecuta `IntersectionObserver` y **`scrollTo()` mueve la página sin
emitir el evento `scroll`**, así que todo lo atado al scroll parece roto
aunque esté bien. Verificar por DOM (`getBoundingClientRect`, estilos
computados) y contra el CSS ya compilado en `dist/_astro/*.css`. Lo visual
se lo pide uno al usuario.

**Los titulares no se animan en móvil, a propósito.** `gsap.from()` deja la
línea desplazada y a opacidad 0 hasta que dispara el ScrollTrigger; en el
teléfono la barra de direcciones cambia la altura del viewport y las
posiciones calculadas caducan, dejando el titular medio caído y medio
invisible. En escritorio se anima, con `ScrollTrigger.refresh()` al cargar
Poppins y una red de seguridad que limpia lo que siga invisible.

**Todo revelado necesita red de seguridad.** Si algo parte de `opacity: 0`
esperando a un observador, tiene que haber un plan B que lo muestre. Página
invisible es peor fallo que animación perdida.

## Sistema visual

Fuente única: **Poppins** (300/400/600/700), desde Google Fonts en el
Layout. Sin dorado en ningún sitio salvo el logotipo, que es donde vive.

```
--text   #000000   el texto va en negro, es regla de marca
--ink    #122f35   planchas oscuras: hero, proceso, cierre, footer
--ink-2  #0d2226   segundo plano oscuro
--teal   #24767b   color de identidad, 5.31:1 sobre blanco
--paper  #eaeced   fondo alterno de sección
--muted  #54696e   texto secundario sobre claro, 72%
--muted-dark #bdc5c6  texto secundario sobre --ink, 8.06:1
--rule   #dee2e3   filetes
```

Los comentarios de `global.css` llevan el ratio de contraste de cada
pareja. Si se cambia un color, se recalcula y se anota; no se pone «a ojo».

Las secciones alternan fondo —oscuro, gris, blanco— para que no se lean como
un bloque. Cero esquinas redondeadas salvo la píldora de la barra del hero,
sus botones y el panel del logotipo de ARC, que son la misma forma a
propósito.

## Deudas conocidas

- **React, Tailwind y `--r-card` están instalados pero casi sin usar.**
  React no tiene ni una isla; `--r-card` no lo referencia nadie. Tailwind
  sólo lo usan las páginas interiores y las legales, que conservan su
  maquetación antigua a base de utilidades mientras la home va con CSS
  propio. Es la costura entre dos rediseños y sigue ahí.
- **Dos embudos compitiendo.** Los CTA principales van a Calendly; el
  formulario de 5 pasos de `/contacto`, que es el que guarda el lead en la
  hoja de cálculo, sólo se alcanza desde el pie y desde el enlace «O
  cuéntanoslo por escrito». Falta decidir cuál manda.
- **El envío del formulario no está probado de punta a punta.** Se arregló
  un fallo que lo dejaba mudo, pero nadie ha comprobado con un envío real
  que llegue la fila a Google Sheets.
