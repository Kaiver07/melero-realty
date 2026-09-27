# Benchmark: la web de Melero Realty frente a 10 agencias de marketing inmobiliario

Consulta: 26/9/2026. Autor: investigación automatizada para Melero Realty.
Web analizada: https://www.valeriamelero.com (producción) y el código de este
repositorio.

> **Actualización del 26/9/2026, después del estudio.** Datos confirmados por
> el equipo que cierran varios `[PENDIENTE DE CONFIRMAR]` de este documento:
>
> - Manda **Calendly**; el formulario de `/contacto` queda como alternativa
>   por escrito. La llamada dura **45 minutos**. Mejora 4 aplicada.
> - La oferta de los **primeros 20 días de campaña incluidos** sigue vigente
>   (mejora 1).
> - Los artículos los firman **Valeria Melero y Yerai Jiménez**. Mejora 8
>   aplicada: firma visible y `author` de tipo `Person`.
> - Melero **tiene ficha de Google Business Profile, pero Google la ha
>   retirado por ahora**. Lo que depende de ella queda en espera.
> - Sigue sin confirmar si la masterclass está vigente.
> - La revisión con el cliente es **cada 15 días**; ya corregido en la web.
> - **27/9/2026:** aplicadas las mejoras 12 (enlaces internos con barra
>   final), 13 (`Organization` en la home y en sobre-nosotros, en lugar de
>   `ProfessionalService` en todas) y 15 (notas internas fuera del HTML).
>   El marcado de preguntas frecuentes se mantiene: Google ya no lo usa,
>   pero no penaliza y otros buscadores pueden leerlo.
> - Propuesta de texto de la mejora 1, pendiente de Valeria:
>   `docs/propuesta-franja-portada.md`.

## 1. Resumen

1. **Melero ya hace bien lo difícil.** Especialización, CEO con cara y voz,
   compromisos por escrito, un caso real que se puede comprobar y la web
   más ligera del grupo (378 KiB; 93 de rendimiento en móvil). Además no
   carga analítica antes del consentimiento; entre las diez, sólo TeamLeads
   hace lo mismo.
2. **Su prueba llega tarde.** El caso de ARC está en la 5.ª sección. Las
   mejores (MRS, MDI, EAM, Agent Extra) ponen algo comprobable junto al
   primer botón. Es la mejora de más impacto y menos esfuerzo.
3. **Falta un paso intermedio.** Entre «45 minutos de videollamada» y «19
   preguntas» no hay nada. La competencia capta con 3-5 campos o con un
   comprobador de zona; para Melero, «¿sigue libre tu zona?» es el gancho
   natural, porque la exclusividad por zona ya es su argumento.
4. **El SEO técnico está bien; el contenido no.** Lighthouse SEO 100, pero
   dos artículos sin firma frente a los diez en una semana de EAM o los
   cerca de treinta de MDI. Google pide firma y experiencia propia, y eso
   Melero lo tiene (Valeria, el diagnóstico, ARC) pero no lo publica.
5. **Parte del marcado ya no sirve.** Google retiró los resultados de FAQ el
   7/5/2026, y `ProfessionalService` sin dirección no opta a negocio local.
   Basta un `Organization` en la home.
6. **La regla de las cifras es una ventaja si se dice.** Casi toda la
   competencia usa cifras sin fuente, testimonios sin apellido, promesas de
   exclusivas o garantías de resultado. Melero no puede hacerlo, y OLT
   demuestra que decir por qué no se hace convence.
7. **Hay incoherencias pequeñas pero visibles**: la llamada dura 45 minutos
   en la home y 30 en el blog y en sobre-nosotros; los CTA van a dos
   embudos distintos; los enlaces internos no coinciden con la URL
   canónica.
8. **Ficha de Google Business Profile: probablemente no aplica.** Google la
   reserva a negocios con local visitable o que van a casa del cliente, y
   Melero trabaja en remoto **[PENDIENTE DE CONFIRMAR]**.

## 2. Método

### Qué se hizo

1. **Contexto de Melero.** Se leyeron `PRODUCT.md`, `CLAUDE.md`, `NOTAS.md` y
   el código (`src/config/site.ts`, `src/pages/index.astro`,
   `src/layouts/Layout.astro`, `src/pages/contacto.astro`,
   `src/pages/sobre-nosotros.astro`, `src/pages/blog/`, `src/content/blog/`,
   `src/content.config.ts`, `astro.config.mjs`, `public/robots.txt`,
   `src/components/`). Después se descargó el HTML publicado de la home, el
   blog, los dos artículos, `/contacto`, `/sobre-nosotros`, `robots.txt` y el
   sitemap, para comprobar que lo publicado coincide con el código.
2. **Descubrir candidatas.** Búsquedas web (herramienta WebSearch, que da
   resultados de EEUU, no de Google.es) con estas consultas:
   «agencia marketing inmobiliario», «agencia marketing inmobiliario captación
   de leads para inmobiliarias España», «captación de leads inmobiliaria
   agencia especializada», «marketing para asesores inmobiliarios captar
   propietarios exclusivas agencia», «marketing para inmobiliarias leads
   propietarios Meta Ads agencia resultados casos», «agencia de marketing
   inmobiliario México leads para inmobiliarias y asesores», «marketing para
   realtors hispanos agencia leads Florida en español», «real estate lead
   generation agency», «real estate lead generation agency done for you for
   realtors», «real estate marketing agency for estate agents UK lead
   generation» y «best real estate marketing agency for agents and brokers
   Facebook ads leads». Los rankings y artículos de terceros que salieron
   sólo sirvieron para encontrar nombres; ninguna afirmación de este
   documento se apoya en ellos.
3. **Leer cada web en su fuente.** Se pidió con `curl` el HTML de 29
   candidatas (25 respondieron) y se extrajo con un script propio: `<title>`, meta description,
   H1, canonical, hreflang, meta viewport, tipos JSON-LD, enlaces `tel:` y
   WhatsApp, formularios y número de campos, textos de los botones y scripts
   de terceros. Después se leyó el texto de cada portada para ordenar sus
   secciones y su oferta.
4. **Velocidad.** PageSpeed Insights en móvil para cada portada elegida y
   para `https://www.valeriamelero.com/` y `https://www.valeriamelero.com/blog/`.
   La API sin clave (`pagespeedonline/v5/runPagespeed`) devolvió **429 en las
   26 peticiones** (13 URL × 2 intentos, de 14:40 a 15:10), con el mensaje de
   cuota diaria agotada y límite 0 para peticiones sin clave. Por eso las
   cifras salen de la **interfaz oficial de PageSpeed Insights**
   (`pagespeed.web.dev`), que usa el mismo motor: Lighthouse 13.5.0, Moto G
   Power emulado, 4G lenta. Cada informe lleva su hora.
5. **SEO según Google.** Se leyeron el mismo día las páginas de Google Search
   Central y de la ayuda de Google Business Profile que se citan en la sección
   5, anotando su fecha de «última actualización».

### Criterios para elegir las 10 webs

Una web entra si cumple **las tres primeras** y suma al menos una de las
señales de calidad:

1. **Negocio principal:** marketing o captación de clientes para negocios
   inmobiliarios (agencias, brokers, asesores). Entran agencias y servicios
   «hechos por ti» (done-for-you). Fuera portales (Idealista, Fotocasa,
   Zillow), venta de datos y software puro (CRM), salvo que se justifique.
2. **Público parecido al de Melero:** agencias y asesores en activo, no sólo
   promotoras.
3. **Web propia legible** sin iniciar sesión.
4. **Señales de calidad observables:** oferta clara en la portada, casos o
   pruebas con nombre, captación bien resuelta (formulario, agenda,
   teléfono), aparición en las búsquedas de arriba, contenido propio (blog,
   guías), reseñas en terceros.

Mezcla buscada: cuatro de España, una de Latinoamérica en castellano, una de
EEUU en castellano para el público hispano (el segundo mercado de Melero) y
cuatro de EEUU y Reino Unido.

### Limitaciones

- **HTML servido, no página pintada.** Lo que una web muestra sólo con
  JavaScript no se ve en el HTML. Ejemplo: los contadores de MRS Media y de
  Hanok salen como «0+» en el HTML. Donde pasa, se dice.
- **No se ha visto ninguna web renderizada en un teléfono real.** Lo de
  móvil se limita a lo medible: viewport, enlaces `tel:` y WhatsApp, longitud
  de formularios, peso y PageSpeed.
- **PageSpeed de laboratorio varía entre ejecuciones** (red, servidor, hora).
  Se hizo una ejecución por URL; tómense las cifras como orden de magnitud,
  no como diferencia exacta.
- **Datos de campo (CrUX).** Se anotan cuando PageSpeed los da. Si dice «No
  hay datos», es que la web no tiene tráfico suficiente de Chrome para
  publicarlos, no que vaya bien o mal.
- **Posiciones en Google.es no medidas.** No hay herramienta de ranking; que
  una web salga en las búsquedas de arriba es sólo un indicio.
- **Cifras de las agencias.** Todo número que publica una agencia (leads,
  clientes, ROI, facturación) se presenta como «la web afirma…». No se ha
  auditado ninguno.
- **No se envió ningún formulario** ni se reservó ninguna llamada: la
  captación se evalúa por lo que la web muestra, no por la respuesta.
- La frecuencia de revisión con el cliente es cada 15 días (confirmado el
  26/9/2026). Si la web publicada aún dice «reporte semanal», se está
  corrigiendo en paralelo y **no se cuenta como hallazgo**.

## 3. Las webs elegidas

