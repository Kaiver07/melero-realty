# melero-realty

Web de Melero Realty, agencia de marketing inmobiliario: capta leads para
inmobiliarias que ya facturan. Valeria Melero es la CEO. Astro 5 estático +
Tailwind v4, desplegado en Vercel desde `main`.

- Producción: **https://www.valeriamelero.com** (con `www`; el dominio
  desnudo devuelve un 308 hacia aquí).
- Proyecto de Vercel: `prj_QaE5SswR7rPo6byGrRAnPho8YLZ9`.
- **Push a `main` = despliegue.** No hay staging. Tarda ~1 minuto.
- El DNS lo gestiona **Cloudflare** desde el 22/10/2026 (`danica` y
  `sonny.ns.cloudflare.com`); antes, Hostinger (`*.dns-parking.com`), que
  sigue siendo donde está registrado el dominio. Los registros se tocan en
  Cloudflare. El A del dominio y el CNAME de `www` van a Vercel en «DNS
  only» (nube gris): con el proxy de Cloudflare delante, Vercel no puede
  emitir el certificado.
- **Correo:** `info@valeriamelero.com` se reenvía a
  `melero.realty@gmail.com` con Email Routing de Cloudflare (desde el
  24/10/2026). Sólo recibe: no hay buzón ni envío como info@. Los MX
  (`route1-3.mx.cloudflare.net`), el SPF y el DKIM (`cf2024-1`) los pone
  Email Routing y salen bloqueados en DNS. Los MX y el SPF de Hostinger se
  borraron ese día: allí no había buzones y el correo se perdía. El
  catch-all está desactivado a propósito.

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

No hay tests ni linter: la comprobación es compilar, `astro check` y mirar
el resultado servido con `preview`.

## Dónde está cada cosa

```
src/config/site.ts     TODO el contenido: copy, servicios, proceso, FAQ,
                       equipo, el caso de la home, enlaces y claves.
src/pages/index.astro  La home entera, sección a sección.
src/layouts/Layout.astro  <head>, schema (Organization sólo con
                       includeOrgSchema), ClientRouter, Vercel Web
                       Analytics (y su evento «contacto») y el motor GSAP.
src/components/        CookieNotice (consentimiento + GA4), Footer, Header
                       (la cabecera de todas las páginas, con sus estilos),
                       VideoEmbed (fachada de YouTube), BlogList, BlogCta,
                       Portada (la portada de la home, con el vídeo),
                       Reserva (la píldora de reserva de la portada) y
                       Testimonio (la reseña de Damián con la foto de
                       Valeria, justo debajo de la portada).
src/styles/global.css  Tokens, DM Sans y cromo compartido (footer, .wrap).
src/styles/home.css    El sistema visual de la home. ~1.100 líneas.
public/video/          El vídeo de la portada (MP4 de 1920 y 1280 px) y su
                       fotograma fijo.
public/images/logo/    El logotipo en SVG, con y sin claim.
src/content/blog/      Un Markdown por artículo; el nombre es el slug.
src/content.config.ts  Esquema de los artículos. Valida imagen, longitudes
                       de título y descripción, y servicios relacionados.
src/pages/blog/        Portada del blog y plantilla de artículo.
src/styles/blog.css    Estilos del blog, prefijo bl-.
src/lib/imagenes.ts    srcsetDe(): el srcset con las versiones reducidas
                       <nombre>-<ancho>.webp que haya en public/. Al cambiar
                       una foto grande, regenerar sus versiones con sharp.
src/pages/404.astro    La 404 propia, con noindex y fuera del sitemap.
public/fonts/          DM Sans variable (300–700), subconjunto latino.
docs/                  Estudio comparativo con otras agencias y propuestas
                       pendientes de aprobar. No se publica en la web.
DESIGN.md, DESIGN-v2.md  Briefs de rediseño. El v2 explica por qué Valeria
                       rechazó la estética «Modernist» del primero: leer
                       antes de proponer un cambio visual grande.
google-apps-script/    El script que recibía el formulario de /contacto.
                       Fuera de uso desde el 24/10/2026 (se quitó la página).
```

