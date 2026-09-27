# Auditoría SEO de valeriamelero.com

Fecha: 27/9/2026. Web en producción (https://www.valeriamelero.com) y código
del repositorio. Criterio: la documentación oficial de Google Search Central
y, donde ella remite, otras fuentes de Google (web.dev, ayuda de Google
Business Profile, directrices de evaluadores).

**Aviso sobre las versiones.** La auditoría empezó con producción en el
commit `d5b52f4`. Hacia las 12:20 se publicaron `a2c1be8` y `a1a53c9`, que
traían los cambios que hasta entonces sólo estaban en local. Desde esa hora,
producción y código coinciden (comprobado página a página a las 12:24). Lo
que ese despliegue arregló está en «Lo que ya está bien»; la tabla de
problemas sólo recoge lo que sigue abierto.

## Estado después de los arreglos (27/9/2026, tarde)

Lo que se ha arreglado en el código a partir de esta auditoría. Las
filas de la tabla del apartado 2 se dejan como estaban, para que se vea de
dónde se partió; esto dice en qué quedó cada una.

| # | Estado | Qué se hizo |
|---|---|---|
| 1 | Arreglado | Enlace «Sobre nosotros» en el pie de todas las páginas y «Conoce al equipo y cómo trabajamos» en la sección de equipo de la home. |
| 2 | **Pendiente de datos de Valeria** | Los textos los aprueba Yerai, que lleva la web; lo que les falta es experiencia de primera mano de los diagnósticos, y eso hay que pedírselo a Valeria (`NOTAS.md`). |
| 3 | Arreglado, con textos provisionales | Biografía corta por persona en sobre-nosotros, con ancla (`#valeria-melero`, `#yerai-jimenez`, `#carlos-bernabe`). La firma y `author.url` llevan a cada una; `sameAs` de Valeria con su LinkedIn y su canal de YouTube. Las biografías sólo dicen lo confirmado en `PRODUCT.md`: falta la trayectoria de cada uno. |
| 4 | Arreglado salvo el NIF | Aviso legal y privacidad identifican a la titular: Valeria Melero Maldonado, nombre comercial Melero Realty. La privacidad ya no habla de una newsletter que no existe. El NIF lo aporta Valeria; el domicilio y el consentimiento del formulario, revisión legal. |
| 5 | Arreglado | «Agencia de marketing inmobiliario» en el título de la home y en el antetítulo del hero. |
| 6 | **Pendiente, no es de código** | Comprobar si Melero cumple las normas de Google Business Profile antes de pedir que restituyan la ficha. |
| 7 | Arreglado | Poppins servida desde el propio dominio; fuera la hoja de Google Fonts, sus dos conexiones previas y la de `img.youtube.com`; imágenes con `srcset` (fila 21). Medición en local, mediana de 3 pasadas de Lighthouse 13.5.0 en móvil, antes y después con el mismo método: home, rendimiento 93 → 98, FCP 2,36 → 1,66 s, LCP 2,75 → 2,16 s; artículo, 94 → 98, FCP 2,36 → 1,66 s, LCP 2,57 → 2,11 s. Incrustar las hojas propias (`inlineStylesheets: 'always'`) se probó y no mejora (LCP de la home, 2,25 s): descartado. |
| 8 | **Pendiente de datos de Valeria y permiso de ARC** | El caso ARC como artículo necesita los detalles del trabajo, que tiene Valeria, y, para lo nuevo, permiso de ARC. |
| 9 | **Pendiente de contenido** | Páginas de servicios: necesitan contenido propio (para quién es cada servicio, qué incluye, cómo se mide), con datos de Valeria, para no ser páginas vacías. |
| 10 | Arreglado, a comprobar tras publicar | `"trailingSlash": true` en `vercel.json`, sin `cleanUrls`. |
| 11 | Arreglado | `fetchpriority="high"` en la foto de los artículos. |
| 12 | Arreglado | `WebSite` con el nombre del sitio en la home. |
| 13 | Arreglado | Fechas ISO con hora y zona de Madrid (`2026-09-12T00:00:00+02:00`) en el schema y en `article:published_time`; la fecha visible dice «Publicado el». La fecha real del primer artículo sigue pendiente. |
| 14 | Arreglado en parte | `founder` con `url` a su biografía y `sameAs` (LinkedIn y YouTube, que son de Valeria y no de la empresa). `Organization.sameAs` sigue con Instagram. `telephone` y otros perfiles, pendientes de confirmar. |
| 15 | Arreglado | Título de sobre-nosotros: «Quiénes somos: Valeria Melero y el equipo». Descripción de contacto que describe el formulario por escrito. |
| 16 | Arreglado | Títulos para Google: «Dependencia de los portales inmobiliarios» y «Coste por lead y por cliente en inmobiliaria». |
| 17 | Arreglado | «O pide el diagnóstico por escrito» (home, blog, sobre-nosotros) y «Política de cookies» en el aviso. |
| 18 | Arreglado | `src/pages/404.astro`, con `noindex`, sin canónica y fuera del sitemap. |
| 19 | Arreglado | `lastmod` en los dos artículos y en la portada del blog, leído de su frontmatter; el resto, sin fecha. |
| 20 | Arreglado en parte | `max-image-preview:large` en todas las páginas. Faltan fotos de al menos 1200 px en 16:9, 4:3 y 1:1. |
| 21 | Arreglado | Versiones de 300 a 1200 px y `srcset` en el hero, la banda, los servicios, el cierre, la foto de los artículos y las miniaturas del blog. |
| D10 | Arreglado | Antetítulos sobre `--paper` con `--teal-papel` (#237479, 4,61:1); títulos del pie en `h3`; el botón del vídeo se llama «Ver el vídeo: …», como lo que enseña; área táctil del enlace del vídeo de 21 a 34 px. |

Los textos los decide Yerai Jiménez, que lleva la web (27/9/2026); a
Valeria sólo se le piden datos. Donde la tabla del apartado 2 dice
«requiere aprobación de Valeria», ya no aplica.

## 1. Resumen

1. Lo técnico está en orden (HTTPS, www, robots.txt, sitemap, canónicas, un H1 por página, datos estructurados válidos, Lighthouse SEO 100): lo que frena a la web es el contenido y la autoría.
2. Los dos artículos van firmados por Valeria y Yerai, pero su texto sigue pendiente de revisión, sale de documentos internos sin experiencia propia y la firma lleva a un equipo sin biografías.
3. «Sobre nosotros», la página que dice quién está detrás, no se enlaza desde el menú, el pie ni la home, y el aviso legal no dice qué persona responde de la web.
4. En móvil, el LCP de laboratorio es 2,87 s en la home y 3,02 s en el artículo (objetivo: 2,5 s) por las hojas de estilo que bloquean el pintado; sin datos de usuarios reales, el INP no se conoce.
5. Sin datos de volumen no se sabe qué búsquedas atacar: la home no dice «agencia de marketing inmobiliario», los servicios no tienen página y la única prueba de primera mano (ARC) vive en una sección de la home.

## 2. Problemas

21 problemas abiertos: 3 de prioridad alta, 6 media y 12 baja. Todos están
igual en producción y en el código salvo el 6, que no depende del código. No
hay ninguno que exista sólo en el código local: los dos que estaban
arreglados en local sin publicar (enlaces sin barra final y
`ProfessionalService`) se publicaron el 27/9/2026 y están en el apartado 3.

Prioridad: **alta**, afecta a cómo Google entiende quién está detrás y a la
calidad del contenido; **media**, mejora la elegibilidad o una señal
concreta; **baja**, higiene o mejora marginal. Esfuerzo: **bajo**, menos de
una hora; **medio**, de una hora a un día o depende de textos de Valeria;
**alto**, más de un día. Ordenada por prioridad y después por esfuerzo.

| Página | Problema | Por qué importa | Cómo arreglarlo | Prioridad | Esfuerzo | Estado |
|---|---|---|---|---|---|---|
| Todas (menú y pie) y `/sobre-nosotros/` | **1. «Sobre nosotros» casi no se enlaza.** No está en el menú, ni en el pie, ni en la home: sólo llegan a ella las dos firmas del blog. Es la página que explica quién está detrás y una de las dos que llevan `Organization`. | «Every page you care about should have a link from at least one other page on your site»: Google descubre y entiende las páginas a través de los enlaces ([enlaces][links]). Los evaluadores de Google buscan quién está detrás en las páginas «about us» y «contact us», empezando por la home (secciones 2.5.2 y 2.5.3 de las [directrices de evaluadores][qrg]). | Añadir `{ href: '/sobre-nosotros/', label: 'Sobre nosotros' }` al array `nav` de `src/components/Footer.astro` y valorar lo mismo en `Header.astro` y en el menú de la home (`index.astro`). En la sección «Equipo» de la home, un enlace a `/sobre-nosotros/`. Siempre con barra final. **Texto visible: requiere aprobación de Valeria.** | Alta | Bajo (20 min) | En producción y en el código |
| `/blog/depender-de-los-portales/` y `/blog/coste-por-lead-y-coste-por-cliente/` | **2. Artículos firmados, sin revisar y sin experiencia propia.** Los firman Valeria Melero y Yerai Jiménez, pero `NOTAS.md` dice que el texto sigue pendiente de revisión por Valeria. Se redactaron a partir de `PRODUCT.md` y `site.ts` (commits `acfcc9e` y `98f30dd`, co-firmados por Claude): definiciones y consejos generales, sin nada visto en un diagnóstico real. | Google pregunta si el contenido aporta información o análisis originales y experiencia de primera mano, si queda claro quién lo escribió y si el uso de IA es evidente ([contenido útil][hc]); pide contar cómo se creó el contenido automatizado ([contenido con IA][genai]). Lo genérico es lo que su guía de IA llama contenido «commodity» ([guía de IA][aiopt]). Los evaluadores valoran la experiencia de primera mano (sección 3.4, [directrices][qrg]). | Que Valeria revise cada artículo y añada lo que sólo sabe quien hace diagnósticos: qué aparece al auditar la captación de una agencia, qué errores se repiten, cómo se eligen las dos o tres métricas. Sin cifras que no tengan nombre, empresa, enlace y permiso; sin prometer «más clientes»; sin dar por hecho que el lector no publica en portales. Si no lo revisa, que no lo firme. Decidir si se cuenta el uso de IA (Google lo sugiere, no lo exige). Archivos: `src/content/blog/*.md` y `NOTAS.md`. **Requiere aprobación de Valeria.** | Alta | Medio (1–2 h de Valeria por artículo + 1 h de edición) | En producción y en el código |
| Artículos y `/sobre-nosotros/` | **3. La firma no lleva a ninguna biografía.** «Por Valeria Melero y Yerai Jiménez» enlaza a `/sobre-nosotros/#sn-team`, donde sólo hay foto, nombre y cargo. En el `BlogPosting`, los dos autores comparten `url` (`/sobre-nosotros/`) y ninguno tiene `sameAs`. La página no cuenta la trayectoria de nadie. | «Do bylines lead to further information about the author or authors involved, giving background about them?» ([contenido útil][hc]). En `Article`, `author.url` debe llevar a una página que identifique de forma única al autor, o hay que usar `sameAs` ([Article][article]). | Añadir a `TEAM` (`src/config/site.ts`) una biografía corta por persona (trayectoria real y qué hace en Melero) y su perfil público; pintarla en `sobre-nosotros.astro` con un ancla por persona (`id="valeria-melero"`, `id="yerai-jimenez"`). En `src/pages/blog/[slug].astro`, que cada firma enlace a su ancla, `author.url` a esa misma dirección y `sameAs` a su LinkedIn (`SITE.social.linkedin` para Valeria; el de Yerai, [PENDIENTE DE CONFIRMAR]). Sin «yoísmo» (`PRODUCT.md`). **Requiere aprobación de Valeria.** | Alta | Medio (2–3 h de código + los textos) | En producción y en el código |
| `/aviso-legal/` y `/politica-de-privacidad/` | **4. No dice qué persona responde de la web.** El titular y el responsable son «Melero Realty», un nombre comercial: no es una sociedad ni identifica a Valeria Melero (`PRODUCT.md`). Ninguna página dice desde dónde se trabaja (Nerva, Huelva). La política de privacidad habla de un formulario de newsletter que no existe. | Para Google la confianza es lo más importante («trust is most important», [contenido útil][hc]); sus evaluadores comprueban quién es responsable de la web y cómo contactar (secciones 2.5.2, 2.5.3 y 3.4, [directrices][qrg]). | En `aviso-legal.astro` y `politica-de-privacidad.astro`, identificar a la titular (Valeria Melero Maldonado, nombre comercial Melero Realty) y quitar la newsletter si no existe. Lo que exija la ley (la LSSI-CE, art. 10, habla de NIF y domicilio) no es una conclusión de esta auditoría: revisarlo con quien lleve lo legal. En sobre-nosotros, una línea sobre la base en Nerva si Valeria quiere. **Requiere aprobación de Valeria.** | Media | Bajo (30 min + revisión legal) | En producción y en el código |
| `/` | **5. La home no dice «agencia de marketing inmobiliario».** Es como se define el negocio (`PRODUCT.md`) y una de las búsquedas con las que el estudio previo encontró a la competencia, pero no está en el título, en el H1 ni en el texto; «marketing inmobiliario» sólo sale en el título y en el antetítulo del hero. | «Use words that people would use to look for your content, and place those words in prominent locations on the page, such as the title and main heading» ([Search Essentials][essentials]). Google no fija longitud máxima para el título ([enlaces de título][title]). | Sin datos de volumen no se puede elegir con seguridad entre «agencia de marketing inmobiliario», «marketing inmobiliario» y «captación de leads». Antes, recuperar el estudio de palabras clave de Sevilla y Marbella [PENDIENTE DE CONFIRMAR] o mirar las consultas en Search Console. Si se confirma, p. ej., título «Agencia de marketing inmobiliario y captación de leads» (prop `title` en `index.astro`) y la palabra en la frase de apoyo del hero. **Requiere aprobación de Valeria.** | Media | Bajo (30 min una vez decidido) | En producción y en el código |
| Fuera de la web (Google Business Profile) | **6. Ficha de Google retirada, con elegibilidad dudosa.** Sin ficha no hay presencia en Maps ni en el paquete local (`PRODUCT.md`), y la FAQ dice que se trabaja en remoto por videollamada. | Google sólo admite fichas de negocios que atienden en persona en su dirección durante su horario o que van a donde está el cliente; las oficinas virtuales no valen ([normas de la ficha][gbp]). El ranking local depende de relevancia, distancia y prominencia ([ranking local][gbprank]). | Antes de pedir que la restituyan, comprobar con Valeria si Melero cumple esas normas (atención presencial en Nerva con horario, o visitas a clientes) [PENDIENTE DE CONFIRMAR]. Si no, no insistir ni dar una dirección que no recibe clientes, y no marcar `LocalBusiness` en la web. Si se recupera, entonces sí tendría sentido el tipo local con `address`. | Media | Bajo (1 h de revisión) | No es de código |
| Todas (medido en `/` y en `/blog/depender-de-los-portales/`) | **7. LCP en móvil por encima de 2,5 s en laboratorio**: 2,87 s en la home y 3,02 s en el artículo (mediana de 3 pasadas). La imagen LCP se descarga pronto; lo que tarda es pintarla, porque el navegador espera a tres hojas de estilo que bloquean el renderizado: la de Google Fonts (835 ms de ahorro estimado) y las dos propias. Hay además un `preconnect` a `img.youtube.com` que no se usa. | Google pide LCP ≤ 2,5 s ([Core Web Vitals][cwv]) y sus sistemas de ranking usan las Core Web Vitals, aunque no hay una señal única de experiencia y una buena nota no garantiza posiciones ([experiencia de página][pe]). Cómo retrasa el LCP el CSS bloqueante: [optimize-lcp][lcp] (web.dev, Google). | (1) `astro.config.mjs`: `build: { inlineStylesheets: 'always' }` (unos 13 KiB comprimidos de CSS en la home) ([Astro][astrocfg]). (2) Poppins servida desde el propio dominio: los `woff2` de 300/400/600/700 en `public/fonts/`, `@font-face` con `font-display: swap` en `global.css`, y fuera los `<link>` y `preconnect` de Google Fonts en `Layout.astro`. (3) Quitar `<link rel="preconnect" href="https://img.youtube.com">`. Medir antes y después con el mismo método: web.dev avisa de que las fuentes propias no siempre ganan ([fuentes][fonts]). Verificar en `dist/`, no en el panel de vista previa (`CLAUDE.md`). | Media | Medio (3–4 h) | En producción y en el código |
| `/` (sección del caso) y blog | **8. La única prueba de primera mano vive en una sección de la home.** El caso de ARC (+30 % de facturación, con nombre, empresa, enlace y permiso) no tiene página ni artículo, y el blog no lo menciona. | Google valora la información y el análisis originales y la experiencia de primera mano ([contenido útil][hc]); lo contrario es contenido «commodity» ([guía de IA][aiopt]). | Un artículo con el caso entero (punto de partida, qué se hizo, las siete sesiones, qué cambió) en `src/content/blog/`, enlazado desde la sección del caso en `index.astro`. Sólo con lo que ARC autorizó el 7/9/2026; cualquier dato nuevo, con las cuatro cosas. Decir «constructora» y no atribuir el +30 % a un sistema de leads: el testimonio habla del acompañamiento (`PRODUCT.md`). **Requiere aprobación de Valeria y de ARC.** | Media | Medio (4–6 h + revisión) | En producción y en el código |
| `/#servicios` | **9. Los servicios no tienen página.** Cada uno es una frase de unas 15 palabras en un carrusel: ninguna URL puede posicionar para un servicio concreto (anuncios en Meta para inmobiliarias, embudo de captación…) y el blog sólo puede enlazar a `/#servicios`. | Las palabras de la búsqueda tienen que estar en el título y el H1 de una página que responda de verdad ([Search Essentials][essentials], [contenido útil][hc]). Muchas páginas casi iguales son abuso: páginas puerta o contenido a escala ([spam][spam]). | Sólo si Valeria quiere competir por esas búsquedas: una página por servicio, o por grupo de servicios, con contenido propio (para quién es, qué incluye, cómo se mide, preguntas), sin precio y sin prometer «más clientes». Plantilla `src/pages/servicios/[slug].astro` con el texto en `site.ts`, enlazada desde `/#servicios` y desde «Servicios relacionados» del blog. Nunca una página por ciudad con el nombre cambiado. **Requiere aprobación de Valeria.** | Media | Alto (1–2 días por página + textos) | En producción y en el código |
| Todas | **10. Cada página responde en varias direcciones.** `/contacto` y `/contacto/` (igual `/blog`, `/sobre-nosotros`, los artículos y las legales sin barra), `/index.html` y `/contacto/index.html` devuelven 200 con el mismo HTML. La canónica apunta bien; falta la redirección. | Las redirecciones y la etiqueta canonical son señales fuertes de URL canónica; el sitemap, débil ([URL canónicas][canon]). Vercel desaconseja dejar `trailingSlash` sin definir porque los buscadores pueden indexar dos páginas duplicadas ([vercel.json][vercel]). | `vercel.json`: `"trailingSlash": true` (308 de `/contacto` a `/contacto/`; los archivos con extensión, como `robots.txt`, `sitemap-index.xml` o la verificación de Google, no se redirigen). **No activar `cleanUrls`**: redirigiría `/google824e0cd48fd6c0fc.html`. Opcional: `trailingSlash: 'always'` en `astro.config.mjs`, para que el servidor de desarrollo avise de enlaces sin barra. Tras el push, `curl -sI` a `/contacto` (308) y a la verificación (200). | Baja | Bajo (15 min + comprobación) | En producción y en el código |
| Artículos | **11. La foto del artículo, que es el LCP en móvil, no lleva `fetchpriority="high"`** (Lighthouse: «fetchpriority=high should be applied»). | LCP ≤ 2,5 s ([Core Web Vitals][cwv]); Google recomienda `fetchpriority="high"` en la imagen que probablemente sea el LCP ([optimize-lcp][lcp]). | `src/pages/blog/[slug].astro`, en el `<img>` de `.bl-fig`: añadir `fetchpriority="high"` y dejarla sin `loading="lazy"`. | Baja | Bajo (5 min) | En producción y en el código |
| `/` | **12. Sin `WebSite` para el nombre del sitio.** El dominio es `valeriamelero.com` y la marca, Melero Realty; sólo `og:site_name` y los títulos le dicen a Google cuál prefiere. | El marcado `WebSite` en la home es lo más importante para indicar el nombre del sitio ([nombres de sitio][sitenames]). | En `Layout.astro`, sólo en la home (prop nueva o `Astro.url.pathname === '/'`): `{"@context":"https://schema.org","@type":"WebSite","name":"Melero Realty","url":"https://www.valeriamelero.com/"}`. Google pide el mismo marcado en todas las variantes de la home; con la redirección de la fila 10 sólo queda una. | Baja | Bajo (20 min) | En producción y en el código |
| Artículos | **13. Fechas sin zona horaria y sin etiqueta.** `datePublished` y `dateModified` van como `2026-09-12`; la fecha visible no dice «Publicado». La fecha real de salida del primer artículo sigue [PENDIENTE DE CONFIRMAR] en `NOTAS.md`. | Google pide fechas ISO 8601 con zona horaria ([Article][article]) y una fecha visible, etiquetada, que coincida con la del marcado ([fechas][dates]). | En `[slug].astro` (o `isoDia` en `src/lib/blog.ts`), fecha con hora y zona, p. ej. `2026-09-12T09:00:00+02:00` (la hora real si se conoce), también en `article:published_time`; «Publicado el» delante del `<time>`, con el texto en `BLOG` (`site.ts`). **Texto visible: requiere aprobación de Valeria.** | Baja | Bajo (30 min) | En producción y en el código |
| `/` y `/sobre-nosotros/` | **14. El marcado de la organización se queda corto**: `sameAs` sólo con Instagram (faltan el canal de YouTube del vídeo, TikTok o una página de empresa en LinkedIn, si existen); `founder` sin `url`; sin `telephone`. | `sameAs`, `email` y `telephone` son propiedades recomendadas de `Organization` ([Organization][org]). | Guardar en `SITE.social` (`site.ts`) las URL oficiales que existan [PENDIENTE DE CONFIRMAR] y pasarlas a `sameAs` en `Layout.astro` (el LinkedIn personal, sólo en `founder`); `founder.url` a su biografía (fila 3); `telephone: SITE.telefono` sólo si Valeria quiere que conste como teléfono y no sólo como WhatsApp [PENDIENTE DE CONFIRMAR]. | Baja | Bajo (20 min + URL) | En producción y en el código |
| `/sobre-nosotros/` y `/contacto/` | **15. Un título genérico y una descripción que no describe.** «Sobre Nosotros \| Melero Realty» no dice nada de la página; la descripción de `/contacto/` empieza por «Agenda tu diagnóstico…», pero la página es el formulario por escrito (la agenda está en Calendly). | Títulos descriptivos, sin etiquetas vagas como «Home» o «Profile» ([enlaces de título][title]); descripciones «truly descriptive» ([fragmentos][snippet]). | `sobre-nosotros.astro`: p. ej. «Quiénes somos: Valeria Melero y el equipo»; `contacto.astro`: una descripción que diga que es el diagnóstico por escrito. **Requiere aprobación de Valeria.** | Baja | Bajo (15 min) | En producción y en el código |
| Artículos | **16. Los títulos de los artículos no dicen de qué sector hablan**: «El riesgo de depender de los portales» y «Coste por lead, por cliente y retorno». El segundo no dice «inmobiliaria» ni en el título, ni en el H1, ni en la descripción. El tope de 44 caracteres de `content.config.ts` es una regla propia, no de Google. | Palabras de la búsqueda en el título y el encabezado principal ([Search Essentials][essentials]); Google no fija longitud y corta según el ancho de pantalla ([enlaces de título][title]). | `seoTitle` en los dos `.md`, p. ej. «El riesgo de depender de los portales inmobiliarios» y «Coste por lead y por cliente en inmobiliaria»; subir `MAX_TITULO_SEO` o dejarlo como aviso. Sin datos de volumen: mirar antes en Search Console qué consultas dan impresiones. **Requiere aprobación de Valeria.** | Baja | Bajo (20 min) | En producción y en el código |
| Todas | **17. Textos de enlace que no dicen adónde llevan**: «O cuéntanoslo por escrito» (a `/contacto/`, en la home, el blog y sobre-nosotros) y «Más detalles» (a la política de cookies). | El texto del enlace debe entenderse leído fuera de contexto ([enlaces][links]). | P. ej., «O pide el diagnóstico por escrito» (`index.astro`, `BLOG.cta.escrito`, `sobre-nosotros.astro`) y «Política de cookies» en `CookieNotice.astro`. El CTA sigue hablando de diagnóstico. **Requiere aprobación de Valeria.** | Baja | Bajo (15 min) | En producción y en el código |
| Cualquier URL inexistente | **18. Sin página 404 propia.** Vercel responde 404 (correcto) con un texto plano en inglés, «The page could not be found» / «NOT_FOUND», sin enlaces a la web. No hay `src/pages/404.astro`. | «A good custom 404 page helps people find the information they're looking for» ([errores de rastreo][crawlerr]); para Google lo importante es que siga devolviendo 404 ([códigos HTTP][http]). | `src/pages/404.astro` con `Layout`, `Header` y `Footer`, una frase y enlaces a inicio, blog y diagnóstico (texto en `site.ts`, sistema visual de siempre). Astro lo compila a `404.html` ([Astro][astro404]). Tras publicar, comprobar con `curl` que una URL inventada sigue dando 404 y que `/404/` no entra en el sitemap (si entra, `filter` en `sitemap()`). **Texto nuevo: requiere aprobación de Valeria.** | Baja | Bajo (1 h) | En producción y en el código |
| `/sitemap-0.xml` | **19. El sitemap no lleva `lastmod`.** | Google usa `lastmod` si es exacto de forma sistemática ([sitemaps][sitemap]). | `astro.config.mjs`: `sitemap({ serialize })` ([integración][astrosm]) con la fecha de `updatedDate ?? publishDate` de cada artículo, leída de su frontmatter; el resto, sin `lastmod` antes que con una fecha falsa. Nunca la fecha del build en todas. | Baja | Bajo (1 h) | En producción y en el código |
| Artículos | **20. La imagen de los artículos no sirve para Discover ni para compartir.** `og:image` es la tarjeta general del sitio (`og-melero.jpg`); la foto propia mide 900×1125 (4:5) y es la única imagen del `BlogPosting`; no hay `max-image-preview:large`. | Como imagen preferida, nada genérico ([imágenes][images]); Discover pide al menos 1200 px de ancho, 16:9 y `max-image-preview:large` ([Discover][discover]); `Article` recomienda imágenes 16:9, 4:3 y 1:1 ([Article][article]). | Foto de cada artículo a 1200 px de ancho o más (la original de ChatGPT sale a 1122×1402: hay que generarla más grande) y recortes 16:9, 4:3 y 1:1 con `sharp`; en `[slug].astro`, `ogImage` del artículo e `image` con las tres URL; en `Layout.astro`, `content="index, follow, max-image-preview:large"`. Requisitos de `NOTAS.md`: sin texto, sin caras, sin dorado. | Baja | Medio (2–3 h + generar las fotos) | En producción y en el código |
| `/` sobre todo; artículos | **21. Imágenes más grandes de lo que se pintan y ninguna con `srcset`.** En el móvil de Lighthouse, `band-campanas.webp` (1100×1375, 155 KiB) se pinta a 371×232 y `hero-piso.webp` (1672×941), a 412×232: 119 KiB ahorrables; `cta-boardroom.webp` pesa 179 KiB (1800×2250). | Google recomienda imágenes responsive (`srcset`) y optimizadas, porque suelen ser lo que más pesa de la página ([imágenes][images]); velocidad ([Core Web Vitals][cwv]). | Versiones de unos 800 y 1200 px con `sharp` y `srcset`/`sizes` en `index.astro` (hero, banda, servicios, cierre) y en `[slug].astro`, o `<Picture>` de `astro:assets` con las fotos en `src/`. El hero conserva `fetchpriority="high"`. | Baja | Medio (3 h) | En producción y en el código |

## Detalle por área

### D1. Indexación

**robots.txt.** El de `public/` y el publicado tienen el mismo contenido:
`User-agent: *`, `Allow: /` y
`Sitemap: https://www.valeriamelero.com/sitemap-index.xml`. No bloquea nada
y la URL del sitemap es absoluta, como pide Google ([robots.txt][robots]).

**Sitemap.** `/sitemap-index.xml` apunta a `/sitemap-0.xml`, con 9 URL: `/`,
`/aviso-legal/`, `/blog/`, los dos artículos, `/contacto/`,
`/politica-de-cookies/`, `/politica-de-privacidad/` y `/sobre-nosotros/`.
Todas dan 200, llevan barra final y coinciden con su canónica. No falta
ninguna página ni sobra ninguna (el archivo de verificación de Google no
entra, y está bien). Sin `lastmod` (fila 19). `/sitemap.xml` da 404, sin
importancia: robots.txt apunta al índice. No se ha podido ver si está
enviado en Search Console.

**Canónicas y robots.** Las 9 páginas llevan `<link rel="canonical">`
absoluta, con `www`, con barra final y apuntando a sí mismas. Ninguna tiene
`noindex` ni cabecera `X-Robots-Tag`. El `<meta name="robots" content="index,
follow">` es el valor por defecto y no hace nada ([meta robots][robotsmeta]);
no molesta.

**Redirecciones y variantes.** Comprobadas con `curl` antes (11:52) y después
(12:24) del despliegue, con el mismo resultado:

| Petición | Respuesta |
|---|---|
| `http://valeriamelero.com/` | 308 a `https://valeriamelero.com/` y 308 a `https://www.valeriamelero.com/`: dos saltos; Google sigue hasta 10 ([códigos HTTP][http]) |
| `http://www.valeriamelero.com/` | 308 a `https://www.valeriamelero.com/` |
| `https://valeriamelero.com/contacto/` | 308 a `https://www.valeriamelero.com/contacto/` |
| `/contacto`, `/sobre-nosotros`, `/blog`, `/blog/depender-de-los-portales`, `/aviso-legal`, `/politica-de-privacidad`, `/politica-de-cookies` (sin barra) | 200, el mismo HTML que con barra (fila 10) |
| `/index.html`, `/contacto/index.html`, `/blog/index.html` | 200, el mismo HTML; la canónica es la buena |
| `/?utm_source=test` | 200; la canónica sigue siendo `/` |
| `/Contacto/`, `/contacto.html` | 404 |
| `/no-existe-esta-pagina/`, `/blog/no-existe/`, `/404` | 404 con la página de texto de Vercel (fila 18) |
| `/sitemap.xml`, `/llms.txt`, `/favicon.ico` | 404; ninguno hace falta ([guía de IA][aiopt], [favicon][favicon]) |

**URL inexistente.** Devuelve un 404 de verdad, no un «soft 404», así que
Google no la indexa ([códigos HTTP][http]). Lo que ve la persona es la
página de error de Vercel en inglés; no hay `src/pages/404.astro` (fila 18).

### D2. Páginas

| URL | `<title>` (caracteres) | Meta description (caracteres) | H1 | Encabezados |
|---|---|---|---|---|
| `/` | Marketing inmobiliario y captación de leads \| Melero Realty (59) | «Generamos leads cualificados para agencias y asesores inmobiliarios en España y EEUU. Sin portales…» (128) | Captación de leads para inmobiliarias que ya están facturando. | 11 h2 y 20 h3 en orden; uno de los h2 es un párrafo de 42 palabras («Creamos sistemas de captación…»); el pie salta a h4 |
| `/sobre-nosotros/` | Sobre Nosotros \| Melero Realty (30) | «Conoce el equipo de Melero Realty. Especialistas en marketing inmobiliario B2B…» (148) | Especialistas en captación inmobiliaria | 4 h2 y 4 h3; pie en h4 |
| `/contacto/` | Diagnóstico de Captación Inmobiliaria \| Melero Realty (53) | «Agenda tu diagnóstico estratégico gratuito con Melero Realty…» (152) | Diagnóstico de Captación Inmobiliaria | un h2 oculto hasta enviar («¡Diagnóstico recibido!»); pie en h4 |
| `/blog/` | Blog de captación inmobiliaria \| Melero Realty (46) | «Artículos para agencias y asesores inmobiliarios en activo…» (150) | Notas de captación para inmobiliarias en activo | un h2 por artículo y el del cierre; pie en h4 |
| `/blog/depender-de-los-portales/` | El riesgo de depender de los portales \| Melero Realty (53) | «Si tienes una agencia en activo, publicas en Idealista o Fotocasa…» (144) | Subir pisos a los portales no es el problema. Depender de ellos, sí | 5 h2 de texto; «Servicios relacionados» (h2 y 3 h3); «Más artículos» (h2 y h3); cierre; pie en h4 |
| `/blog/coste-por-lead-y-coste-por-cliente/` | Coste por lead, por cliente y retorno \| Melero Realty (53) | «Impresiones y seguidores no dicen si tu captación funciona…» (144) | Los tres números que dicen si tu captación funciona | la misma estructura |
| `/aviso-legal/` | Aviso Legal \| Melero Realty (27) | «Aviso legal de Melero Realty conforme a la LSSI-CE.» (51) | Aviso Legal | 5 h2; pie en h4 |
| `/politica-de-privacidad/` | Política de Privacidad \| Melero Realty (38) | «Política de privacidad de Melero Realty conforme al RGPD.» (57) | Política de Privacidad | 6 h2; pie en h4 |
| `/politica-de-cookies/` | Política de Cookies \| Melero Realty (35) | «Política de cookies de Melero Realty.» (37) | Política de Cookies | 5 h2; pie en h4 |

- Títulos y descripciones: los nueve son distintos. Todos los títulos
  terminan en «| Melero Realty», que es como recomienda Google poner la marca
  ([enlaces de título][title]). Las descripciones de las legales son cortas,
  sin problema: Google no fija longitud ([fragmentos][snippet]). A mejorar,
  las filas 5, 15 y 16.
- Un solo H1 en cada página. El pie (`Footer.astro`) usa `h4` después de
  `h2` en todas, y el párrafo largo de la home va en un `h2`. Google dice
  que el orden de los encabezados no importa para la Búsqueda
  ([guía de inicio][starter]): es cosa de accesibilidad (D10).
- URLs cortas, legibles, con guiones, en minúsculas y sin acentos
  ([estructura de URL][urls]).

### D3. Contenido, búsquedas y enlazado interno

No hay datos de volumen de búsqueda ni acceso a Search Console. Lo que sigue
se deduce del título, el H1 y el texto de cada página. `PRODUCT.md` menciona
un estudio de palabras clave de Sevilla y Marbella que no está en el
repositorio.

| Página | Búsquedas a las que apunta (deducido) | Observación |
|---|---|---|
| `/` | «marketing inmobiliario», «captación de leads para inmobiliarias», «leads cualificados para agencias inmobiliarias»; la marca (Melero Realty, Valeria Melero) | «agencia de marketing inmobiliario» no aparece (fila 5); «marketing inmobiliario», sólo en el título y en el antetítulo |
| `/sobre-nosotros/` | la marca y el equipo | título genérico (fila 15); unas 150 palabras propias, sin trayectoria (filas 3 y 4) |
| `/contacto/` | «diagnóstico de captación inmobiliaria», término propio que probablemente nadie busca | es una página de conversión: que posicione poco no es un problema |
| `/blog/` | «blog de captación inmobiliaria» | portada de dos artículos |
| `/blog/depender-de-los-portales/` | depender de Idealista o Fotocasa, captar sin portales | el título SEO no dice «inmobiliario» (fila 16) |
| `/blog/coste-por-lead-y-coste-por-cliente/` | coste por lead, coste por cliente y retorno de la captación inmobiliaria | «inmobiliaria» no está ni en el título, ni en el H1, ni en la descripción (fila 16) |
| Legales | ninguna | correcto |

**Páginas que compiten entre sí.** Ninguna de verdad. «Captación
inmobiliaria» se repite como tema (título del blog, H1 de sobre-nosotros,
título de contacto), pero cada página responde a una intención distinta. Los
dos artículos tratan temas distintos y se enlazan entre sí.

**Contenido flojo o duplicado.** No hay páginas duplicadas. Lo flojo: la
página de sobre-nosotros (sin biografías ni trayectoria), los servicios (una
frase cada uno, fila 9) y los artículos, correctos pero genéricos (fila 2).
Las legales son cortas por naturaleza.

**Enlazado interno** (producción, igual que el código):

| Página | La enlazan | Texto del enlace |
|---|---|---|
| `/` | las 8 interiores (la marca de la cabecera) y las 9 («valeriamelero.com» en el pie) | «Melero Realty», «valeriamelero.com» |
| `/sobre-nosotros/` | sólo los 2 artículos (la firma, con ancla `#sn-team`) | «Valeria Melero», «Yerai Jiménez» (fila 1) |
| `/contacto/` | las 9 (pie); además la home (2), el cierre del blog y de sobre-nosotros y el texto de los artículos | «Contacto», «O cuéntanoslo por escrito» (fila 17), «diagnóstico» |
| `/blog/` | las 9 (cabecera y pie) | «Blog» |
| Artículos | `/blog/` y el otro artículo | el título; «este artículo sobre la dependencia de los portales» |
| Legales | las 9 (pie); privacidad, también desde el formulario y la política de cookies | «Aviso legal», «Privacidad», «Cookies», «Más detalles» |

La home no enlaza ni a sobre-nosotros ni a ningún artículo, y los servicios
no tienen adónde enlazar (fila 9). Las anclas de la home (`/#servicios`,
`/#proceso`, `/#equipo`, `/#faq`) llevan a la misma URL. Todos los enlaces
son `<a href>` rastreables ([enlaces][links]).

### D4. Datos estructurados

| Página | Producción hasta las 12:20 (`d5b52f4`) | Producción desde las 12:20 y código (`a1a53c9`) |
|---|---|---|
| `/` | `ProfessionalService` y `FAQPage` | `Organization` (con `logo`, `email`, `sameAs` y `founder`) y `FAQPage` |
| `/sobre-nosotros/` | `ProfessionalService` | `Organization` |
| `/contacto/`, `/blog/` y legales | `ProfessionalService` | ninguno |
| Artículos | `ProfessionalService`, `BlogPosting` y `BreadcrumbList` (logo del editor: `logo-melero.png`) | `BlogPosting` y `BreadcrumbList` (logo del editor: `favicon.png`) |

**Validez.** Todos los bloques son JSON válido, antes y después del
despliegue (analizados uno a uno). El validador de schema.org da 0 errores y
0 avisos en la home y en el artículo publicados, antes y después del
despliegue, y en sobre-nosotros después. La Prueba de resultados
enriquecidos de Google pide iniciar sesión y no se ha podido pasar.

**Tipo por tipo, frente a la documentación de Google:**

- `Organization`: Google no exige propiedades. Están `name`, `url`, `logo`,
  `description`, `email` y `sameAs`, todas recomendadas ([Organization][org]).
  El logo es `favicon.png`, 512×512, la M sobre disco negro: pasa del mínimo
  de 112×112 y se ve bien sobre blanco. `founder` no está en la lista de
  Google, pero es schema.org válido. Mejorable en la fila 14.
- `WebSite`: no existe (fila 12).
- `BlogPosting`: sin propiedades obligatorias. Bien: `headline`, `author`
  como `Person` con `name` y `url`, `datePublished`, `dateModified` e
  `image` (900×1125 = 1.012.500 píxeles, muy por encima del mínimo de
  50.000). Mejorable: `author.url` común y sin biografía, sin `sameAs`
  (fila 3); fechas sin zona horaria (fila 13); una sola imagen 4:5 en vez
  de 16:9, 4:3 y 1:1 (fila 20) ([Article][article]).
- `BreadcrumbList`: tiene lo obligatorio (`position`, `name` e `item`)
  ([breadcrumb][bc]). Google sólo lo muestra en escritorio. En la página sólo
  se ve el «Blog» del antetítulo; si se quiere que el marcado describa algo
  visible del todo, una miga «Inicio / Blog» encima del titular
  ([reglas generales][sdpol]). Opcional.
- `FAQPage`: válido y fiel a la FAQ visible, pero Google dejó de mostrar el
  resultado de preguntas frecuentes el 7/5/2026 y borró su documentación el
  15/6/2026 ([registro de cambios][faqremoved]); la antigua URL de la
  documentación redirige a esa nota. En Google no aporta nada. Tampoco
  consta que perjudique: incluso una acción manual por marcado sólo quita
  la elegibilidad para resultados enriquecidos, sin tocar el ranking
  ([reglas generales][sdpol]). Se mantiene por decisión del equipo; no hace
  falta tocarlo.
- Reseñas: no hay `aggregateRating` ni `Review`. Correcto: si la entidad
  controla las reseñas sobre sí misma, sus páginas no optan a estrellas, y
  desde el 24/7/2026 Google prohíbe expresamente las reseñas falsas o
  incentivadas sin avisarlo ([review snippet][reviews]). Con la regla de las
  cifras de Melero, no se añade nada de esto.
- `LocalBusiness`: no debe usarse sin dirección pública ni ficha
  ([LocalBusiness][lb]; fila 6).
- `VideoObject`: no hay y no hace falta (apartado 3).

### D5. Imágenes

| Archivo | Dónde | Medidas reales | `width`×`height` en el HTML | Peso | `alt` | Carga |
|---|---|---|---|---|---|---|
| `images/hero-piso.webp` | home, hero (elemento LCP en móvil) | 1672×941 | iguales | 61 KiB | descriptivo | `fetchpriority="high"`, sin lazy |
| `images/band-campanas.webp` | home, «El problema» | 1100×1375 | iguales | 155 KiB | descriptivo | lazy |
| `images/video-poster.webp` | home, vídeo | 405×720 | sin atributos (el marco fija 9:16 con `aspect-ratio`) | 33 KiB | «¿Qué es realmente Melero Realty?» | lazy |
| `images/caso-arc.webp` | home, caso | 640×285 | iguales | 40 KiB | «Logotipo de ARC Proyectos Renovables», dentro del enlace a su web | lazy |
| `images/real-guiones.webp`, `real-set.webp`, `real-rodaje.webp`, `svc-marca.webp`, `svc-contenido.webp`, `svc-consultoria.webp` | home, servicios | 900 de ancho (1125–1600 de alto) | iguales | 74–142 KiB | descriptivos | lazy |
| `team/valeria.webp`, `yerai.webp`, `carlos.webp` | home y sobre-nosotros, equipo | 640×961, 640×853 y 640×882 | 1000×1250 (no coinciden) | 20–48 KiB | «Retrato de …, cargo de Melero Realty» | lazy |
| `team/valeria.webp` | home, cierre | 640×961 | iguales | 48 KiB | «Retrato de Valeria Melero» | lazy |
| `images/cta-boardroom.webp` | home, fondo del cierre | 1800×2250 | iguales | 179 KiB | descriptivo | lazy |
| `images/blog/depender-de-los-portales.webp` y `coste-por-lead-y-coste-por-cliente.webp` | cada artículo (elemento LCP en móvil) y las listas | 900×1125 | iguales | 95 y 87 KiB | descriptivo en el artículo; `alt=""` en las listas, donde es decorativa | en el artículo, sin lazy y sin `fetchpriority` (fila 11); en las listas, lazy |
| `images/og-melero.jpg` | `og:image` y `twitter:image` de las 9 páginas | 1200×630, JPEG | `og:image:width` y `height`: 1200×630 | 73 KiB | `og:image:alt` fijo | — |
| `favicon.png` | icono; logo de `Organization` y del editor | 512×512, PNG | — | 34 KiB | — | — |

- Todas las imágenes de contenido tienen `alt` descriptivo y sin palabras
  clave metidas a la fuerza; las miniaturas del blog llevan `alt=""` porque
  el título de al lado ya enlaza ([imágenes][images]).
- Formato: WebP en todas las fotos, JPEG sólo en la tarjeta para compartir y
  PNG en los iconos. Todos admitidos por Google ([imágenes][images]).
- Tamaño: ninguna tiene `srcset` (fila 21). Las fotos del equipo declaran
  1000×1250 pero miden 640 de ancho; como el CSS fija 4:5 con
  `object-fit: cover` (`.member img` en `home.css` y `.sn-member img` en
  `sobre-nosotros.astro`), ni se deforman ni mueven la página, pero conviene
  poner los valores reales en `index.astro` y `sobre-nosotros.astro`.
- La foto LCP del artículo no lleva prioridad (fila 11); la del hero, sí.
- `og:image`: absoluta, 1200×630, con dimensiones y texto alternativo. Vale
  para la home; para los artículos es genérica (fila 20).
- El favicon de 512 px pesa 34 KiB y se descarga en cada primera visita (el
  8 % de la home en Lighthouse). Para la pestaña basta uno de 48 a 192 px;
  el de 512 puede quedarse como logo de `Organization`. Cumple las normas de
  Google: cuadrado, de más de 48 px y enlazado desde la home
  ([favicon][favicon]).
- Las fotos de los artículos están generadas con IA (`NOTAS.md`). Google sólo
  exige marcar las imágenes generadas con IA (metadatos IPTC) en Merchant
  Center, no en un blog ([contenido con IA][genai]).

### D6. Velocidad y Core Web Vitals en móvil

**Cómo se midió.** La API de PageSpeed Insights sin clave devolvió 429
(cuota diaria de 0 peticiones) para las dos URL a las 11:56. Se usó
Lighthouse 13.5.0 en local contra producción (`npx lighthouse`, Chrome 153
sin interfaz, móvil emulado Moto G Power, red y CPU simuladas: 150 ms de
RTT, 1,6 Mbps y CPU ×4), tres pasadas por URL entre las 11:57 y las 11:58.
Todas las mediciones son **anteriores al despliegue de las 12:20**; ese
despliegue sólo cambió comentarios, enlaces y JSON-LD (la home pasa de 40,9
a 38,2 KB de HTML sin comprimir), así que las cifras siguen valiendo.

| URL | Pasada | Rend. | Acces. | Buenas prác. | SEO | FCP | LCP | TBT | CLS | Speed Index | Peso |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `/` | 1 (11:57) | 85 | 92 | 100 | 100 | 2,67 s | 3,47 s | 0 ms | 0 | 4,52 s | 406 KiB |
| `/` | 2 (11:57) | 91 | 92 | 100 | 100 | 2,57 s | 2,87 s | 0 ms | 0,003 | 2,94 s | 406 KiB |
| `/` | 3 (11:58) | 91 | 92 | 100 | 100 | 2,55 s | 2,86 s | 0 ms | 0,003 | 2,94 s | 406 KiB |
| **`/`, mediana** | | **91** | **92** | **100** | **100** | **2,57 s** | **2,87 s** | **0 ms** | **0,003** | **2,94 s** | **406 KiB** |
| artículo | 1 (11:57) | 87 | 95 | 100 | 100 | 2,55 s | 3,18 s | 0 ms | 0 | 4,29 s | 233 KiB |
| artículo | 2 (11:58) | 90 | 95 | 100 | 100 | 2,55 s | 3,02 s | 0 ms | 0 | 2,81 s | 233 KiB |
| artículo | 3 (11:58) | 90 | 95 | 100 | 100 | 2,55 s | 3,01 s | 0 ms | 0 | 2,80 s | 233 KiB |
| **artículo, mediana** | | **90** | **95** | **100** | **100** | **2,55 s** | **3,02 s** | **0 ms** | **0** | **2,81 s** | **233 KiB** |

«Artículo» es `/blog/depender-de-los-portales/`. La mediana es la de cada
métrica por separado. La primera pasada de cada URL salió más lenta, como es
habitual en frío.

**Contraste con PageSpeed Insights en la web** (`pagespeed.web.dev`, el
mismo Lighthouse 13.5.0 en servidores de Google, también antes del
despliegue): home a las 12:00, 93/92/100/100, LCP 2,7 s, TBT 0 ms, CLS
0,004; artículo a las 12:02, 91/95/100/100, LCP 2,7 s, TBT 0 ms, CLS 0. El
mismo orden de magnitud: el LCP ronda o pasa un poco de los 2,5 s.

**Qué frena.**

- Elemento LCP: en la home, la foto del hero (412×232 en pantalla); en el
  artículo, su foto (371×278). En los dos casos el archivo llega pronto; lo
  que se alarga es el «retraso de pintado del elemento» (1,1 s en la traza),
  la parte del LCP que crece cuando hay hojas de estilo bloqueantes en el
  `<head>` ([optimize-lcp][lcp]).
- Peticiones que bloquean el renderizado: ahorro estimado de 1.290 ms en la
  home y 1.440 ms en el artículo (FCP). La mayor es el CSS de Google Fonts
  (835 ms); después, las dos hojas propias (`aviso-legal.*.css`, 5 KiB,
  común a todas, y la de cada página). Fila 7.
- Imágenes: 119 KiB ahorrables en la home (banda 70, hero 50) y 13 KiB en
  el artículo. Filas 11 y 21.
- JavaScript: el script del `Layout` (GSAP con ScrollTrigger y SplitText) se
  carga en todas las páginas; en el artículo, 26 KiB sin usar (el 70 %). No
  bloquea (TBT 0 ms), pero pesa: se podría cargar sólo donde hay
  animaciones.
- `preconnect` a `img.youtube.com`, marcado como no usado (fila 7).
- Lo que va bien: TBT 0 ms y CLS casi 0 en las seis pasadas; el servidor
  responde en 20 ms; 15 peticiones y 406 KiB en la home, 12 y 233 KiB en el
  artículo; ningún tercero salvo Google Fonts; ninguna cookie de terceros.

**INP.** Es la tercera Core Web Vital: Google pide menos de 200 ms
([Core Web Vitals][cwv]), medido en el percentil 75 de las visitas reales
([web.dev: Web Vitals][vitals]). Lighthouse no puede medirlo, porque en
laboratorio nadie hace clic; el TBT es su aproximación de laboratorio, «pero
no un sustituto» ([web.dev: INP][inp]). TBT de 0 ms en las seis pasadas: buena
señal, no una medida.

**Datos de usuarios reales (CrUX): no hay.** PageSpeed Insights dice de la
home que «el informe Experiencia de Usuario de Chrome no tiene suficientes
datos sobre velocidad en el mundo real de esta página», y del artículo, «No
hay datos»; en ninguno de los dos ofrece datos del origen. CrUX sólo publica
páginas y orígenes con un mínimo de visitas ([metodología de CrUX][crux]), y
el informe de Core Web Vitals de Search Console sale de esos mismos datos, así
que también dirá que no hay suficientes ([ayuda de Search Console][gsccwv]).
Esto último no está verificado: no hay acceso a Search Console. **Hoy no se
conocen el LCP, el INP ni el CLS reales de la web.** Si se quieren antes de
que haya tráfico suficiente, la librería `web-vitals` de Google puede mandar
los datos a GA4 sólo cuando se acepta la analítica; en ese caso, la política
de cookies tiene que contarlo.

**Lo que no hay que perseguir.** Google usa las Core Web Vitals, pero dice
que una buena nota no garantiza posiciones ([experiencia de página][pe]). El
100 de SEO de Lighthouse sólo comprueba lo básico, y el propio informe avisa
de que hay muchos otros factores.

### D7. Blog

- **Estructura.** Portada en `/blog/` con la lista (fecha, título enlazado
  como h2, descripción y minutos de lectura, miniatura decorativa) y dos
  artículos en `/blog/<slug>/`, del 12/9/2026 y del 26/9/2026. Sin
  categorías, etiquetas ni paginación: con dos artículos no hacen falta.
  URLs legibles ([estructura de URL][urls]).
- **Hacia los servicios.** Cada artículo termina con «Servicios
  relacionados» (los tres de su frontmatter, en `h3` con su frase y sin
  enlace propio) y «Ver todos los servicios», que lleva a `/#servicios`. En
  el texto: «diagnóstico» lleva a `/contacto/`, «cómo trabajamos, paso a
  paso» a `/#proceso` y «preguntas que nos hacen siempre» a `/#faq`. El
  segundo artículo enlaza al primero, y «Más artículos» enlaza al otro. La
  home no enlaza a ningún artículo (sólo «Blog» en el menú).
- **Fechas.** Visibles en `<time datetime>` («12 de septiembre de 2026»),
  sin etiqueta. `datePublished`, `dateModified` y `article:published_time`
  dicen `2026-09-12`, sin zona horaria. Coinciden entre sí (fila 13).
- **Autor.** Firma visible «Por Valeria Melero y Yerai Jiménez», con cada
  nombre enlazado a `/sobre-nosotros/#sn-team`. Allí están el titular «El
  equipo» y tres fotos con nombre y cargo: ni biografía ni enlaces a
  perfiles (el LinkedIn de Valeria sólo está en el pie). En el schema,
  `author` es un `Person` por firmante con `name`, `jobTitle`, `url` (la
  misma para los dos) y `worksFor`, sin `sameAs` (fila 3).
- **Contenido.** Unas 700 palabras cada uno, sin cifras ni nombres,
  correctos y en la voz de la marca, pero pendientes de la revisión de
  Valeria y sin experiencia propia (fila 2).
- **Imagen.** Foto propia generada con IA, de 900×1125; para compartir se
  usa la tarjeta general del sitio (fila 20).

### D8. SEO local y confianza

- **Datos de contacto.** Email `melero.realty@gmail.com`, con `mailto:`, en
  la cabecera, en el cierre de la home y en el pie. WhatsApp
  `+34 674 82 90 42`: enlace `wa.me` en el cierre de la home y en el pie,
  donde se ve el número. Sin enlace `tel:`. Ni dirección ni localidad en
  ninguna página. Instagram y el LinkedIn de Valeria, en el pie. Para lo que
  vende Melero (un servicio entre empresas, sin pagos en la web) es
  suficiente: las directrices de evaluadores ajustan lo que esperan al tipo
  de web (sección 2.5.3, [directrices][qrg]). Un `tel:` sólo si Valeria
  quiere recibir llamadas [PENDIENTE DE CONFIRMAR].
- **«Sobre nosotros».** Historia en tres párrafos, cuatro principios, el
  equipo (foto, nombre y cargo) y el cierre. No dice desde cuándo existe
  Melero, dónde está ni qué ha hecho antes nadie del equipo, y casi no se
  enlaza (filas 1, 3 y 4).
- **Aviso legal.** Titular «Melero Realty», la web y el email; ni persona,
  ni NIF, ni domicilio (fila 4).
- **El caso de ARC.** Es la mejor señal de confianza de la web: empresa
  real, enlace a su web, logotipo, testimonio firmado (Lina Marcela) y la
  única cifra con las cuatro cosas. Sólo está en la home (fila 8).
- **El equipo.** Tres personas con foto real en la home y en sobre-nosotros,
  y Valeria en vídeo y junto al botón final. Cara y nombre: bien.
- **E-E-A-T.** Experiencia: la muestran ARC, el vídeo, el proceso y la FAQ;
  el blog, no. Conocimiento: se afirma la especialización, pero no hay
  trayectoria publicada de nadie. Autoridad: no hay referencias externas
  (prensa, colaboraciones); `PRODUCT.md` confirma que no las hay, y no se
  inventan. Confianza: HTTPS, consentimiento real, una FAQ honesta y ninguna
  reseña ni cifra inventada; falla la identificación legal. Google dice que
  E-E-A-T no es un factor de ranking en sí ([guía de inicio][starter]), que
  sus sistemas buscan señales de ello y que la confianza es lo más
  importante ([contenido útil][hc]). En webs pequeñas, no encontrar
  reputación externa «no indica ni alta ni baja calidad» (sección 3.3.5,
  [directrices][qrg]).
- **Google Business Profile.** Retirada (`PRODUCT.md`); ver la fila 6.
  Mientras no haya ficha ni dirección pública, nada de `LocalBusiness`, y
  nada de páginas por ciudad con el nombre cambiado, que Google trata como
  páginas puerta ([spam][spam]).

### D9. Lo que se publicó hoy, verificado en producción

Los cambios que estaban sólo en local se publicaron hacia las 12:20
(commits `a2c1be8` y `a1a53c9`). Se descargaron de nuevo las 9 páginas a las
12:24 y se compararon con la compilación local: títulos, descripciones,
canónicas, encabezados, imágenes, JSON-LD, enlaces, Open Graph y meta robots
son idénticos.

| Cambio | Hasta las 12:20 (`d5b52f4`) | Desde las 12:20 (`a1a53c9`) |
|---|---|---|
| Comentarios `<!-- -->` en las plantillas | 19 en la home, 18 en contacto, 11 en sobre-nosotros, 6 en el resto | 0 en las 9 páginas |
| Enlaces internos sin barra final | `/contacto`, `/aviso-legal`, `/politica-de-privacidad` y `/politica-de-cookies` en el pie, el aviso de cookies, la home, contacto, la política de cookies y los artículos | ninguno |
| Datos de la organización | `ProfessionalService` sin dirección ni logo en las 9 páginas | `Organization` sólo en la home y en sobre-nosotros, con logo, email, `sameAs` y `founder` |
| Logo del editor de los artículos | `logo-melero.png` (dorado sobre transparente) | `favicon.png` |
| `FAQPage` en la home | sí | sí, a propósito (D4) |

Los comentarios no son un problema de posicionamiento (Search Central no los
trata): el problema era que cualquiera leía esas notas internas con «ver
código fuente».

### D10. Lo que marca Lighthouse fuera del SEO

Accesibilidad: 92 en la home y 95 en el artículo. No cuenta para Google
Search (del orden de los encabezados lo dice expresamente,
[guía de inicio][starter]), pero afecta a personas:

- Contraste de los antetítulos teal sobre `--paper` (`#24767b` sobre
  `#eaeced`): 4,48:1, por debajo del 4,5:1 de AA, en la home y en el
  artículo.
- Orden de encabezados: el pie salta de `h2` a `h4` en las 9 páginas
  (`Footer.astro`; estilos en `global.css`, `.footer h4`).
- La fachada del vídeo se anuncia como «¿Qué es realmente Melero Realty?»
  pero enseña «Ver el vídeo» (`VideoEmbed.astro`).
- El enlace «Reservar diagnóstico →» del bloque del vídeo tiene un área
  táctil insuficiente (21 px de alto).

Si se cambia un color, recalcular y anotar su contraste (`CLAUDE.md`).

## 3. Lo que ya está bien

**Corregido el 27/9/2026** (publicado hacia las 12:20, commit `a2c1be8`;
comprobado en producción a las 12:24):

- **Datos de la organización donde toca.** `Organization` sólo en la home y
  en sobre-nosotros, con un logo que se lee sobre blanco, en lugar de
  `ProfessionalService` sin dirección en todas las páginas. Es lo que pide
  Google ([Organization][org], [LocalBusiness][lb]). El editor de los
  artículos también usa ya `favicon.png`.
- **Enlaces internos a la URL canónica**, con barra final en todas las
  páginas ([URL canónicas][canon]). Queda la redirección del servidor
  (fila 10).
- **Sin notas internas en el HTML**: 0 comentarios en las 9 páginas (D9).

**Ya estaba bien, y conviene no tocarlo:**

- **HTTPS y un solo dominio.** Todo va por HTTPS con HSTS; el dominio
  desnudo y `http` redirigen con 308 (permanente) a `https://www.`, una
  señal fuerte de URL canónica ([redirecciones][redir]).
- **robots.txt, sitemap y canónicas coherentes.** robots.txt abierto y con
  el sitemap en URL absoluta ([robots.txt][robots]); el sitemap lista sólo
  las 9 URL canónicas, todas en 200 y sin `priority` ni `changefreq`, que
  Google ignora ([sitemaps][sitemap]); cada página se declara canónica a sí
  misma con la misma URL que el sitemap ([URL canónicas][canon]).
- **Nada bloqueado por error.** Ningún `noindex` ni `X-Robots-Tag`, y un 404
  de verdad para lo que no existe ([códigos HTTP][http]).
- **Títulos y descripciones únicos**, descriptivos y con la marca al final
  ([enlaces de título][title], [fragmentos][snippet]); un H1 por página.
- **HTML estático completo.** Todo el texto, la FAQ y los servicios están en
  el HTML servido, igual en móvil y en escritorio; nada depende de un clic
  para existir ([indexación mobile-first][mfi]). Las animaciones que parten
  de `opacity: 0` tienen red de seguridad (`Layout.astro`).
- **URLs** cortas, legibles, con guiones y en minúsculas
  ([estructura de URL][urls]).
- **Imágenes** con `alt` descriptivo, `alt=""` en las decorativas, WebP,
  dimensiones declaradas (el póster del vídeo no las lleva, pero su marco
  tiene proporción fija) y carga diferida salvo la principal
  ([imágenes][images]).
- **Estabilidad y respuesta:** CLS casi 0 y TBT 0 ms en todas las pasadas,
  con 406 KiB la home y 233 KiB el artículo ([Core Web Vitals][cwv]). Ayuda
  que la analítica y YouTube no se carguen hasta que la persona lo decide.
- **Datos estructurados válidos:** 0 errores y 0 avisos en el validador de
  schema.org, y cada bloque describe algo que está en la página
  ([reglas generales][sdpol]).
- **Sin reseñas ni cifras inventadas**, y sin `aggregateRating`: justo lo que
  pide Google ([review snippet][reviews]).
- **`FAQPage`** fiel a la FAQ visible. Desde mayo de 2026 no da nada en
  Google, y tampoco consta que perjudique ([registro de cambios][faqremoved]).
- **Sin páginas por ciudad**, que Google trataría como páginas puerta si
  fueran casi iguales ([spam][spam]).
- **Sólo castellano, sin `hreflang`**, con `lang="es"`: correcto para una
  sola versión.
- **Sin `llms.txt` ni marcado «para IA»:** Google dice que no hace falta
  ([guía de IA][aiopt]).
- **Vídeo con fachada:** no carga YouTube ni pone cookies hasta que se
  pulsa. Google no descubrirá el vídeo desde la home, porque no se carga sin
  un clic ([vídeo][video]), pero la home no es una página de vídeo y el
  vídeo ya está en YouTube: no compensa cambiarlo.
- **Favicon** cuadrado, de 512 px y enlazado desde la home
  ([favicon][favicon]).

## 4. Método

- **Fecha y hora:** 27/9/2026, de 11:40 a 12:35 (hora peninsular).
- **Versiones:** producción fue el commit `d5b52f4` hasta hacia las 12:20
  (se comprobó por los 19 comentarios de la home, `ProfessionalService` y
  los enlaces sin barra). Entonces se publicaron `a2c1be8` (commit a las
  12:19:48) y `a1a53c9`; la primera respuesta de la versión nueva lleva
  `Last-Modified` de las 12:20:17. Desde entonces, producción y código
  coinciden, salvo este documento, que no se ha subido.
- **Qué se midió antes y después del despliegue:**
  - Antes (sobre `d5b52f4`): descarga de HTML y cabeceras (11:51–11:53),
    variantes de URL (11:52), PageSpeed Insights API (11:56, 429),
    Lighthouse (11:57–11:58), PageSpeed Insights web (12:00 y 12:02) y
    validador de schema.org de la home y el artículo (hacia las 12:10).
  - Después (sobre `a1a53c9`): nueva descarga de las 9 páginas, robots.txt y
    sitemaps (12:23–12:24), variantes de URL y 404 (12:24) y validador de
    schema.org de la home, sobre-nosotros y el artículo (12:24–12:26).
- **Pasos:**
  1. Lectura de `PRODUCT.md`, `CLAUDE.md`, `NOTAS.md`,
     `docs/benchmark-webs-marketing-inmobiliario.md` y el código
     (`site.ts`, las páginas, `Layout.astro`, los componentes,
     `content.config.ts`, `astro.config.mjs`, `vercel.json` y
     `public/robots.txt`).
  2. Descarga con `curl` 8.21.0 del HTML y las cabeceras de las 9 páginas,
     de robots.txt, de los sitemaps, de las variantes de URL y de URL
     inexistentes.
  3. Extracción con un script propio (Node 26.8.1 y `parse5` 7.3.0, del
     propio proyecto) de título, descripción, canónica, meta robots, Open
     Graph, encabezados, imágenes, JSON-LD, enlaces y comentarios de cada
     página, en producción y en la compilación local (Astro 5.18.2,
     compilado en una carpeta temporal fuera del repositorio).
  4. Medidas, formato y peso de las imágenes de `public/` con `sharp`
     0.34.5.
  5. PageSpeed Insights API sin clave: 429 a las 11:56 para las dos URL.
     Lighthouse 13.5.0 con `npx` contra producción: Chrome 153 sin interfaz,
     móvil emulado (Moto G Power), limitación simulada (RTT 150 ms,
     1,6 Mbps, CPU ×4), pantalla de 412×823 a 1,75x; tres pasadas por URL y
     mediana de cada métrica. Informes JSON guardados fuera del repositorio,
     en la carpeta temporal de la sesión (`scratchpad/lighthouse/`).
     PageSpeed Insights web para contrastar y para ver si hay datos de CrUX.
  6. Validador de schema.org (validator.schema.org) con las páginas
     publicadas.
  7. Lectura de cada página de Google citada, con su fecha de última
     actualización (en Fuentes); las directrices de evaluadores (versión del
     11/9/2025), con `pdftotext` 4.06.
- **URLs revisadas:** las 9 del sitemap; `robots.txt`, `sitemap-index.xml`,
  `sitemap-0.xml` y `google824e0cd48fd6c0fc.html`; las variantes de la tabla
  de D1; las imágenes de la tabla de D5.
- **Lo que no se ha podido medir ni verificar:**
  - Search Console: no hay acceso. No se sabe qué páginas están indexadas,
    si el sitemap está enviado, qué consultas dan impresiones, si hay
    acciones manuales ni qué dice el informe de Core Web Vitals.
  - Volumen de búsqueda: no hay datos, y el estudio de Sevilla y Marbella no
    está en el repositorio. Las búsquedas de D3 están deducidas del texto.
  - Posiciones: no se ha comprobado la posición en Google de ninguna
    búsqueda.
  - Cómo pinta Googlebot la página: la Prueba de resultados enriquecidos y
    la Inspección de URLs piden iniciar sesión.
  - Datos de campo: no hay CrUX, así que el LCP, el INP y el CLS reales son
    desconocidos.
  - Lighthouse de laboratorio varía entre pasadas; el desglose del LCP sale
    de la traza real, no de la simulación. No se ha probado en un teléfono
    real.
  - La ficha de Google Business Profile no se ha comprobado en Maps; se toma
    lo que dice `PRODUCT.md`.
  - Lo legal (LSSI-CE, RGPD) no se ha evaluado: sólo se señala lo que falta
    para saber quién está detrás.

## 5. Fuentes

Todas consultadas el 27/9/2026. Entre paréntesis, la fecha de «última
actualización» que muestra cada página.

**Google Search Central**

- Contenido útil, fiable y centrado en las personas:
  https://developers.google.com/search/docs/fundamentals/creating-helpful-content (10/12/2025)
- Uso de contenido generado con IA:
  https://developers.google.com/search/docs/fundamentals/using-gen-ai-content (10/12/2025)
- Optimizar para las funciones de IA generativa:
  https://developers.google.com/search/docs/fundamentals/ai-optimization-guide (10/7/2026)
- Guía de inicio de SEO:
  https://developers.google.com/search/docs/fundamentals/seo-starter-guide (10/12/2025)
- Search Essentials: https://developers.google.com/search/docs/essentials (10/12/2025)
- Herramientas y consejos de SEO de terceros:
  https://developers.google.com/search/docs/fundamentals/third-party-seo (5/6/2026)
- Enlaces de título:
  https://developers.google.com/search/docs/appearance/title-link (10/12/2025)
- Fragmentos y meta description:
  https://developers.google.com/search/docs/appearance/snippet (20/4/2026)
- Enlaces rastreables y texto de enlace:
  https://developers.google.com/search/docs/crawling-indexing/links-crawlable (10/12/2025)
- URL canónicas:
  https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls (10/7/2026)
- Redirecciones:
  https://developers.google.com/search/docs/crawling-indexing/301-redirects (14/4/2026)
- Códigos de estado HTTP:
  https://developers.google.com/search/docs/crawling-indexing/http-network-errors (4/2/2026)
- Errores de rastreo (páginas 404 personalizadas):
  https://developers.google.com/search/docs/crawling-indexing/troubleshoot-crawling-errors (18/12/2025)
- Sitemaps:
  https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap (8/7/2026)
- robots.txt:
  https://developers.google.com/search/docs/crawling-indexing/robots/create-robots-txt (21/11/2025)
- Meta robots:
  https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag (24/3/2026)
- Estructura de URL:
  https://developers.google.com/search/docs/crawling-indexing/url-structure (10/12/2025)
- Indexación mobile-first:
  https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing (10/12/2025)
- Organization:
  https://developers.google.com/search/docs/appearance/structured-data/organization (8/9/2026)
- LocalBusiness:
  https://developers.google.com/search/docs/appearance/structured-data/local-business (8/9/2026)
- Article:
  https://developers.google.com/search/docs/appearance/structured-data/article (8/9/2026)
- Breadcrumb:
  https://developers.google.com/search/docs/appearance/structured-data/breadcrumb (8/9/2026)
- Review snippet:
  https://developers.google.com/search/docs/appearance/structured-data/review-snippet (8/9/2026)
- Reglas generales de datos estructurados:
  https://developers.google.com/search/docs/appearance/structured-data/sd-policies (10/7/2026)
- Nombres de sitio:
  https://developers.google.com/search/docs/appearance/site-names (10/12/2025)
- Favicon:
  https://developers.google.com/search/docs/appearance/favicon-in-search (28/8/2026)
- Imágenes:
  https://developers.google.com/search/docs/appearance/google-images (2/3/2026)
- Discover:
  https://developers.google.com/search/docs/appearance/google-discover (9/3/2026)
- Vídeo: https://developers.google.com/search/docs/appearance/video (18/12/2025)
- Fechas de publicación:
  https://developers.google.com/search/docs/appearance/publication-dates (10/12/2025)
- Core Web Vitals:
  https://developers.google.com/search/docs/appearance/core-web-vitals (10/12/2025)
- Experiencia de página:
  https://developers.google.com/search/docs/appearance/page-experience (22/9/2026)
- Políticas de spam:
  https://developers.google.com/search/docs/essentials/spam-policies (28/8/2026)
- Registro de cambios de la documentación:
  https://developers.google.com/search/updates. Entradas del 8/5/2026 y
  15/6/2026 (retirada del resultado de FAQ y de su documentación), 24/7/2026
  (reseñas falsas o incentivadas) y 28/8/2026 (favicon). La antigua URL
  `…/structured-data/faqpage` redirige con 301 a
  https://developers.google.com/search/updates#removing-faq-rich-result.

**Otras fuentes de Google**

- web.dev, Web Vitals: https://web.dev/articles/vitals (31/10/2024)
- web.dev, INP: https://web.dev/articles/inp (2/9/2025)
- web.dev, Optimizar el LCP: https://web.dev/articles/optimize-lcp (31/3/2025)
- web.dev, Buenas prácticas con fuentes:
  https://web.dev/articles/font-best-practices (4/10/2022)
- Chrome for Developers, metodología de CrUX:
  https://developer.chrome.com/docs/crux/methodology (20/6/2024)
- Ayuda de Search Console, informe de Core Web Vitals:
  https://support.google.com/webmasters/answer/9205520?hl=es (sin fecha)
- Ayuda de Google Business Profile, normas para representar tu negocio:
  https://support.google.com/business/answer/3038177?hl=es (sin fecha)
- Ayuda de Google Business Profile, posicionamiento local:
  https://support.google.com/business/answer/7091?hl=es (sin fecha)
- Directrices para evaluadores de calidad de la Búsqueda, versión del
  11/9/2025, secciones 2.5.2, 2.5.3, 3.3.5 y 3.4:
  https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf

**Implementación (no son de Google)**

- Vercel, `vercel.json` (`trailingSlash`, `cleanUrls`):
  https://vercel.com/docs/project-configuration/vercel-json (14/8/2026)
- Astro, referencia de configuración (`trailingSlash`,
  `build.inlineStylesheets`):
  https://docs.astro.build/en/reference/configuration-reference/
- Astro, páginas (404 personalizada):
  https://docs.astro.build/en/basics/astro-pages/
- Astro, integración `@astrojs/sitemap` (`serialize`, `filter`):
  https://docs.astro.build/en/guides/integrations-guide/sitemap/

**Mediciones**

- PageSpeed Insights, home (12:00):
  https://pagespeed.web.dev/analysis/https-www-valeriamelero-com/qu4ai9y7tn?form_factor=mobile
- PageSpeed Insights, artículo (12:02):
  https://pagespeed.web.dev/analysis/https-www-valeriamelero-com-blog-depender-de-los-portales/ffyvkthwd7?form_factor=mobile
- Lighthouse local: `lh-home-1..3.json` y `lh-articulo-1..3.json` en la
  carpeta temporal de la sesión, fuera del repositorio.

[hc]: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
[genai]: https://developers.google.com/search/docs/fundamentals/using-gen-ai-content
[aiopt]: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
[starter]: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
[essentials]: https://developers.google.com/search/docs/essentials
[title]: https://developers.google.com/search/docs/appearance/title-link
[snippet]: https://developers.google.com/search/docs/appearance/snippet
[links]: https://developers.google.com/search/docs/crawling-indexing/links-crawlable
[canon]: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
[redir]: https://developers.google.com/search/docs/crawling-indexing/301-redirects
[http]: https://developers.google.com/search/docs/crawling-indexing/http-network-errors
[crawlerr]: https://developers.google.com/search/docs/crawling-indexing/troubleshoot-crawling-errors
[sitemap]: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
[robots]: https://developers.google.com/search/docs/crawling-indexing/robots/create-robots-txt
[robotsmeta]: https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag
[urls]: https://developers.google.com/search/docs/crawling-indexing/url-structure
[mfi]: https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing
[org]: https://developers.google.com/search/docs/appearance/structured-data/organization
[lb]: https://developers.google.com/search/docs/appearance/structured-data/local-business
[article]: https://developers.google.com/search/docs/appearance/structured-data/article
[bc]: https://developers.google.com/search/docs/appearance/structured-data/breadcrumb
[reviews]: https://developers.google.com/search/docs/appearance/structured-data/review-snippet
[sdpol]: https://developers.google.com/search/docs/appearance/structured-data/sd-policies
[sitenames]: https://developers.google.com/search/docs/appearance/site-names
[favicon]: https://developers.google.com/search/docs/appearance/favicon-in-search
[images]: https://developers.google.com/search/docs/appearance/google-images
[discover]: https://developers.google.com/search/docs/appearance/google-discover
[video]: https://developers.google.com/search/docs/appearance/video
[dates]: https://developers.google.com/search/docs/appearance/publication-dates
[cwv]: https://developers.google.com/search/docs/appearance/core-web-vitals
[pe]: https://developers.google.com/search/docs/appearance/page-experience
[spam]: https://developers.google.com/search/docs/essentials/spam-policies
[faqremoved]: https://developers.google.com/search/updates#removing-faq-rich-result
[vitals]: https://web.dev/articles/vitals
[inp]: https://web.dev/articles/inp
[lcp]: https://web.dev/articles/optimize-lcp
[fonts]: https://web.dev/articles/font-best-practices
[crux]: https://developer.chrome.com/docs/crux/methodology
[gsccwv]: https://support.google.com/webmasters/answer/9205520?hl=es
[gbp]: https://support.google.com/business/answer/3038177?hl=es
[gbprank]: https://support.google.com/business/answer/7091?hl=es
[qrg]: https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf
[vercel]: https://vercel.com/docs/project-configuration/vercel-json
[astrocfg]: https://docs.astro.build/en/reference/configuration-reference/
[astro404]: https://docs.astro.build/en/basics/astro-pages/
[astrosm]: https://docs.astro.build/en/guides/integrations-guide/sitemap/