| # | Nombre | País | URL analizada | Qué venden y a quién | Por qué entra |
|---|---|---|---|---|---|
| 1 | MRS Media | España (Madrid) | https://mrsmedia.es/ | Captación de propietarios y exclusivas para inmobiliarias: anuncios en Meta, Google y YouTube, filtrado y seguimiento. | Competidor directo: mismo comprador, mismo mercado y la misma «una inmobiliaria por zona». Casos con cifras, reseñas de Google, garantía. Sale en «agencia marketing inmobiliario captación de leads». |
| 2 | Agencia MDI (InmoSystem 3X) | España (dice operar también en LATAM) | https://agenciamdi.com/ | Captación con Meta Ads, CRM, seguimiento automático por WhatsApp y agenda de valoraciones para inmobiliarias. | Competidor directo con el embudo más parecido al de Melero: sesión de diagnóstico, exclusividad por zona, «no es para ti si…». Casos con nombre de inmobiliaria. |
| 3 | TeamLeads | España | https://www.teamleads.es/agencia-marketing-inmobiliario | Leads de propietarios y compradores por Meta Ads con cualificación automática, avisos por WhatsApp. | Primer resultado en «agencia de marketing para inmobiliarias». Embudo de WhatsApp y cuestionario de 10 preguntas. **Salvedad:** su portada ya vende leads para siete sectores; se analiza su página inmobiliaria, que es la que compite con Melero. |
| 4 | Kaptar | España y Latinoamérica | https://kaptar.agency/ | Marketing sólo inmobiliario: captación de propietarios y compradores, reclutamiento de agentes, redes y web. | Especialista en castellano con presencia en España y LATAM. Recursos descargables, casos (anónimos) con datos, ficha de «para quién es». Sale en dos búsquedas. |
| 5 | Trichter Consulting | Latinoamérica (México), con páginas para España | https://trichterconsulting.com/ | Marketing inmobiliario con IA: citas calificadas, CRM y automatización, sobre todo para desarrolladoras e inmobiliarias. | Referencia en castellano con la mayor estructura de contenido: blog, guías y una página por país. Útil para el eje de SEO y páginas por zona. **Salvedad:** su público principal son promotoras. |
| 6 | OLT Spanish Leads | EEUU (web en castellano) | https://oltspanishleads.com/ | Captación y calificación con IA de compradores y vendedores hispanohablantes para agentes y brokerages en EEUU. | La más cercana al segundo mercado de Melero. Exclusividad por código postal, precio publicado y una sección que rechaza publicar cifras no auditables. |
| 7 | Curaytor | EEUU | https://www.curaytor.com/ | Plataforma (web, email, contenidos) más servicios de agencia (PPC de compradores y vendedores, SEO, promoción de inmuebles) para agentes y equipos. | Modelo mixto plataforma + equipo que domina en EEUU. Resultados con nombre de agente, precio publicado, FAQ que responde al coste. |
| 8 | Ylopo | EEUU | https://www.ylopo.com/ | Generación de leads (Meta, Google) y nutrición con IA de texto y voz para agentes, equipos y brokerages. | La referencia de escala en EEUU (la web afirma más de 75.000 profesionales). Entra aunque es mitad software porque vende la captación hecha. |
| 9 | Estate Agency Marketing (EAM) | Reino Unido | https://estateagency.marketing/ | SEO local, Meta Ads, búsqueda con IA, contenidos y email para agencias independientes de venta y alquiler. | Especialista con fundador visible, casos por canal, testimonios con nombre y ciudad, guía gratuita y vídeo propio. Sale en «real estate marketing agency UK». |
| 10 | Agent Extra | Reino Unido | https://agentextra.co.uk/ | Captación de tasaciones (valuations) para agencias: Meta, Google, centro de llamadas, web y marca. | La prueba social más fuerte del grupo: testimonios con nombre, apellido y agencia (Martin & Co, Miller Metcalfe, EweMove…). Formulario en la cabecera y teléfono. |

**Candidatas descartadas y por qué** (todas consultadas el 26/9/2026):

- **FelaMedia** (felamedia.com): vende a hispanos en EEUU, pero es
  multisector (seguros, finanzas, belleza, coaches…).
- **Hanok** (hanokagency.com): inmobiliario amplio (promotoras, proptech,
  senior living, construcción), más marca y comunicación que captación para
  agencias.
- **Tactius** (tactius.com/marketinginmobiliario/): consultora generalista
  con un servicio de captación telefónica a particulares de portales.
- **LeadInmo** (leadinmo.es): automatización con IA para inmobiliarias.
  Encajaba, pero sus señales son más débiles (testimonios con inicial,
  promesas de comisiones mensuales). Se usa como contraejemplo en la sección 7.
- **Luxury Presence, REDX, Market Leader, Real Geeks, Zillow Premier
  Agent**: plataformas, datos o portales.
- **Urbalead, Landing Agency, AD-DO, Eximia, Wide Marketing, Positivo,
  Coorve, Recreativos**: orientadas a promotoras o generalistas.
- **Real Estate Marketing Media** (Reino Unido): marketing inmobiliario
  integral (marca, CGI, relaciones públicas) para promotoras, arquitectos y
  constructoras, no centrado en captación para agencias.
- **EAanalytics** (Reino Unido) y **Viventis** (España, en
  fernandocopado.com): mismo público y oferta que otras elegidas de su país
  (EAM y Agent Extra; MRS y MDI); se priorizaron las que enseñan más
  señales comprobables.
- **Sin acceso:** BoldLeads (boldleads.com) y Alavista no respondieron;
  Agent Image devolvió 403 (bloqueo a peticiones automáticas); la URL de
  Gogetit Leads no respondió. No se evaluaron.

## 4. Comparativa por eje

Todas las observaciones son de la portada (o de la página inmobiliaria, en
TeamLeads) consultada el 26/9/2026. Las cifras entre comillas o precedidas de
«afirma» son de la propia agencia y no se han verificado.

### Eje 1. Portada: estructura y mensaje

| Web | Qué se ve sin hacer scroll | A quién se dirige | Orden de secciones (resumido) | Cómo trata la desconfianza | Qué prueba enseña y dónde |
|---|---|---|---|---|---|
| **Melero Realty** | H1 «Captación de leads para inmobiliarias que ya están facturando.», frase de apoyo «Sin portales. Sin referidos. Sin curiosos.», barra con tres desplegables (tipo, zona, facturación) y botón «Reservar diagnóstico»; debajo, «45 minutos de videollamada con Valeria. Sin coste y sin compromiso» (`src/pages/index.astro`, líneas 65-122). | Inmobiliarias y asesores en activo; España y EEUU en la meta description (`src/config/site.ts`, `SITE.description`). | Problema (dependencia del portal) → vídeo de la CEO → servicio → comparativa con «otras agencias» → caso ARC → proceso en 5 fases → servicios → «El trato» (6 compromisos y los 20 días pagados) → equipo → FAQ → cierre con foto de Valeria. | Comparativa explícita, «No te pedimos que dejes el portal», compromisos por escrito (métricas pactadas, puertas abiertas, salida con 15 días de preaviso, la inversión publicitaria nunca pasa por Melero), respuesta honesta si no encaja (FAQ). | Un caso con nombre, enlace, cifra y permiso (ARC, +30 % de facturación) y una cita firmada. **Está en la 5.ª sección**: sobre el pliegue no hay ninguna prueba. |
| MRS Media | H1 «Captación de inmuebles para inmobiliarias», promesa de propietarios filtrados y en exclusiva, botón «Agenda tu llamada gratis» y, justo debajo, insignia «5,0 · Reseñas de Google» que enlaza a su ficha de Maps. | Inmobiliarias de España. | Hero → logos de agencias y contadores → testimonios y 3 casos → «un lead no paga las facturas» → método en 5 pasos → qué sacas → exclusividad (una por zona, 25 km) → garantía de 90 días → fundador (Miroslav) → FAQ → cierre. | Garantía («más captaciones en 90 días o seguimos gratis»), trato directo con el fundador, zona exclusiva, FAQ que explica por qué no publica tarifa. | Reseñas de Google, 11 logos de agencias, testimonios en vídeo y capturas de campañas. La web afirma más de 35 agencias. Varios testimonios llevan sólo nombre de pila y «Agencia inmobiliaria». |
| Agencia MDI | H1 que opone «leads» a «valoraciones agendadas», botón «Reserva tu sesión estratégica», microcopia «30 min · sin compromiso · sin permanencia · 1 sola inmobiliaria por zona», una reseña de Google y tres clientes con nombre y ciudad. | Inmobiliarias (España; dice operar también en LATAM). | Hero → dolores → coste de seguir igual → el sistema en 4 piezas → qué se instala → puesta en marcha → antes y después → resultados con nombre → comparativa con portales, agencia generalista y «hacerlo tú» → exclusividad y comprobador de zona → «no es para todo el mundo» → fundador → FAQ → cierre y recurso gratuito. | Bloque «Honestidad primero» con para quién sí y para quién no, garantía condicionada a 90 días, inversión publicitaria pagada directamente a la plataforma, diagnóstico que el cliente se lleva aunque no contrate. | Nombres de inmobiliarias y ciudad (Barcelona, Marbella, México). Las cifras se animan con JavaScript y en el HTML salen como «0». |
| TeamLeads | H1 «Agencia de marketing inmobiliario», propietarios con intención de vender «directos a tu WhatsApp» y botón de WhatsApp. | Agencias y agentes de España («desde 2021», según su meta description). | Hero → 7 tipos de lead → proceso en 5 pasos → tabla «la mayoría» contra TeamLeads → rendimiento medio → calculadora de facturación → equipo → logos → FAQ. | «Sin permanencia», tabla comparativa, aviso de que los datos varían por zona. | Medias propias sin fuente (86 % de contacto, 10-15 % de mandatos firmados) y logos, entre ellos marcas de franquicia (Remax, Tecnocasa). Su portada general vende leads para siete sectores. |
| Kaptar | H1 de tres frases (exclusivas, compradores, equipo), dos botones («Hablemos de tu caso», «Conoce el sistema»), «Especializados 100 % en Real Estate · LATAM y España». | Inmobiliarias, agentes, franquicias y desarrolladoras. | Hero → relato en scroll → «seamos honestos» → el sistema en 7 etapas → 5 servicios → para quién es y para quién no → formación → mercados por país → resultados → recursos descargables → formulario. | Lista de con quién no trabajan, formación incluida, reconocimiento de que la IA sin criterio resta. | Casos «anónimos · datos reales» y cifras del equipo «antes del rebranding» (más de 12.000 leads, afirma). Nombres de marcas que «confiaron en el equipo». |
| Trichter | H1 «Más citas calificadas. Menos pauta perdida.», demo de conversación marcada como «datos ilustrativos», menciones de prensa. | Desarrolladoras y equipos comerciales (LATAM). | Hero → «el costo por lead no te dice qué campaña vende» → método en 4 fases → matriz de adquisición «anonimizada» → sistema → prensa. | Habla de coste por visita y por firma, no de volumen; etiqueta lo ilustrativo como tal. | Prensa mexicana enlazada, matriz anonimizada, casos en el blog. |
| OLT Spanish Leads | H1 sobre compradores y vendedores hispanos «calificados antes de llegar a ti», botón «Agenda una llamada» y otro «Cómo lo verificas»; tres promesas (exclusividad por código postal, calificación en español con IA, sin comisión sobre cierres). | Agentes y brokerages de EEUU con clientela hispana. | Hero → tamaño del mercado hispano con fuente (Censo de EEUU y NAHREP) → tres fallos de la competencia → 4 piezas → fichas de ejemplo (dice que son ficticias) → cómo arranca un mercado → transparencia → mapa → precio → garantía → FAQ → formulario de 4 pasos. | Sección entera titulada que no publican cifras que no se puedan auditar; precio publicado; lo que no cobran; garantía acotada (devuelve la cuota si en 30 días no hay ni un lead calificado); qué no promete. | Ninguna prueba de clientes, a propósito: dice que publicará resultados con permiso y fuente cuando los tenga. |
| Curaytor | H1 «Real Estate marketing done in minutes. Not hours.», plataforma + equipo, «Get Started». | Agentes y equipos que ya producen. | Hero → soluciones por perfil → «Trusted By» → resultados de los últimos 6 meses → plataforma y servicios → formulario de recomendación → FAQ. | La FAQ responde de frente «cuánto cuesta y si merece la pena». | Resultados con nombre de agente y cifra (1,6 M$, 11 operaciones…); afirmaciones suyas. |
| Ylopo | H1 sobre «un equipo de agentes de IA» y demo animada de un lead; «tus leads son 100 % tuyos, nunca revendidos». | Agentes, equipos y brokerages. | Hero → problema (7 llamadas para contactar) → qué es → cómo funciona → «the receipts» → vídeos de clientes → resultados «verificados» → por qué Ylopo → precios (sin cifra). | Propiedad de los leads, vídeos de clientes, explica de qué depende el precio. | Nueve testimonios con nombre, empresa y cifra, marcados «Verified» (en YouTube); cifras de ROI que son afirmaciones. |
| EAM | H1 «Estate Agent Marketing That Wins More Valuations», párrafo que dice quién lo dirige, desde cuándo y a cuántos agentes ha ayudado, botón «Book a Discovery Call». | Agencias independientes de venta y alquiler del Reino Unido. | Hero con 3 cifras → servicios → quiénes son → resultados (3 casos) y 3 testimonios con nombre y ciudad → vídeos → por qué se pierden instrucciones → servicios en detalle → FAQ. | Fundador con nombre y trayectoria (ex Keller Williams UK y eXp UK), especialización exclusiva, casos por canal. | Casos con cifras, testimonios con nombre y ciudad, página de reseñas en un tercero (verifytrusted.com), «5-star Google reviews» (afirma). **Descuido:** en producción se lee «Plans start from [£X] per month», un marcador sin rellenar. |
| Agent Extra | H1 «Lead Generation for Estate Agents», **formulario de 5 campos en la cabecera**, teléfono y «Speak to an expert». | Agencias del Reino Unido (venta y alquiler). | Hero con formulario → qué hacen y nominación a premios del sector → 6 servicios → testimonios → «Trusted by» → prueba gratis → fundadores (Jack y Danny) → casos. | Prueba gratuita, fundadores ex agentes, testimonios verificables. | La prueba social más fuerte: testimonios con nombre, apellido y agencia real (Miller Metcalfe, Martin & Co, EweMove, Bective…). |