Lo pendiente del blog está en `NOTAS.md`. Cada artículo lleva firma
obligatoria (`autores`, sólo nombres de `TEAM`). `npm run check` (astro check) da 28 errores de tipos anteriores
al blog, en los scripts de `CookieNotice`, `Layout` e `index`.

**El copy no se escribe en las plantillas.** Si un texto se repite o puede
cambiar, va en `site.ts` y la plantilla lo pinta. Ya pasó una vez lo
contrario: había tarjetas de servicios con el texto incrustado mientras
`SERVICES` decía otra cosa.

## Reglas que no se rompen

**Ninguna cifra sin las cuatro cosas.** Nombre, empresa, enlace y permiso.
Hoy la web no publica ninguna cifra de resultados: la única que las tenía,
el +30% de ARC, salió el 30/9/2026 con su caso, cuando el de MundialRooms
pasó a ser el de la home (`CASO`, en `site.ts`). Hubo `STATS`, `STATS_BIG` y
tres testimonios con nombres inventados; se borraron el 7/9/2026 y no
vuelven. La regla va de resultados: los precios del catálogo, el descuento
de 50 € del diagnóstico y los años de trayectoria de Valeria son datos del
negocio, dados por ella (`PRODUCT.md`).

**Nada de analítica fuera del consentimiento.** GA4 (`G-3038QG3XN3`) sólo se
carga al pulsar Aceptar: el `<script>` de Google no existe en la página
antes de eso. Aceptar y Rechazar tienen el mismo peso visual a propósito, y
el pie lleva «Preferencias» para cambiar de opinión. Si se toca algo de
esto, la política de cookies tiene que seguir describiendo la realidad —ya
declaró una vez cookies de Google Analytics que no existían.

**Melero mide con GA4 y con Vercel Web Analytics a la vez** (5/10/2026). Es
la excepción: en el resto de webs GA4 se quitó, pero aquí la dueña lo
necesita. Vercel Web Analytics va siempre, con dos `<script>` en el `<head>`
de `Layout.astro` (sin paquete de npm), porque no usa cookies ni guarda nada
en el dispositivo: no pasa por el aviso. Los clics en enlaces con `data-cta`
van a los dos como evento «contacto». Web Analytics tiene que estar activado
en el panel de Vercel, o el script da 404.

**No borrar `public/google824e0cd48fd6c0fc.html`.** Es la verificación de
Search Console. Si desaparece, Google revoca el acceso a la propiedad. Por
lo mismo, **no activar `cleanUrls` en `vercel.json`**: redirigiría ese
archivo. `trailingSlash: true` sí está puesto: manda con un 308 cada página
sin barra a la que la lleva, y no toca los archivos con extensión.
Desde el 21/10/2026, `vercel.json` también redirige con un 308 todo
`melero-realty.vercel.app` a `www.valeriamelero.com`: antes servía la web
entera en esa dirección. Sólo toca ese nombre exacto; las vistas previas de
cada despliegue tienen otro y siguen funcionando. Son tres reglas y hacen
falta las tres: con `trailingSlash`, `/:path*` sólo pillaba los archivos, y
la raíz y las páginas con barra final necesitan la suya.

**Los números de sección se calculan solos.** `index.astro` define un
contador y cada antetítulo llama a `num()`. No escribirlos a mano: cuando lo
estaban había dos `(08)` a la vez, invisibles sólo porque la sección de
Instagram está oculta.

**La sección de Instagram aparece sola.** Se pinta si existen las miniaturas
en `public/images/social/<código>.webp`. Instagram no deja descargarlas por
programa: se aportan a mano.

**Comentarios en las plantillas, con `{/* */}`.** Los `<!-- -->` se publican
en el HTML y cualquiera los lee con «ver código fuente»: la home llegó a
enseñar 19 notas internas sobre conversión y sobre la competencia. Se
pasaron todos a `{/* */}` el 27/9/2026, y así se quedan.

**Enlaces internos con barra final**: `/contacto/`, no `/contacto`. La URL
canónica lleva la barra; sin ella, Vercel sirve la misma página en otra
dirección y Google la ve duplicada.