**Qué funciona mejor y por qué**

- **Prueba cerca del botón.** MRS, MDI, EAM y Agent Extra ponen algo
  comprobable en la primera pantalla (reseñas enlazadas, clientes con nombre,
  testimonios con agencia). En Melero la única prueba real, ARC, llega en la
  5.ª sección; quien decide en la cabecera no la ve.
- **Decir para quién no es.** MDI y Kaptar lo escriben en una lista. Encaja
  con el principio de Melero de que descualificar es una función
  (`PRODUCT.md`, «Product Principles» 3). Melero hoy lo hace a medias: el
  aviso del desplegable de facturación (`index.astro`, `#abAviso`) y la
  primera pregunta de la FAQ.
- **La transparencia como respuesta a la desconfianza.** OLT dedica una
  sección a explicar por qué no publica cifras sin auditar y qué se puede
  comprobar (cuenta publicitaria a nombre del cliente, conversaciones
  completas, atribución). Es exactamente la regla de Melero, pero Melero la
  cumple sin decirla.
- **Cara y nombre.** Todas las buenas enseñan a quien está detrás. Melero
  lo hace bien (vídeo de la CEO en la 2.ª sección y foto de Valeria junto al
  botón final).
- **Métricas de negocio, no de volumen.** Trichter y MDI hablan de coste por
  visita o de valoraciones agendadas, igual que Melero con coste por lead y
  coste por cliente. Es el terreno donde Melero ya compite bien.

### Eje 2. Captación de leads

| Web | CTA principal (veces en portada) | Agenda | Formulario | WhatsApp / teléfono | Lead magnet | Casos, testimonios, logos | Garantía | Precio |
|---|---|---|---|---|---|---|---|---|
| **Melero Realty** | «Reservar diagnóstico» ×4 y «Diagnóstico» ×1, más la barra fija en móvil. Secundario: «O cuéntanoslo por escrito» ×2 hacia `/contacto`. Todos hablan de diagnóstico. | Calendly (`SITE.calendlyUrl`), 45 min con Valeria. Los tres desplegables del hero viajan como UTM a la reserva y avisan, sin bloquear, si la facturación es baja. | `/contacto`: 5 pasos, 19 preguntas más el consentimiento, 5 respuestas de texto libre obligatorias (`src/pages/contacto.astro`). Sólo se llega desde los dos enlaces secundarios, el pie, el blog y sobre-nosotros. | WhatsApp con texto prerrellenado en el cierre y en el pie. **Sin enlace `tel:`**: el número sólo aparece como texto del enlace de WhatsApp en el pie. | Ninguno en la web (la masterclass «Captación sin portales» existe, según `PRODUCT.md`, pero no está enlazada). | 1 caso con nombre, enlace, cifra y permiso (ARC); 1 testimonio firmado; 1 logo. | No lo llama garantía, pero ofrece tres reductores de riesgo: los primeros 20 días de campaña los paga Melero, salida con 15 días de preaviso llevándose todo, y en la FAQ «seguimos trabajando hasta conseguirlo». | No publicado (decisión del 6/9/2026). La FAQ explica de qué depende. |
| MRS Media | «Agenda tu llamada gratis» ×3, «Reserva tu zona» ×1. | Página `/contacto` con un cuestionario incrustado de LeadConnector (GoHighLevel); llamada de 15 min. | El del widget (no visible en el HTML: no verificado cuántos campos tiene). | WhatsApp y `tel:`. | No. | 3 casos con cifras, 4 testimonios (sólo uno con fuente: «vía Google»), 11 logos, capturas de campañas, vídeos. | «Más captaciones en 90 días o seguimos gratis». | No publicado, «a propósito»; lo explica en la FAQ. |
| Agencia MDI | «Reserva tu sesión estratégica» ×5. | `/reserva/` con widget de reservas de su CRM (`crm.agenciamdi.com`); sesión de 30 min. | Dos formularios en portada: **comprobador de zona** (nombre, ciudad, zona, email + privacidad) y recurso gratuito (nombre, email). | WhatsApp. Sin `tel:`. | «Diagnóstico gratis: las 10 fugas…», por email. | Tres clientes con nombre y ciudad; una reseña de Google firmada con nombre e inicial. | 90 días: si no recuperas lo invertido en el servicio, sigue gratis, con condiciones escritas. | No publicado: implantación más cuota mensual; el rango, en la sesión. |
| TeamLeads | 8 botones, todos a WhatsApp («Quiero mis leads inmobiliarios»…). | No hay agenda: la conversación empieza en WhatsApp. | Cuestionario de 10 preguntas a pantalla completa (se carga con JavaScript). | WhatsApp como canal principal. Sin `tel:`. | Calculadora de facturación estimada y un curso («Cazador de Propiedades»). | Medias propias sin fuente; logos. | «Sin permanencia». | No publicado. |
| Kaptar | «Hablemos de tu caso» ×3, «Quiero descargarlo» ×3. | No. | Formulario al final y en `/contacto/`: 7 campos (nombre, empresa, email, teléfono, país, necesidad, mensaje). | WhatsApp. Sin `tel:`. | Tres recursos: guía, checklist y «del lead al CRM». | Casos anónimos con datos; nombres de marcas. | No. | No publicado. |
| Trichter | «Agenda tu sesión diagnóstico» ×3. | `/agenda-diagnostico/`: 20 minutos y análisis por escrito aunque no contrates. Herramienta no visible en el HTML. | No verificado (se carga con JavaScript). | WhatsApp. Sin `tel:`. | «Playbook» descargable. | Prensa y casos en el blog. | No. | No publicado: setup más mensualidad, cotización en el diagnóstico. |
| OLT Spanish Leads | «Agenda una llamada» ×2, que baja a un formulario propio. | No: tras el formulario, responden en 24 h hábiles. | **4 pasos** de una pregunta cada uno (el primero, el mercado; el resto se pinta con JavaScript). | No. Sólo email. | No. | Ninguno, por decisión declarada. | Devuelve la cuota de gestión si en 30 días no hay ni un lead calificado. | **Publicado**: 300 $ de puesta en marcha, 300 $/mes de gestión e inversión desde 750 $/mes en la cuenta del cliente. |
| Curaytor | «Get Started» ×3 hacia `/pricing`. | No verificado. | Formulario «Tell us about your business» (se carga con JavaScript: no verificado). | `tel:`. | Plantillas y base de campañas (producto). | Resultados con nombre de agente. | No. | **Publicado**: desde 1.299 $/mes la plataforma. |
| Ylopo | «Request/Book a Demo» ×6, «Get an ROI Estimate» ×2. | Demo (modal; no verificado). | No verificado (modal). | `tel:`. | Webinars, masterclasses, estimador de ROI. | Nueve testimonios «verificados» con nombre y empresa, vídeos. | No. | Tres planes sin cifra; el número sale de una llamada de 20 min. |
| EAM | «Book a Discovery Call» ×4, «Free Guide» ×3. | Tras el formulario, proponen hora para una videollamada. | **3 campos**: nombre, email y web (`/contact-us/`). | `tel:` en la cabecera. | Guía gratuita de captación. | 10 casos por canal, testimonios con nombre y ciudad, reseñas en un tercero. | No. | Marcador sin rellenar («[£X]»): en la práctica, no publicado. |
| Agent Extra | «Speak to an expert», «Book a demo», «Sign Up Here» (prueba gratis). | **Calendly incrustado** en la portada. | **5 campos en la cabecera** (nombre, email, teléfono, empresa, mensaje). | `tel:` en cabecera y cuerpo. | Prueba gratuita. | 6 testimonios con nombre y agencia, casos. | Prueba gratis. | No: la página «Services & Pricing» no tiene precios. |

**Qué funciona mejor y por qué**

- **Un paso intermedio corto.** Entre «reserva 45 minutos» y «rellena 19
  preguntas» no hay nada en Melero. La competencia sí lo tiene: EAM pide tres
  campos, OLT hace cuatro preguntas de un toque, Agent Extra pone cinco
  campos en la cabecera y MDI ofrece un **comprobador de zona**. Este último
  es el que mejor le encaja a Melero, porque la exclusividad por zona ya es
  uno de sus argumentos (`index.astro`, tarjeta «Exclusividad por zona», y la
  FAQ «¿Y si mi zona ya está ocupada?»). MRS («Reserva tu zona») y OLT
  («Veamos si tu mercado está disponible») usan el mismo gancho.
- **Teléfono y WhatsApp a mano.** Las cuatro españolas tienen WhatsApp; las
  de EEUU y Reino Unido, teléfono pulsable. Melero sólo ofrece WhatsApp al
  final de la página y no tiene enlace `tel:`.
- **Un recurso para quien aún no quiere llamar.** MDI, Kaptar, EAM y
  Trichter capturan contactos con una guía o checklist. Melero ya tiene el
  material (la masterclass) y no lo usa en la web.
- **Prueba con nombre.** Agent Extra, Ylopo y Curaytor ponen nombre y
  empresa a cada testimonio. Melero tiene uno solo, pero con enlace a la
  empresa y con el permiso para la cifra documentado (`PRODUCT.md`), algo
  que en las demás no se puede comprobar.
- **Garantía de lo que depende de ti.** OLT limita su garantía a lo que
  controla (que llegue al menos un lead calificado) y dice lo que no promete.
  Es compatible con «no prometer más clientes»; las garantías de MRS y MDI
  («más captaciones», «recuperar lo invertido») no lo son.
- **Dos embudos sin decidir.** Los CTA de la home van a Calendly y los del
  blog y sobre-nosotros a `/contacto` (`src/components/BlogCta.astro`,
  `src/pages/sobre-nosotros.astro`). Además, la duración de la llamada no es
  la misma en todas partes: 45 minutos en la home y en el enlace de Calendly
  (`45-60min`), 30 minutos en `BLOG.cta.texto` y en el cierre de
  sobre-nosotros. **[PENDIENTE DE CONFIRMAR]** cuál es la buena.

### Eje 3. Diseño y experiencia en móvil

Sólo lo medible. No se ha visto ninguna web pintada en un teléfono real; la
navegación móvil y los botones fijos de la competencia **no se han
verificado** (dependen de CSS y JavaScript que no se ejecutaron).

PageSpeed Insights, móvil, Lighthouse 13.5.0 (Moto G Power emulado, 4G
lenta). Orden de las puntuaciones: rendimiento / accesibilidad / buenas
prácticas / SEO. Las siete primeras filas se midieron entre las 14:44 y las
14:50 y las cinco últimas entre las 18:03 y las 18:09 del 26/9/2026.

| Web | Viewport | Llamar o escribir desde el móvil | Formulario más corto | Peso total | Puntuaciones | LCP / TBT / CLS (lab) | Datos de campo (CrUX) |
|---|---|---|---|---|---|---|---|
| **Melero (home)** | Correcto | WhatsApp al final; sin `tel:`. Barra fija «Reservar diagnóstico · 45 min · sin coste» tras el 25 % del scroll (sólo ≤620 px). | 19 preguntas en 5 pasos (o Calendly sin formulario) | 378 KiB | 93 / 92 / 100 / 100 | 2,7 s / 0 ms / 0 | Sin datos |
| **Melero (blog)** | Correcto | Botón de cierre a `/contacto` | Ídem | 288 KiB | 94 / 98 / 100 / 100 | 2,4 s / 0 ms / 0 | Sin datos |
| MRS Media | Correcto | WhatsApp y `tel:` | No verificado (widget) | 1.456 KiB | 58 / 94 / 92 / 100 | 10,3 s / 130 ms / 0 | Sin datos |
| Agencia MDI | Correcto | WhatsApp | 4 campos (zona) | 672 KiB | 94 / 100 / 100 / 100 | 1,2 s / 230 ms / 0 | Sin datos |
| TeamLeads | Correcto | WhatsApp (todos los CTA) | Cuestionario de 10 preguntas | 2.024 KiB | 59 / 97 / 96 / 100 | 13,0 s / 180 ms / 0 | Sin datos |
| Kaptar | Correcto | WhatsApp | 7 campos | 680 KiB | 99 / 97 / 100 / 100 | 2,3 s / 50 ms / 0 | Sin datos |
| OLT | Correcto | Ninguno (sólo email) | 4 pasos de una pregunta | 950 KiB | 74 / 79 / 100 / 100 | 6,5 s / 40 ms / 0 | Sin datos |
| Trichter | Correcto | WhatsApp | No verificado | 3.474 KiB | 69 / 94 / 50 / 100 | 2,0 s / 2.770 ms / 0,014 | Sin datos |
| Curaytor | Sin `initial-scale` y sin atributo `lang` | `tel:` | No verificado | 2.907 KiB | 58 / 84 / 96 / 85 | 3,0 s / 3.840 ms / 0,015 | **No supera** (28 días): LCP 4,3 s, INP 261 ms, CLS 0 |
| Ylopo | Correcto | `tel:` | No verificado | 2.059 KiB | 40 / 100 / 100 / 100 | 9,3 s / 1.500 ms / 0 | **Supera** (28 días): LCP 1,2 s, INP 115 ms, CLS 0 |
| EAM | **Bloquea el zoom** (`maximum-scale=1.0, user-scalable=0`) | `tel:` | 3 campos | 2.266 KiB | 66 / 88 / 96 / 100 | 7,3 s / 150 ms / 0 | Sin datos |
| Agent Extra | Correcto | `tel:` | 5 campos en la cabecera | 7.849 KiB | 53 / 88 / 73 / 100 | 3,0 s / 3.230 ms / 0,056 | Sin datos |

Informes de PageSpeed con su enlace en la sección 8.

**Terceros que se cargan en la primera visita** (lo que Lighthouse vio antes
de cualquier interacción, es decir, sin haber aceptado cookies):

- **Melero:** sólo Google Fonts. GA4 no aparece, como exige la regla de
  `CLAUDE.md` («Nada de analítica fuera del consentimiento»).
- MRS Media: Google Tag Manager, Google Analytics y un vídeo de YouTube
  incrustado (990 KiB). MDI y Kaptar: Google Tag Manager y Google Analytics.
  OLT: el píxel de Meta. Trichter: Tag Manager, Meta, Hotjar, Clarity y
  Analytics. Curaytor: Tag Manager, Meta, Hotjar, HubSpot, Clarity,
  Smartlook, Analytics y DoubleClick. Ylopo: Tag Manager, TikTok, Meta,
  Crazy Egg y DoubleClick. EAM: Tag Manager, estadísticas de WordPress y
  DoubleClick. Agent Extra: Calendly incrustado (2.809 KiB), reCAPTCHA,
  Tag Manager, Meta, Stripe, Clarity y DoubleClick. TeamLeads carga su gestor
  de consentimiento (Cookiebot), un monitor de errores (Sentry) y ninguna
  analítica.
- No se comprobó si esas etiquetas instalan cookies antes del consentimiento
  (algunas pueden funcionar en modo sin cookies). Lo que sí se ve es el peso:
  las webs con más etiquetas son las más lentas en tiempo de bloqueo (TBT).

**Qué funciona mejor y por qué**

- **Melero es la más ligera y de las más rápidas del grupo** (378 KiB, TBT
  0 ms, CLS 0). Sólo Kaptar y MDI están a su altura. Ayudan dos decisiones
  ya tomadas: no cargar etiquetas sin consentimiento y usar una fachada para
  el vídeo (`src/components/VideoEmbed.astro`). MRS incrusta el suyo y sólo
  el reproductor de YouTube le suma 990 KiB.
- **Donde Melero pierde puntos es en detalles corregibles.** Del informe de
  la home: los antetítulos en teal sobre el fondo gris (`--paper`) dan 4,48:1,
  por debajo del 4,5:1 que pide AA para texto pequeño («(02) En vídeo»,
  «(04) La diferencia», «(09) Equipo»); el enlace «Reservar diagnóstico →»
  del bloque de vídeo y el botón «Ver el vídeo» tienen área táctil
  insuficiente; el pie salta de `h2` a `h4` («Navegación», «Contacto»); la
  hoja de estilos y la de Google Fonts bloquean el renderizado (ahorro
  estimado 940 ms); y las imágenes se sirven más grandes de lo que se pintan:
  `band-campanas.webp` (1100×1375, 155 KiB) se pinta a 649×811 en el móvil
  emulado, con un ahorro estimado de 70 KiB, y la del hero
  (`hero-piso.webp`, que es el elemento LCP) podría ahorrar 50 KiB con una
  versión para móvil.
- **Lab y campo no siempre coinciden.** Ylopo saca 40 en laboratorio y
  aprueba las Core Web Vitals con usuarios reales; Curaytor saca 58 y
  suspende. Por eso Google recomienda mirar los datos de campo (sección 5).
  Melero no tiene tráfico suficiente para tener datos de campo.
- **No bloquear el zoom.** EAM lo impide en su viewport; es un fallo de
  accesibilidad que Melero no tiene.

### Eje 4. SEO

Longitudes en caracteres. «LD» = tipos JSON-LD encontrados en el HTML de la
portada. Blog y sitemaps leídos el 26/9/2026 (fecha de publicación del
marcado del artículo o del feed; si sólo hay `lastmod`, se dice).

| Web | `<title>` | Meta description | H1 | LD | Canonical | Blog | Páginas por zona | hreflang | Sitemap y robots |
|---|---|---|---|---|---|---|---|---|---|
| **Melero** | «Marketing inmobiliario y captación de leads \| Melero Realty» (59) | 128 | 1, descriptivo | `ProfessionalService` en todas las páginas; `FAQPage` en la home; `BlogPosting` + `BreadcrumbList` en artículos | Absoluta, con `www`. Pero los enlaces internos van a `/contacto`, `/aviso-legal`… sin barra final, mientras canonical y sitemap usan `/contacto/`; las dos variantes responden 200 | 2 artículos (12/9 y 26/9/2026), sin firma; autor = organización | No | No (un solo idioma: no hace falta) | `robots.txt` abierto con sitemap; 9 URL, sin `lastmod` |
| MRS Media | «Captación de Inmuebles para Inmobiliarias — MRS Media» (53) | 199 | 1 | `ProfessionalService` con dirección y **`AggregateRating`**, `FAQPage` | Correcta | 2 artículos (22/8 y 25/8/2026); autor `Person` con enlace a «Sobre mí» | **6 ciudades** (Madrid, Málaga, Barcelona, Valencia, Sevilla, Murcia): plantilla común con un bloque local de mercado (precios de Idealista de agosto de 2026, municipios). Madrid y Sevilla comparten el 61 % de sus secuencias de 5 palabras; Madrid y Murcia, el 54 % | No | 18 URL, sin `lastmod` |
| Agencia MDI | «Agencia de marketing digital inmobiliario \| Agencia MDI» (55) | 156 | 1 | `ProfessionalService`, `Person`, `FAQPage` | Correcta | Unos 29 artículos; el más antiguo, de 2019 según su marcado; el último nuevo, 19/9/2026; autor = organización | 1 (Madrid), con `Service` y `City` | No | 39 URL con `lastmod` (la mayoría del 10/7/2026) |
| TeamLeads | «Agencia de Marketing Inmobiliario \| Leads de Propietarios» (57) | 151 | 1 | `Organization`, `Service`/`OfferCatalog`, `BreadcrumbList`, `FAQPage` | Correcta | 3 artículos (15/1, 19/6 y 7/9/2026), firmados por la CEO; uno trata de la herramienta Systeme.io | No (páginas por sector, no por zona) | No | 15 URL, **todas con `lastmod` del mismo día de la consulta** |
| Kaptar | «Kaptar \| Marketing especializado en Real Estate» (47) | 96 | 1 (tres frases) | `Organization` | Correcta | No hay blog; 3 recursos descargables (septiembre de 2026) | No | No | 7 URL |
| Trichter | «Agencia de Marketing Inmobiliario con IA · LATAM \| Trichter» (59) | 149 | 1 | `Organization`, `WebSite`, `WebPage`, `BreadcrumbList` y **dos** `FAQPage` | Correcta | Muy activo a rachas; último artículo 23/9/2026 según su feed | **Una página por país** (8) | **Sí**: enlaza como variantes `es-MX`, `es-AR`, `es-ES`… páginas de países con contenido distinto (las de España y Perú comparten un 9 % del texto) | 88 URL con `lastmod`; bloquea dos rastreadores (Bytespider, Amazonbot) |
| OLT | «OLT · Leads hispanos para agentes inmobiliarios en EE.UU. · OLT» (63) | 170 | 1 | Ninguno | Correcta | No | No (mercados dentro de la misma página) | No (tiene un botón «EN»; no verificado si abre otra URL) | 1 URL |
| Curaytor | «Curaytor \| Real Estate Marketing Platform & Agency Services» (59) | 145 | 1 | `Corporation` | Correcta | Unas 54 entradas; la última con `lastmod` 9/7/2026 | No | No | 128 URL, algunas repetidas en dos sitemaps. Lighthouse SEO 85, la única por debajo de 100: enlaces sin texto descriptivo e imágenes sin `alt`. Además falta `lang` en `<html>` |
| Ylopo | «AI-Driven Digital Marketing Platform for Real Estate Lead Generation \| Ylopo» (76) | 178 | 1 | `Organization`, `Person`, `WebSite` | Correcta | 281 entradas y 146 webinars; última con `lastmod` 20/7/2026 | No | No | 725 URL |
| EAM | «Estate Agent Marketing \| Lead Gen Experts for UK Agents \| EAM» (61) | 155 | 1 | El más completo: `Organization`, `ProfessionalService`, `Service`/`OfferCatalog`, `FAQPage`, `BreadcrumbList`, horario | Correcta | **El más activo**: 10 artículos entre el 17 y el 24/9/2026 según su feed (SEO local, anuncios en Meta, páginas de tasación, reseñas de Google dentro de las normas, si hace falta SEO estando en los portales) | No para sí misma (escribe sobre cómo hacerlas para sus clientes) | No | 73 URL; su `robots.txt` apunta a un sitemap de vídeo que da 404 |
| Agent Extra | «Estate Agent Marketing That Wins Instructions» (45) | 150 | 1 | `Organization`, `WebSite`, `WebPage`, `BreadcrumbList`, `FAQPage` | Correcta | 131 entradas (artículos y casos); la última nueva, publicada el 8/9/2026 según su marcado | No | No | 207 URL, de ellas 61 archivos de etiquetas y categorías |