**No hay diagnóstico por escrito** (desde el 24/10/2026). La página
`/contacto/`, con su formulario de 5 pasos, se quitó: costaba lo mismo que
el diagnóstico por videollamada y llevaba al mismo pago. `vercel.json`
redirige `/contacto/` a `/#planes`, y la otra salida de cada botón de
reserva son los planes. Sin formulario, la política de privacidad sólo
habla de Stripe, Calendly, el correo y WhatsApp: si vuelve un formulario,
hay que volver a contarlo allí. El script de `google-apps-script/` y la
hoja de Yerai se quedan, pero ya no les llega nada.

**La portada y la cabecera siguen a españoladetelefonia.es** (desde el
14/11/2026; las eligió Yerai). La portada (`Portada.astro`) es un vídeo a
sangre: ocho tomas de ciudades de 3,5 s unidas con fundidos, 25 s en
bucle y sin sonido. Encima van el titular, el apoyo y la píldora de
reserva, dentro de la caja de la página (`--maxw`) y sobre un velo del
principal. Lo primero que se pinta es el fotograma fijo, un `<img>` que es
el LCP. El vídeo se pide al terminar la carga y se para fuera de pantalla.
Con movimiento reducido o ahorro de datos no se pide. **No lleva botón de
pausa**, como la portada anterior (Yerai, 21/10/2026), aunque la WCAG
2.2.2 lo pide para lo que se mueve solo más de 5 segundos: si alguien lo
reclama, se pone. El vídeo se rehace con `ffmpeg` desde los originales en
4K, que están en las Descargas de Yerai, no en el repositorio. Va en MP4
porque en WebM pesaba más.
La cabecera (`Header.astro`) es la misma en todas las páginas. Lleva el
logotipo, el menú en una píldora blanca con filetes, el teléfono con
`SITE.horarioCorto` y el botón del Diagnóstico. En la home (`sobreVideo`)
empieza transparente sobre el vídeo, con el logotipo con claim en crema; al
bajar 24 px se vuelve blanca y más baja, con el logotipo sin claim. En el
resto es blanca y fija desde el principio. Por debajo de 1000 px el menú
es un panel desplegable.
Debajo de la portada, `Testimonio.astro`: una banda blanca con la reseña,
la foto de Valeria y los logotipos con lo que es cada uno. Separa la
portada de «El problema», que son las dos oscuras. Revisarla siempre a
1440, 1920 y 2560 px. La portada anterior, «la señal» (el muro de
mensajes con la ficha del lead), está en git hasta el commit `7a8558c`.

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
se lo pide uno al usuario. Si se hace una captura en móvil nada más cargar,
las fotos pueden salir como un bloque gris: esperar un par de segundos
antes de capturar. Pasó con el blog y no era un fallo de la web.

**`@astrojs/react` tiene que ser la 4.x, la de Astro 5.** Con la 6.x
(la de Astro 6) `astro dev` no ejecutaba ningún script: todos los módulos
devolvían 500 («Missing field `moduleType`») y, entre otras cosas, la
cabecera de la home se quedaba transparente al bajar. Se bajó a la 4 el
14/11/2026. No subirla sin subir Astro. Para una captura fiable, Chrome
sin ventana por el protocolo de depuración: ahí sí hay scroll de verdad y
observadores (30/9/2026).

**Los titulares no se animan en móvil, a propósito.** `gsap.from()` deja la
línea desplazada y a opacidad 0 hasta que dispara el ScrollTrigger; en el
teléfono la barra de direcciones cambia la altura del viewport y las
posiciones calculadas caducan, dejando el titular medio caído y medio
invisible. En escritorio se anima, con `ScrollTrigger.refresh()` al cargar
la fuente y una red de seguridad que limpia lo que siga invisible.

**Con el vídeo de la portada en marcha, las capturas de Chrome DevTools se
cuelgan** (`Page.captureScreenshot timed out`), sobre todo con la emulación
de móvil. Antes de capturar, pausar el vídeo desde la consola
(`document.querySelector('.portada-video').pause()`) o verificar por DOM
(14/11/2026).

**Todo revelado necesita red de seguridad.** Si algo parte de `opacity: 0`
esperando a un observador, tiene que haber un plan B que lo muestre. Página
invisible es peor fallo que animación perdida.

## Sistema visual