Velocidad: ver el eje 3. Lighthouse SEO da 100 a todas salvo a Curaytor.

**Qué funciona mejor y por qué**

- **Lo básico lo cumplen todas, Melero incluida.** Título descriptivo,
  description, un H1, canonical y viewport. La diferencia no está en la
  técnica, sino en el contenido y en la entidad.
- **Contenido que responde a lo que busca el cliente.** EAM publicó diez
  artículos en una semana sobre exactamente lo que teme su comprador (entre
  otras cosas, si hace falta SEO estando en Rightmove, el portal británico):
  es el mismo miedo que trabaja Melero con los portales. MDI acumula siete años de
  artículos. Melero tiene dos, sin firma.
- **Autor con nombre.** MRS marca el autor como persona con enlace a su
  biografía, que es lo que recomienda Google (sección 5). Melero lo atribuye
  a la organización y no lo firma (`src/pages/blog/[slug].astro`; pendiente
  en `NOTAS.md`).
- **Páginas por zona: dos modelos.** MRS hace seis ciudades con plantilla y
  un bloque local con datos; MDI, una sola página de Madrid. Ninguno lo
  hace para su propia comarca ni con casos locales. Es el terreno donde
  Google más avisa (páginas puerta, sección 5).
- **Lo que no hay que copiar:** `AggregateRating` sobre la propia empresa
  (MRS), `lastmod` falso (TeamLeads), `hreflang` entre páginas que no son
  traducciones (Trichter) y `FAQPage`, que ya no da nada (sección 5).

## 5. SEO según Google

Páginas leídas el 26/9/2026; entre paréntesis, la fecha de «última
actualización» que muestra cada una. Lo de Google está resumido con palabras
propias; el enlace lleva al texto original.