Todo sale del manual de marca nuevo (14/11/2026; resumen en `PRODUCT.md`,
Brand Commitments). Fuente única: **DM Sans**, una variable de 300 a 700,
servida desde el propio dominio (`public/fonts/`, `@font-face` en
`global.css`, precargada en `Layout.astro`). No volver a Google Fonts: era
una hoja externa que retrasaba el pintado de todas las páginas. El
logotipo es un dibujo en SVG y no se escribe con ninguna fuente.

```
--text   #000000   el texto va en negro, es regla de marca
--ink    #122f35   principal. Planchas oscuras: portada, proceso, cierre, footer
--ink-2  #0d2226   segundo plano oscuro
--teal   #2b6670   secundario, 6.49:1 sobre blanco. Nunca texto sobre --ink
--arena  #cdb59a   acento. Texto sólo sobre oscuro (7.19:1); 1.97:1 sobre blanco
--crema  #f6f0e9   texto y logotipo sobre oscuro, 12.51:1 sobre --ink
--paper  #f1e9de   arena clara, fondo alterno de sección
--teal-papel #2b6670  texto teal sobre --paper, 5.39:1 (ya es el mismo tono)
--muted  #54696e   texto secundario sobre claro, 4.82:1 sobre --paper
--muted-dark #bdc5c6  texto secundario sobre --ink, 8.06:1
--rule   #e2d9cb   filetes
```

Los comentarios de `global.css` llevan el ratio de contraste de cada
pareja. Si se cambia un color, se recalcula y se anota; no se pone «a ojo».

Las secciones alternan fondo —oscuro, arena clara, blanco— para que no se lean como
un bloque. **Nunca dos oscuras seguidas**: pasó entre la portada y «El
problema», y se arregló con el testimonio en medio. Planes y Proceso son
oscuras las dos; desde el 24/10/2026 las separa «El trato», que subió al
sitio del caso. Al mover o quitar una sección, mirar qué queda a cada lado.
Cero esquinas redondeadas salvo las píldoras: la de reserva de la portada y
sus botones, y en la cabecera el menú, el botón del Diagnóstico y el
círculo del teléfono (14/11/2026).

## Deudas conocidas

- **React, Tailwind y `--r-card` están instalados pero casi sin usar.**
  React no tiene ni una isla; `--r-card` no lo referencia nadie. Tailwind
  sólo lo usan las páginas interiores y las legales, que conservan su
  maquetación antigua a base de utilidades mientras la home va con CSS
  propio. Es la costura entre dos rediseños y sigue ahí.
- **Embudos: manda el pago del Diagnóstico** (desde el 19/10/2026; antes,
  Calendly directo). Todos los botones de reserva, también los del menú,
  el blog, sobre-nosotros y la 404, van a `SITE.pagoDiagnosticoUrl`, el
  enlace de pago de Stripe, que tras cobrar redirige a Calendly. **Si ese
  enlace está vacío, el despliegue de producción falla a propósito**
  (`Layout.astro`); en local y en vista previa compila igual. El
  diagnóstico por escrito de `/contacto` se quitó el 24/10/2026. El diagnóstico dura
  90 minutos en todas partes. **Excepción, desde el 21/10/2026:** el botón
  de cada plan, en la sección Planes, va a su propio pago de Stripe
  (`PLANES.destacado.pago` y `PLANES.planes[].pago`); el Diagnóstico
  queda como opción aparte para quien no sabe cuál le encaja.
- **`SERVICES` sigue en `site.ts` aunque la home ya no lo pinta.** Los
  artículos del blog se relacionan con esos seis títulos
  (`content.config.ts`). La home enseña `PLANES`. Si algún día los
  artículos se relacionan con planes, `SERVICES` puede irse.
- **Restos de la portada anterior, inertes** (14/11/2026). En
  `Layout.astro`, `pestanas()` (el cursor del menú viejo, `.nav-links`) y
  la entrada de `.hero-word`. En `home.css`, la deriva de `.hero-word`. Y
  `--muted-apagado` en `global.css`. No pintan nada porque esos elementos
  ya no existen; se pueden borrar.
- **`embla-carousel` sigue en `package.json` sin uso**: sólo lo usaba el
  carrusel de Servicios, que salió el 19/10/2026.