| # | Qué pide Google | Melero hoy | La competencia | Veredicto para Melero |
|---|---|---|---|---|
| 1 | **Títulos** descriptivos, concisos y distintos en cada página; nada de relleno repetido ni de acumular palabras clave. No hay límite de caracteres: Google corta según el ancho del dispositivo. [title-link](https://developers.google.com/search/docs/appearance/title-link) (10/12/2025) | Home bien. «Sobre Nosotros \| Melero Realty» es genérico. La regla del build de 44 + 16 caracteres (`src/content.config.ts`) es una precaución propia, no un requisito de Google. | Todas descriptivas. | Cumple. Mejorable el título de sobre-nosotros. |
| 2 | **Meta description** única por página y que describa esa página; sin límite de longitud. [snippet](https://developers.google.com/search/docs/appearance/snippet) (20/4/2026) | Única en cada página (home, blog, artículos, contacto, sobre-nosotros). | Todas la tienen. | Cumple. |
| 3 | **Contenido útil y fiable**: dejar claro quién lo escribe (firma que lleve a una biografía), cómo se hizo (explicar el uso de IA cuando el lector se lo preguntaría) y para qué. Aporta experiencia de primera mano y análisis propio, no lo que ya dice todo el mundo. [creating-helpful-content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) (10/12/2025); la guía de IA pide contenido «no commodity» y pone como ejemplo de lo contrario un artículo genérico de consejos para compradores de vivienda. [ai-optimization-guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) (10/7/2026) | Dos artículos sin firma, atribuidos a la organización y escritos a partir de `PRODUCT.md` y `site.ts`, sin casos ni datos propios (`NOTAS.md`). La prueba de primera mano que existe (ARC) no aparece en el blog. | MRS firma como persona con enlace a su biografía; TeamLeads firma con el nombre de la CEO; EAM habla en primera persona del fundador y con ejemplos de clientes (portada y vídeos; sus artículos no se leyeron uno a uno). | **No cumple del todo.** Falta firma y falta experiencia propia. |
| 4 | **Datos estructurados, reglas generales**: el marcado describe contenido visible y no engaña. [sd-policies](https://developers.google.com/search/docs/appearance/structured-data/sd-policies) (10/7/2026) | Cumple: la FAQ y el artículo marcados están en la página. | — | Cumple. |
| 5 | **Organization**: en la home o en la página «sobre nosotros»; **no hace falta en todas las páginas**; sin propiedades obligatorias; se recomiendan nombre, URL, logo (mínimo 112×112 y que se vea bien sobre fondo blanco), `sameAs`, email, teléfono. Si el sitio es de un negocio local con sitio físico, usar el subtipo de `LocalBusiness`. [organization](https://developers.google.com/search/docs/appearance/structured-data/organization) (8/9/2026) | `ProfessionalService` (subtipo de `LocalBusiness`) en **todas** las páginas (`src/layouts/Layout.astro`), sin logo, sin teléfono, sin dirección y con `sameAs` sólo a Instagram. El único logo disponible (`public/logo-melero.png`) es dorado sobre transparente y, según `PRODUCT.md`, da 2,05:1 sobre blanco. | EAM y TeamLeads lo completan (servicios, contacto, dirección). Kaptar, Curaytor y Ylopo, lo básico. OLT, nada. | **Mejorable**: cambiar a `Organization` sólo en home (y sobre-nosotros), con logo legible sobre blanco y perfiles oficiales. |
| 6 | **LocalBusiness**: obligatorios `name` y `address` (dirección física). `aggregateRating` sólo para sitios que recogen reseñas de **otros** negocios. [local-business](https://developers.google.com/search/docs/appearance/structured-data/local-business) (8/9/2026) | Declara un subtipo de `LocalBusiness` sin `address`: no puede optar a esa función. Melero no tiene sede abierta al público (persona física en Nerva, trabajo en remoto; `PRODUCT.md`). | MRS y EAM ponen dirección. | No usar `LocalBusiness` mientras no haya dirección pública. |
| 7 | **FAQ**: desde el 14/9/2023 la documentación decía que sólo se mostraba a webs gubernamentales y de salud reconocidas; Google la **retiró de los resultados el 7/5/2026** y **borró su documentación el 15/6/2026**. [search/updates](https://developers.google.com/search/updates) (24/9/2026); la antigua URL `.../structured-data/faqpage` redirige a esa nota. | `FAQPage` en la home (`Layout.astro`, `includeFaqSchema`). | 7 de las 11 webs (Melero incluida) siguen llevándolo. | **No aporta nada en Google.** La FAQ visible sí sirve al lector. No invertir más en el marcado. |
| 8 | **Reseñas**: si la entidad controla las reseñas sobre sí misma (en su marcado o con un widget de Google o Facebook), sus páginas con `Organization` o `LocalBusiness` **no optan a estrellas**; prohibidas las reseñas falsas o incentivadas sin avisarlo (norma añadida el 24/7/2026). [review-snippet](https://developers.google.com/search/docs/appearance/structured-data/review-snippet) (8/9/2026) | Sin `aggregateRating`. Correcto. | MRS marca un `AggregateRating` sobre su propio `ProfessionalService`: no le dará estrellas. | Cumple. No añadirlo. |
| 9 | **Article / BlogPosting**: sin obligatorias; se recomiendan autor (persona u organización) con `name` y `url` a su biografía, fechas con zona horaria e imágenes en 16:9, 4:3 y 1:1 (mínimo 50.000 píxeles). [article](https://developers.google.com/search/docs/appearance/structured-data/article) (8/9/2026) | Autor = organización; fechas sin hora ni zona (`2026-09-12`); una sola imagen 4:5 (`src/pages/blog/[slug].astro`). | MRS: autor persona con URL. | **Mejorable**: firma, imágenes en los tres formatos y zona horaria. |
| 10 | **Breadcrumb**: sólo se muestra en escritorio desde enero de 2025. [breadcrumb](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb) (8/9/2026) | En los artículos. | Varias lo usan. | Cumple; efecto limitado. |
| 11 | **Core Web Vitals**: LCP ≤ 2,5 s, INP < 200 ms, CLS < 0,1. Los sistemas de ranking los usan, pero no hay una única señal de «experiencia de página» y no merece la pena perseguir la puntuación perfecta. [core-web-vitals](https://developers.google.com/search/docs/appearance/core-web-vitals) (10/12/2025), [page-experience](https://developers.google.com/search/docs/appearance/page-experience) (22/9/2026) | Laboratorio: LCP 2,7 s en la home (2,4 s en el blog), CLS 0, TBT 0. Sin datos de campo. | Sólo Ylopo y Curaytor tienen datos de campo; Ylopo aprueba, Curaytor no. | Casi cumple; el LCP de la home está justo por encima en laboratorio. |
| 12 | **Indexación móvil**: el mismo contenido y los mismos datos estructurados en móvil y escritorio; no cargar contenido principal sólo al interactuar. [mobile-first indexing](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing) (10/12/2025) | Mismo HTML para todos; el texto de servicios y FAQ está en el HTML. | EAM bloquea el zoom (accesibilidad, no indexación). | Cumple. |
| 13 | **URL canónica**: enlazar internamente a la URL canónica, no a duplicados. [consolidate-duplicate-urls](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls) (10/7/2026) | Enlaces internos a `/contacto` y las legales sin barra; canonical y sitemap con barra; ambas responden 200. | Correctas en las portadas revisadas. | **No cumple**, aunque es menor y se arregla en minutos. |
| 14 | **Sitemap**: Google usa `lastmod` sólo si es exacto de forma constante; ignora `priority` y `changefreq`. [build-sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap) (8/7/2026) | Sin `lastmod`. | TeamLeads pone la fecha del día a todas las URL, lo que Google no tendrá en cuenta. | Cumple. Opcional: `lastmod` real en los artículos. |
| 15 | **hreflang**: para versiones de la **misma** página en otro idioma o región; cada una se lista a sí misma y a las demás. [localized-versions](https://developers.google.com/search/docs/specialty/international/localized-versions) (21/9/2026) | No lo usa: una sola versión en castellano para España y EEUU. No hace falta. | Trichter lo usa entre páginas de países distintas, que no son versiones de la misma. | Cumple. Sólo tendría sentido con páginas `es-ES` y `es-US` equivalentes. |
| 16 | **Spam: páginas puerta y contenido a escala.** Son abuso, entre otros, las páginas por ciudad o región que llevan todas al mismo sitio y las páginas muy parecidas entre sí; también generar muchas páginas con IA sin aportar valor. [spam-policies](https://developers.google.com/search/docs/essentials/spam-policies) (28/8/2026) | No tiene páginas por zona. | MRS: seis ciudades con plantilla común y bloque local. | Si se hacen páginas por zona, cada una necesita contenido propio y útil, no la ciudad cambiada. |
| 17 | **Google Business Profile**: se puede tener si el negocio tiene un local que los clientes visitan o si va a donde está el cliente; las oficinas virtuales no valen; los negocios de área de servicio ocultan la dirección. [3038177](https://support.google.com/business/answer/3038177). El ranking local depende de relevancia, distancia y prominencia; las reseñas ayudan a la prominencia. [7091](https://support.google.com/business/answer/7091) | No consta ficha ni en el código ni en `PRODUCT.md` (no se buscó en Google Maps). Trabaja en remoto por videollamada (`site.ts`, FAQ «¿Trabajáis presencialmente?»). | MRS y EAM enseñan reseñas de Google. | **Dudoso que Melero pueda tener ficha** si no atiende en persona. **[PENDIENTE DE CONFIRMAR]** con Valeria. |
| 18 | **Lo que Google dice que no hay que perseguir**: la etiqueta `meta keywords` no se usa; repetir palabras clave va contra sus políticas; la longitud del texto por sí sola no cuenta (no hay número mágico de palabras); E-E-A-T no es un factor de ranking en sí. Sí importan títulos únicos y claros, enlaces con texto descriptivo y promocionar el contenido. [seo-starter-guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) (10/12/2025) | No usa `meta keywords`; los textos no fuerzan palabras clave. | — | Cumple. Para el blog: escribir lo necesario, sin objetivo de palabras. |
| 19 | **IA en el buscador**: «AEO» y «GEO» son SEO; no hacen falta archivos `llms.txt`, trocear el contenido ni marcado especial; Search Console tiene un informe de rendimiento en funciones de IA. [ai-optimization-guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) (10/7/2026) | Nada especial, y no hace falta. | EAM, Curaytor y Luxury Presence venden «AI Search», «AEO» o «GEO» como servicio. | Cumple. No perseguir «AEO/GEO» como algo aparte. |

## 6. Mejoras para Melero

Ordenadas por impacto y, dentro de cada nivel, de menos a más esfuerzo. Las
horas son una estimación de trabajo técnico; no incluyen el tiempo de
decisión ni de revisión de Valeria. Toda mejora que toque textos de
`site.ts` o de las plantillas **requiere aprobación de Valeria**
(`PRODUCT.md`, «Product Principles» 6: el contenido de `site.ts` está
validado).

| # | Qué hacer | De dónde sale | Impacto | Esfuerzo | Notas / reglas |
|---|---|---|---|---|---|
| 1 | **Franja de confianza bajo el botón del hero**, una línea con lo que ya es comprobable: logo de ARC enlazado a su web, «+30 % de facturación · constructora, Valencia» y «Los primeros 20 días de campaña los pagamos nosotros». Enlazar «ver el caso» al titular del caso (`#caso-t`, que ya existe). Los datos ya están en `CASO` y en la nota de «El trato» (`index.astro`). | MRS pone sus reseñas justo bajo el botón ([mrsmedia.es](https://mrsmedia.es/)); MDI, clientes con nombre en la cabecera ([agenciamdi.com](https://agenciamdi.com/)); EAM y Agent Extra, prueba en la primera pantalla. | **Alto**: ataca la objeción principal (desconfianza) en el punto donde se decide. | **Bajo**: 2-3 h. | Única cifra publicable, con sus cuatro requisitos (`CLAUDE.md`, «Ninguna cifra sin las cuatro cosas»). Decir «constructora»: ARC no es inmobiliaria (`PRODUCT.md`, «Evidence on Hand»). Según esa misma sección, ARC prueba el acompañamiento 1:1 (el salto llegó en la séptima sesión), no la captación de leads: la franja no debe dar a entender que el +30 % lo trajo un sistema de leads. No llamarlo garantía. Cambia orden y copy aprobados: **requiere aprobación de Valeria**. Confirmar que la oferta de los 20 días sigue vigente **[PENDIENTE DE CONFIRMAR]**. |
| 2 | **Paso intermedio corto: «¿Sigue libre tu zona?»**. Cuatro campos (nombre, WhatsApp o email, zona, tipo de negocio) y consentimiento; guarda en la misma hoja de Google Sheets y, al enviar, ofrece reservar el diagnóstico. Hoy sólo hay dos opciones: 45 minutos en Calendly o 19 preguntas en `/contacto`. | Comprobador de zona de MDI ([agenciamdi.com](https://agenciamdi.com/)); «Reserva tu zona» de MRS; los 4 pasos de OLT ([oltspanishleads.com](https://oltspanishleads.com/)); los 3 campos de EAM ([contact-us](https://estateagency.marketing/contact-us/)). | **Alto**: convierte la exclusividad por zona, que ya es un argumento, en el gancho de captación, con un compromiso mínimo. | **Medio**: 1-2 días (formulario, Apps Script, validación y prueba de punta a punta). | El botón habla de diagnóstico, p. ej. «Comprobar mi zona y pedir diagnóstico» (`PRODUCT.md`, regla de copy 1). Obliga a decidir qué embudo manda (`CLAUDE.md`, «Dos embudos compitiendo») **[PENDIENTE DE CONFIRMAR]**. El envío a Sheets no está probado de punta a punta (`CLAUDE.md`): probarlo antes. Formulario propio, sin widgets de terceros (nada de GoHighLevel o Typeform incrustados: cargarían scripts y cookies). Copy nuevo: **aprobación de Valeria**. |
| 3 | **Plan editorial con experiencia propia**: dos artículos al mes, firmados, sobre las preguntas reales del diagnóstico. Ideas: el caso ARC contado entero (con su permiso), qué aparece al auditar la captación de una inmobiliaria (patrones, sin cifras de clientes), la nutrición de leads como pilar, la dependencia de portales con matices. | EAM publicó 10 artículos en una semana sobre las dudas de su cliente ([feed](https://estateagency.marketing/feed/)); MDI suma unos 29 artículos desde 2019. Google pide contenido con experiencia propia y no genérico ([creating-helpful-content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content), [ai-optimization-guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)). | **Alto** a medio plazo: es la mayor diferencia de SEO con los mejores del grupo. | **Alto**: 4-6 h por artículo más la revisión de Valeria. | Los dos artículos actuales siguen pendientes de revisión (`NOTAS.md`). Sin cifras sin las cuatro cosas; sin prometer «más clientes»; sin dar por hecho que el lector no publica en portales (`PRODUCT.md`, reglas 2-4). No producir en serie con IA: Google lo trata como abuso de contenido a escala ([spam-policies](https://developers.google.com/search/docs/essentials/spam-policies)). |
| 4 | **Unificar la duración de la llamada y el destino de los CTA.** La home y el enlace de Calendly dicen 45 minutos; `BLOG.cta.texto` y el cierre de sobre-nosotros, 30. Los CTA de la home van a Calendly; los del blog y sobre-nosotros, a `/contacto`. | Revisión del código (`src/config/site.ts`, `src/pages/sobre-nosotros.astro`, `src/components/BlogCta.astro`). Cada competidor da una sola duración: MRS 15 min ([contacto](https://mrsmedia.es/contacto)), MDI 30 ([agenciamdi.com](https://agenciamdi.com/)), Trichter 20 ([agenda](https://trichterconsulting.com/agenda-diagnostico/)). | **Medio**: una contradicción en la oferta alimenta la desconfianza. | **Bajo**: 30 min una vez decidido. | `PRODUCT.md` dice 30 minutos («Embudo»). **[PENDIENTE DE CONFIRMAR]** cuál es la buena. Copy validado: **aprobación de Valeria**. |
| 5 | **Decir en voz alta la regla de las cifras**: una frase en «El trato» o junto al caso, del tipo «sólo publicamos cifras con nombre, empresa, enlace y permiso; hoy es una», y recordar que la cuenta publicitaria es del cliente. | OLT dedica una sección a por qué no publica cifras sin auditar ([oltspanishleads.com](https://oltspanishleads.com/)). | **Medio**: convierte la ausencia de estadísticas en argumento. | **Bajo**: 1 h. | Coherente con `CLAUDE.md` («Ninguna cifra sin las cuatro cosas»). Copy nuevo: **aprobación de Valeria**. |
| 6 | **«Para quién no es», en una lista corta**, cerca de la FAQ o de «El trato»: por ejemplo, si buscas volumen de contactos, si necesitas resultados garantizados en pocas semanas, si tu zona ya tiene cliente nuestro. | MDI («Honestidad primero») y Kaptar («Seamos honestos sobre para quién es esto»). | **Medio**: descualificar antes de la llamada es un objetivo del sitio (`PRODUCT.md`, principio 3). | **Bajo**: 2 h. | No contradecir la FAQ ni el aviso del hero, que dejan el diagnóstico abierto a quien nunca ha invertido (`index.astro`, `#abAviso`). Tono no prescriptivo (`PRODUCT.md`, «Voz y tono»). **Aprobación de Valeria**. |
| 7 | **Teléfono pulsable y WhatsApp antes del final**: enlace `tel:` en el pie y en el cierre; WhatsApp también en la microcopia del hero o en la barra fija del móvil. | `tel:` en MRS, EAM ([estateagency.marketing](https://estateagency.marketing/)), Agent Extra ([agentextra.co.uk](https://agentextra.co.uk/)), Curaytor e Ylopo; WhatsApp en las cuatro españolas ([mrsmedia.es](https://mrsmedia.es/), [agenciamdi.com](https://agenciamdi.com/)…). | **Medio**. | **Bajo**: 1 h. | Son enlaces normales: ni scripts ni cookies (`CLAUDE.md`, analítica sólo con consentimiento). **[PENDIENTE DE CONFIRMAR]** si Valeria quiere recibir llamadas o sólo WhatsApp. Texto nuevo: **aprobación de Valeria**. |
| 8 | **Firmar los artículos**: firma visible con enlace a una biografía (por ejemplo, en sobre-nosotros) y, en el JSON-LD, `author` de tipo `Person` con `url`. | Google recomienda firma y autor con enlace a su biografía ([creating-helpful-content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content), [article](https://developers.google.com/search/docs/appearance/structured-data/article)). MRS lo hace ([ejemplo](https://mrsmedia.es/blog/por-que-no-consigues-exclusivas)). | **Medio**. | **Bajo**: 2 h. | Autoría **[PENDIENTE DE CONFIRMAR]** (`NOTAS.md`). Sin «yoísmo»: la firma no convierte el artículo en autobiografía (`PRODUCT.md`, «Voz y tono»). |
| 9 | **Separar el consentimiento del formulario**: una casilla obligatoria para tratar los datos y responder; otra, opcional, para comunicaciones comerciales. Hoy es una sola casilla obligatoria que incluye «comunicaciones comerciales y promociones» (`src/pages/contacto.astro`, líneas 259-269). | MDI pide en su comprobador un consentimiento sólo para responder a la consulta ([agenciamdi.com](https://agenciamdi.com/)). | **Medio**: menos fricción y menos riesgo. | **Bajo**: 1-2 h, más revisar la política de privacidad. | No es una conclusión jurídica: revisarlo con quien lleve la parte legal **[PENDIENTE DE CONFIRMAR]**. El Apps Script tiene que guardar la columna nueva. |
| 10 | **La masterclass «Captación sin portales» como recurso en la web**, con un formulario propio de dos campos (nombre y email) que guarde en Sheets y entregue el enlace. | Recursos descargables de MDI, Kaptar ([recursos](https://kaptar.agency/recursos/)), EAM ([free guide](https://estateagency.marketing/free-lead-gen-guide/)) y Trichter. | **Medio**: captura a quien aún no quiere llamar. | **Medio**: 1 día. | No incrustar el formulario de Systeme.io: metería scripts de terceros con cookies, exigiría consentimiento previo y actualizar la política de cookies (`CLAUDE.md`). «Sin portales» es frase de marca, pero la página no puede dar a entender que el lector no publica en portales (`PRODUCT.md`, regla 2). Confirmar que la masterclass sigue vigente **[PENDIENTE DE CONFIRMAR]**. **Aprobación de Valeria**. |
| 11 | **Páginas por zona sólo donde haya algo propio que contar** (Sevilla y Marbella, si se confirma): datos de mercado con fuente, cómo funciona la exclusividad allí, disponibilidad real y, si existe, un caso local. Nunca la misma plantilla con la ciudad cambiada. | MRS tiene seis ciudades con plantilla común más un bloque local ([ejemplo](https://mrsmedia.es/captacion-de-inmuebles/sevilla)); MDI, una de Madrid. Google considera páginas puerta las páginas por ciudad casi iguales ([spam-policies](https://developers.google.com/search/docs/essentials/spam-policies)). | **Medio**. | **Alto**: 1-2 días por página, más la investigación. | La investigación de palabras clave de Sevilla y Marbella no está en el repositorio **[PENDIENTE DE CONFIRMAR]** (`PRODUCT.md`, `NOTAS.md`). Publicar zonas puede revelar cuáles están ocupadas: decidir con Valeria. |
| 12 | **Enlaces internos a la URL canónica**: `/contacto/`, `/sobre-nosotros/`, `/aviso-legal/`, `/politica-de-privacidad/`, `/politica-de-cookies/`; o `trailingSlash` en Astro y en Vercel para que la variante sin barra redirija. | [consolidate-duplicate-urls](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls). | Bajo. | **Bajo**: 30 min. | Push a `main` = despliegue (`CLAUDE.md`): comprobar con `curl` que las dos variantes acaban en la misma URL. |
| 13 | **Datos de la entidad**: `Organization` en lugar de `ProfessionalService`, sólo en la home y en sobre-nosotros, con `logo` legible sobre blanco (p. ej. `favicon.png`, 512×512 con el disco negro), `email`, `sameAs` (Instagram, YouTube, LinkedIn) y `founder` (Valeria Melero). Decidir si se quita `FAQPage`, que ya no da nada en Google. | [organization](https://developers.google.com/search/docs/appearance/structured-data/organization), [local-business](https://developers.google.com/search/docs/appearance/structured-data/local-business), [search/updates](https://developers.google.com/search/updates). | Bajo. | **Bajo**: 1 h. | Sin dirección: persona física sin domicilio social (`PRODUCT.md`, «Operating Context»). Teléfono sólo si se quiere público. URL del canal de YouTube y de un perfil de empresa en LinkedIn **[PENDIENTE DE CONFIRMAR]**. El logo lleva dorado, que es la excepción permitida (`PRODUCT.md`). |
| 14 | **Arreglos de accesibilidad del informe de PageSpeed**: antetítulos sobre `--paper` (4,48:1) con un tono que pase de 4,5:1; áreas táctiles del enlace «Reservar diagnóstico →» del vídeo y del botón «Ver el vídeo»; en el pie, `h4` sin `h3` previo. | [Informe de la home](https://pagespeed.web.dev/analysis/https-www-valeriamelero-com/h1drtauve6?form_factor=mobile). | Bajo. | **Bajo**: 2 h. | Recalcular y anotar el ratio de cualquier color que cambie (`CLAUDE.md`, «Sistema visual»). Dar clase propia a cada párrafo nuevo (`CLAUDE.md`, «Especificidad CSS»). |
| 15 | **No publicar las notas internas**: la home lleva 19 comentarios `<!-- -->` que explican decisiones de conversión (quién es la competencia, por qué se movió cada bloque). Pasarlos a `{/* */}`, que Astro no incluye en el HTML (el comentario del título, que ya usa esa forma, no aparece). | Trichter publica en su HTML notas internas de maquetación ([trichterconsulting.com](https://trichterconsulting.com/), código fuente); Melero hace lo mismo ([valeriamelero.com](https://www.valeriamelero.com/), código fuente). | Bajo. | **Bajo**: 1 h. | Sólo código; no cambia nada visible. |
| 16 | **Search Console una vez al mes**: rendimiento, Core Web Vitals y el informe de funciones de IA generativa. | [ai-optimization-guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide). La propiedad ya está verificada (`public/google824e0cd48fd6c0fc.html`). | Bajo. | **Bajo**: 30 min al mes. | No borrar el archivo de verificación (`CLAUDE.md`). Search Console no pone cookies en la web. |
| 17 | **Título más descriptivo en sobre-nosotros** (hoy «Sobre Nosotros \| Melero Realty»). | [title-link](https://developers.google.com/search/docs/appearance/title-link). | Bajo. | **Bajo**: 15 min. | Es copy: **aprobación de Valeria**. |
| 18 | **Imágenes y fechas de los artículos**: versiones 16:9, 4:3 y 1:1 (la de 1200×630 para compartir ya estaba pendiente) y fechas con zona horaria en el JSON-LD. | [article](https://developers.google.com/search/docs/appearance/structured-data/article); `NOTAS.md`, «Imagen al compartir el enlace». | Bajo. | **Medio**: 2-3 h más generar los recortes. | Requisitos de imagen de `NOTAS.md`: sin texto, sin caras, sin dorado. |
| 19 | **Velocidad fina**: `srcset` con versión para móvil de las imágenes grandes (hero y banda) y Poppins servida desde el propio dominio para quitar la hoja de Google Fonts que bloquea el renderizado. | [Informe de la home](https://pagespeed.web.dev/analysis/https-www-valeriamelero-com/h1drtauve6?form_factor=mobile): 940 ms de bloqueo y 119 KiB de imágenes ahorrables. | Bajo: ya es de las más rápidas; acercaría el LCP de laboratorio (2,7 s) a menos de 2,5 s. | **Medio**: 3-4 h. | Poppins 300/400/600/700 (`CLAUDE.md`). Verificar en `dist/` y no en el panel de vista previa (`CLAUDE.md`). Quita además una petición a un tercero. |

## 7. Descartado por las reglas

Prácticas habituales en la competencia que Melero no debe copiar.

| Práctica | Dónde se ve | Por qué no |
|---|---|---|
| Cifras agregadas sin fuente y contadores («+35 agencias», «+12.000 leads», «800+ agents», medias de conversión propias) | MRS, Kaptar, EAM, TeamLeads, Ylopo | `CLAUDE.md`: ninguna cifra sin nombre, empresa, enlace y permiso. `STATS` y `STATS_BIG` se borraron el 7/9/2026 y no vuelven (`PRODUCT.md`). |
| Testimonios sin apellido ni empresa («Javier · Agencia inmobiliaria», «Laura G.», «Carlos M.») | MRS, MDI, LeadInmo | Misma regla. Los tres testimonios inventados se borraron y no vuelven (`PRODUCT.md`, «Evidence on Hand»). |
| Muros de logos de grandes marcas cuya relación no se puede comprobar (Remax, Tecnocasa) y sellos de partner de Google o Meta | TeamLeads (logos) | `PRODUCT.md`: no hay más logos de clientes que el de ARC ni certificaciones o partnerships; no se rellenan inventando. |
| Prometer resultados: «de 2 a 5 exclusivas adicionales cada mes», «mínimo +30 propietarios», «+20 propiedades en exclusiva al mes», calculadoras que estiman la facturación que vas a tener | MRS, LeadInmo, TeamLeads | `PRODUCT.md`, regla de copy 3 y principio 2: no prometer «más clientes»; es lo que hace la competencia que quemó al cliente. |
| Garantías de resultado de negocio («más captaciones en 90 días o seguimos gratis», «recuperas lo invertido») | MRS, MDI | Garantizan justo lo que Melero dice que no se puede garantizar. Si algún día se ofrece una garantía, que sea como la de OLT: sobre lo que depende de la agencia y diciendo qué no se promete (y con **aprobación de Valeria**). |
| Publicar el precio | OLT, Curaytor, LeadInmo, Tactius | Decisión del 6/9/2026: el precio no se publica (`PRODUCT.md`, «Users»). Sí se puede explicar de qué depende, como ya hace la FAQ. |
| «Sin permanencia» como argumento | TeamLeads, MDI, OLT; MRS («no trabajamos con permanencias eternas») | El contrato de 6 meses es un término publicado (`PRODUCT.md`, «Capabilities and Constraints»). La salida con 15 días de preaviso ya responde a esa objeción sin contradecirlo. |
| Píxeles, analítica, chats o widgets de terceros en la primera visita (píxel de Meta, TikTok, Hotjar, Clarity, HubSpot, Calendly o YouTube incrustados) | OLT, Curaytor, Ylopo, Trichter, Agent Extra, MRS | `CLAUDE.md`: nada de analítica fuera del consentimiento, y la política de cookies tiene que describir la realidad. Enlazar a Calendly (como ahora) y usar la fachada del vídeo es lo correcto. Si algún día se añade uno, consentimiento previo y política de cookies actualizada. |
| `AggregateRating` sobre la propia empresa, o reseñas de Google incrustadas marcadas como tales | MRS | Google no da estrellas a reseñas que controla la propia entidad y prohíbe las falsas o incentivadas sin aviso ([review-snippet](https://developers.google.com/search/docs/appearance/structured-data/review-snippet)). Sin reseñas reales y conformes, nada de marcado de reseñas. |
| Páginas por ciudad hechas con plantilla | MRS (en parte) | Riesgo de páginas puerta ([spam-policies](https://developers.google.com/search/docs/essentials/spam-policies)). Ver mejora 11 para hacerlo bien. |
| `hreflang` entre páginas que no son la misma en otro idioma o región; `lastmod` con la fecha del día en todas las URL | Trichter; TeamLeads | Google usa `hreflang` para versiones de la misma página y `lastmod` sólo si es exacto ([localized-versions](https://developers.google.com/search/docs/specialty/international/localized-versions), [build-sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)). |
| Rankings de «mejores agencias» en los que la agencia se pone primera | Trichter ([ejemplo](https://trichterconsulting.com/mejores-agencias-marketing-inmobiliario-mexico/)) | Choca con «sin datos ni cifras inventadas, sin promesas exageradas» y con la voz editorial y anti-motivacional (`PRODUCT.md`). |
| Portada generalista (leads para siete sectores) | TeamLeads | `PRODUCT.md`, principio 5: especialista, no generalista. |
| Versión en inglés o web bilingüe | OLT (botón «EN»), todas las de EEUU y Reino Unido | `PRODUCT.md`: castellano únicamente; los clientes de EEUU son hispanohablantes. |
| Ficha de Google Business Profile con una dirección que no recibe clientes | — (riesgo si se copia el modelo de MRS o EAM) | Google sólo admite negocios con local visitable o que van a casa del cliente; las oficinas virtuales no valen ([3038177](https://support.google.com/business/answer/3038177)). Melero trabaja en remoto. |
| Vender o comprar «AEO/GEO» como algo distinto del SEO | EAM, Curaytor, Luxury Presence | Google dice que optimizar para sus funciones de IA sigue siendo SEO y que no hacen falta archivos ni marcados especiales ([ai-optimization-guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)). |
| Dejar textos a medias en producción («Plans start from [£X] per month») | EAM | No es una regla escrita de Melero, sino un aviso: un marcador visible resta credibilidad justo donde se habla de precio. Como en Melero cada push a `main` se publica sin staging (`CLAUDE.md`), conviene revisar el texto antes de subir. |

## 8. Fuentes

Todas consultadas el 26/9/2026.

### Melero Realty

- Código del repositorio: `PRODUCT.md`, `CLAUDE.md`, `NOTAS.md`,
  `src/config/site.ts`, `src/pages/index.astro`, `src/layouts/Layout.astro`,
  `src/pages/contacto.astro`, `src/pages/sobre-nosotros.astro`,
  `src/pages/blog/index.astro`, `src/pages/blog/[slug].astro`,
  `src/content/blog/*.md`, `src/content.config.ts`,
  `src/components/{Header,Footer,BlogCta,CookieNotice,VideoEmbed}.astro`,
  `src/styles/home.css`, `src/styles/global.css`, `astro.config.mjs`,
  `public/robots.txt`.
- Web publicada: https://www.valeriamelero.com/ ·
  https://www.valeriamelero.com/blog/ ·
  https://www.valeriamelero.com/blog/depender-de-los-portales/ ·
  https://www.valeriamelero.com/blog/coste-por-lead-y-coste-por-cliente/ ·
  https://www.valeriamelero.com/contacto ·
  https://www.valeriamelero.com/sobre-nosotros ·
  https://www.valeriamelero.com/robots.txt ·
  https://www.valeriamelero.com/sitemap-index.xml ·
  https://www.valeriamelero.com/sitemap-0.xml

### Webs elegidas (páginas observadas)

- MRS Media: https://mrsmedia.es/ · https://mrsmedia.es/contacto ·
  https://mrsmedia.es/blog/por-que-no-consigues-exclusivas ·
  https://mrsmedia.es/blog/como-captar-propiedades-con-google-ads ·
  https://mrsmedia.es/captacion-de-inmuebles/madrid ·
  https://mrsmedia.es/captacion-de-inmuebles/sevilla ·
  https://mrsmedia.es/captacion-de-inmuebles/murcia ·
  https://mrsmedia.es/robots.txt · https://mrsmedia.es/sitemap.xml
- Agencia MDI: https://agenciamdi.com/ · https://agenciamdi.com/reserva/ ·
  https://agenciamdi.com/agencia-marketing-inmobiliario-madrid/ ·
  https://agenciamdi.com/marketplace-facebook-agentes-inmobiliarios/ ·
  https://agenciamdi.com/convertir-visitas-web-inmobiliaria/ ·
  https://agenciamdi.com/robots.txt · https://agenciamdi.com/sitemap.xml
- TeamLeads: https://www.teamleads.es/ ·
  https://www.teamleads.es/agencia-marketing-inmobiliario ·
  https://www.teamleads.es/agencia-de-marketing-para-inmobiliarias (404; era
  la URL que daba la búsqueda) ·
  https://www.teamleads.es/blog/leads-inmobiliarios ·
  https://www.teamleads.es/blog/como-gestionar-una-inmobiliaria ·
  https://www.teamleads.es/blog/systeme-io-que-es ·
  https://www.teamleads.es/robots.txt · https://www.teamleads.es/sitemap.xml
- Kaptar: https://kaptar.agency/ · https://kaptar.agency/contacto/ ·
  https://kaptar.agency/robots.txt · https://kaptar.agency/sitemap.xml
- Trichter Consulting: https://trichterconsulting.com/ ·
  https://trichterconsulting.com/agenda-diagnostico/ ·
  https://trichterconsulting.com/marketing-inmobiliarias-y-bienes-raices-espana/ ·
  https://trichterconsulting.com/marketing-digital-para-inmobiliarias-y-bienes-raices-en-peru/ ·
  https://trichterconsulting.com/mejores-agencias-marketing-inmobiliario-mexico/ ·
  https://trichterconsulting.com/feed/ ·
  https://trichterconsulting.com/robots.txt ·
  https://trichterconsulting.com/sitemap_index.xml
- OLT Spanish Leads: https://oltspanishleads.com/ ·
  https://oltspanishleads.com/robots.txt ·
  https://oltspanishleads.com/sitemap.xml
- Curaytor: https://www.curaytor.com/ · https://www.curaytor.com/pricing ·
  https://www.curaytor.com/robots.txt · https://www.curaytor.com/sitemap.xml
- Ylopo: https://www.ylopo.com/ · https://www.ylopo.com/robots.txt ·
  https://www.ylopo.com/sitemap.xml
- Estate Agency Marketing (EAM): https://estateagency.marketing/ ·
  https://estateagency.marketing/contact-us/ ·
  https://estateagency.marketing/feed/ ·
  https://estateagency.marketing/robots.txt ·
  https://estateagency.marketing/sitemap.xml
- Agent Extra: https://agentextra.co.uk/ ·
  https://agentextra.co.uk/lead-generation-services/ ·
  https://agentextra.co.uk/post-sitemap.xml ·
  https://agentextra.co.uk/organic-or-paid-lead-generation-what-works-best-for-estate-agents/ ·
  https://agentextra.co.uk/robots.txt ·
  https://agentextra.co.uk/sitemap_index.xml

### Candidatas descartadas (consultadas)

https://felamedia.com/industrias/real-estate · https://hanokagency.com/ ·
https://tactius.com/marketinginmobiliario/ · https://leadinmo.es/ ·
https://www.luxurypresence.com/ · https://urbalead.com/ ·
https://www.landingagency.com/ · https://www.ad-do.com/ ·
https://eximiarealestate.com/ · https://positivoagencia.com/ ·
https://www.coorverealestate.com.mx/ ·
https://marketing.recreativos.com.mx/agencia-de-marketing-para-inmobiliarias/ ·
https://www.realestatemarketingmedia.co.uk/ · https://eaanalytics.co.uk/ ·
https://www.fernandocopado.com/agencia-marketing-inmobiliario/.
Sin respuesta o bloqueadas: https://alavistamarketing.com/ ·
https://www.gogetitleads.com/mexico/ · https://www.boldleads.com/ ·
https://www.agentimage.com/ (403).

### PageSpeed Insights (móvil, informes guardados)

- Melero home: https://pagespeed.web.dev/analysis/https-www-valeriamelero-com/h1drtauve6?form_factor=mobile
- Melero blog: https://pagespeed.web.dev/analysis/https-www-valeriamelero-com-blog/pchzkkg7ek?form_factor=mobile
- MRS Media: https://pagespeed.web.dev/analysis/https-mrsmedia-es/00gl5y7tzm?form_factor=mobile
- Agencia MDI: https://pagespeed.web.dev/analysis/https-agenciamdi-com/9cpr37sglc?form_factor=mobile
- TeamLeads: https://pagespeed.web.dev/analysis/https-www-teamleads-es-agencia-marketing-inmobiliario/iuxkx1x8f4?form_factor=mobile
- Kaptar: https://pagespeed.web.dev/analysis/https-kaptar-agency/cvnuxkldo7?form_factor=mobile
- OLT: https://pagespeed.web.dev/analysis/https-oltspanishleads-com/d11p77vcqg?form_factor=mobile
- Trichter: https://pagespeed.web.dev/analysis/https-trichterconsulting-com/p9q8h0nuxi?form_factor=mobile
- Curaytor: https://pagespeed.web.dev/analysis/https-www-curaytor-com/absibq8m16?form_factor=mobile
- Ylopo: https://pagespeed.web.dev/analysis/https-www-ylopo-com/rb1dykgnkd?form_factor=mobile
- EAM: https://pagespeed.web.dev/analysis/https-estateagency-marketing/g8r04bipfn?form_factor=mobile
- Agent Extra: https://pagespeed.web.dev/analysis/https-agentextra-co-uk/nyeh7wtdss?form_factor=mobile
- API sin clave (devolvió 429 en todos los intentos):
  `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=<URL>&strategy=mobile&category=performance&category=seo&category=accessibility&category=best-practices`

### Google (documentación oficial)

- Guía de inicio SEO: https://developers.google.com/search/docs/fundamentals/seo-starter-guide (10/12/2025)
- Contenido útil: https://developers.google.com/search/docs/fundamentals/creating-helpful-content (10/12/2025)
- Optimizar para las funciones de IA: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide (10/7/2026)
- Enlaces de título: https://developers.google.com/search/docs/appearance/title-link (10/12/2025)
- Fragmentos y meta description: https://developers.google.com/search/docs/appearance/snippet (20/4/2026)
- Galería de datos estructurados: https://developers.google.com/search/docs/appearance/structured-data/search-gallery (15/6/2026; ya no incluye FAQ)
- Reglas generales de datos estructurados: https://developers.google.com/search/docs/appearance/structured-data/sd-policies (10/7/2026)
- Organization: https://developers.google.com/search/docs/appearance/structured-data/organization (8/9/2026)
- LocalBusiness: https://developers.google.com/search/docs/appearance/structured-data/local-business (8/9/2026)
- Article: https://developers.google.com/search/docs/appearance/structured-data/article (8/9/2026)
- Breadcrumb: https://developers.google.com/search/docs/appearance/structured-data/breadcrumb (8/9/2026)
- Review snippet: https://developers.google.com/search/docs/appearance/structured-data/review-snippet (8/9/2026)
- FAQPage: https://developers.google.com/search/docs/appearance/structured-data/faqpage (redirige con 301 a la nota de retirada)
- Registro de cambios de la documentación: https://developers.google.com/search/updates (24/9/2026)
- Core Web Vitals: https://developers.google.com/search/docs/appearance/core-web-vitals (10/12/2025)
- Experiencia de página: https://developers.google.com/search/docs/appearance/page-experience (22/9/2026)
- Indexación mobile-first: https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing (10/12/2025)
- URL canónicas: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls (10/7/2026)
- Sitemaps: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap (8/7/2026)
- Versiones localizadas (hreflang): https://developers.google.com/search/docs/specialty/international/localized-versions (21/9/2026)
- Políticas de spam: https://developers.google.com/search/docs/essentials/spam-policies (28/8/2026)

### Google Business Profile (ayuda oficial)

- Mejorar el posicionamiento local: https://support.google.com/business/answer/7091
- Normas para representar tu negocio: https://support.google.com/business/answer/3038177
