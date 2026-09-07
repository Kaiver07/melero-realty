# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Dos audiencias, ambas confirmadas:

- **Dueños de agencias inmobiliarias.**
- **Asesores inmobiliarios independientes.**

Están **ya en activo y facturando** — no gente que empieza de cero. Operan en
España y EEUU (los clientes de EEUU son hispanohablantes).

**Premisa crítica, y es un error ya cometido que no se debe repetir: estos
asesores SÍ suben pisos a los portales** (Idealista, Fotocasa). Ningún copy
puede partir de que no lo hacen. El problema no es que no usen portales: es
que *dependen* de ellos.

Perfil de decisión: compra B2B con presupuesto real y compromiso de 6 meses.
El precio **no se publica en la web** (decisión del 6/9/2026): cada sistema se
dimensiona según zona, tipo de propiedades y objetivo, y el presupuesto sale
del diagnóstico. La cifra de 3.200 € que figuraba antes como mínimo queda como
dato interno; no está confirmado si sigue vigente.

Quien rellena el formulario suele ser el decisor o está a un paso: el
formulario pregunta explícitamente por rol, capacidad de decisión y capital
disponible.

## Product Purpose

Melero Realty es una **agencia de marketing inmobiliario** que construye
sistemas de captación de leads **independientes** para agencias y asesores,
con el objetivo de reducir su dependencia de los portales de anuncios.

Servicios: paid ads (Meta y Google), embudos de captación, generación de
leads exclusivos, posicionamiento de marca, contenido estratégico y
consultoría.

No es gestión inmobiliaria y no vende leads comprados a terceros: vende el
sistema que los genera, y los leads son exclusivos del cliente.

**El problema que resuelve:** la dependencia de los portales genera un
negocio frágil — los leads llegan de forma irregular, muchos no están
cualificados, y el asesor no controla el canal.

Éxito del sitio: que un responsable de agencia cualificado complete el
diagnóstico y agende. El formulario largo funciona a la vez como filtro:
descualificar es un resultado válido, no una pérdida.

## Positioning

**La objeción real del cliente**, la más repetida, es la **desconfianza hacia
las agencias de marketing** que prometen "más clientes" y luego no entregan
nada. Todo el posicionamiento se construye contra eso:

- **No se promete "más clientes".** Depende de demasiados factores fuera de
  control. Prometerlo es exactamente lo que hace la competencia que ha
  quemado al cliente.
- Lo que sí se ofrece es un **diagnóstico** que detecta el cuello de botella
  real del negocio.
- A partir de ahí se trabaja para que los leads que **ya llegaban y se
  perdían** terminen convirtiendo, porque llegan conociendo el negocio de
  antemano.
- El objetivo es **calidad, no volumen**. No se busca traer "200 curiosos".

Otros ejes: especialización exclusiva en inmobiliario, sistemas propios que
no dependen de portales ni referidos, acompañamiento 1:1 continuo con la CEO,
y medición en KPIs de negocio (coste por lead, coste por cliente, ROI) en
lugar de métricas de vanidad.

Anti-posicionamiento explícito, tan importante como el posicionamiento: no es
una agencia de marketing generalista. La tabla comparativa del sitio ("Otras
agencias" vs "Melero Realty") es su articulación literal.

Exclusividad por zona: una sola marca por zona.

## Operating Context

- **Entidad:** Melero Realty es un **nombre comercial de persona física**, no
  una sociedad. Fundada y dirigida por **Valeria Melero Maldonado**. En
  contratos y documentos legales figura con su DNI/NIF; no hay NIF de empresa
  ni domicilio social propio.
- **Sede:** Nerva (Huelva).
- La marca personal y la marca de empresa van juntas: el dominio es
  `valeriamelero.com` y el "acompañamiento 1:1 con la CEO" es parte del
  producto vendido.

### Metodología

- **Nutrición de leads — pilar central del método.** La mayoría de leads no
  compra el primer día. Sin un proceso de nutrición se enfrían y se pierden.
  Gran parte del sistema (contenido, secuencias, funnel) existe precisamente
  para nutrirlos hasta que están listos para convertir.
- Proceso comercial de 5 pasos, publicado y validado: Diagnóstico inicial →
  Estrategia a medida → Lanzamiento y captación → Optimización continua →
  Resultados y escalado.
- Reporte semanal al cliente; optimización semana a semana según coste por
  lead y calidad real.
- Ventana de resultados que se comunica: primeros resultados en torno a 20
  días, sin garantías antes de 3 meses.

### Embudo

- **Lead magnet:** masterclass grabada **«Captación sin portales»**,
  gestionada con **Systeme.io**.
- **Cierre habitual:** primera llamada gratuita, 30 minutos, sin compromiso.
- **Captación entrante** por un formulario de diagnóstico de 5 pasos en
  `/contacto` que recoge, entre otros: rol, zona, tipo de propiedades,
  captación actual, inversión publicitaria, leads/mes, conversión,
  facturación, objetivo a 6 meses, bloqueo principal, qué han intentado ya,
  prioridad, si es decisor, capital disponible y por qué ahora.
- Los envíos se guardan en Google Sheets vía Google Apps Script
  (`SITE.sheetsWebAppUrl`). No hay CRM ni backend propio.

### Sistema de contenido

Producción sostenida en **LinkedIn, Instagram y TikTok**. Formatos:
carruseles PNG, guiones de reel, overlays de vídeo BTS y captions de post.

- Biblioteca de **19 guiones de reel** ya desarrollada.
- Calendario de 13 posts para LinkedIn que combina Melero Realty y SIN HUMO,
  incluyendo el pilar personal **«Diario de una estratega»**, firmado como
  «Hija de Dios» (firma de marca personal de Valeria).
- Guiones de Instagram repartidos por embudo (TOFU/MOFU/BOFU) entre Valeria,
  Carlos Bernabé, Yerai y Carlos Cortés, más slides de carrusel.
- **Carruseles:** se montan en **Canva** duplicando el diseño modelo oficial
  (ID `DAHNSVIRk8M`), sin inventar colores ni cambiar tipografías — la API de
  Canva no expone los nombres de fuente, por eso se duplica en vez de crear
  desde cero. Formato 1080×1350 (4:5), 7 páginas: portada + 5 slides
  numerados + cierre. El fondo petrol es una imagen a sangre, no un color
  plano. Existe además un pipeline propio en Python/Pillow para generarlos de
  forma programática, de uso complementario.
- **SEO:** investigación de palabras clave B2B para Sevilla y Marbella.

### Documentación legal

Plantillas para colaboradores: contratos de colaboración, acuerdos de
confidencialidad/RGPD y anexos por proyecto.

## Capabilities and Constraints

- Sitio estático: Astro 5 + Tailwind v4, `output: 'static'`, sitemap,
  desplegado en Vercel sobre `valeriamelero.com`.
- **`src/config/site.ts` es la fuente de verdad del contenido.** El copy y el
  orden de secciones están aprobados; el trabajo visual no reescribe copy sin
  permiso explícito.
- Sin backend, sin base de datos, sin autenticación. La única integración
  dinámica es el POST del formulario a Google Apps Script.
- Idioma: **castellano únicamente**. No hay i18n planificada; los clientes de
  EEUU son hispanohablantes. Decisión confirmada.
- Vídeo de YouTube embebido (`SITE.youtubeId`).
- Páginas: home, contacto, sobre-nosotros, aviso legal, política de
  privacidad, política de cookies.
- Términos comerciales publicados, que futuros trabajos respetan tal cual:
  contrato de 6 meses, exclusividad por zona, primeros resultados en torno a
  20 días, y se trabaja solo con inmobiliarias en activo. Sin precio público.

### Decisiones abiertas

*(Resuelto el 6/9/2026: `valeriamelero.com` lo sirve **Vercel** desde este
repositorio Astro. Comprobado por cabeceras HTTP y por el HTML servido, sin
rastro de Framer. La referencia a Framer/Upreach del documento de negocio
está desactualizada.)*
- **La plantilla de Canva (`DAHNSVIRk8M`) sigue en dorado** (#cfaa4a,
  #cfaa3a, #cfa421) para portada, remates y CTA. Con la paleta nueva, sin
  dorado, esa plantilla queda desactualizada. Falta confirmar si se rehace
  con los colores nuevos o si el diseño de Canva es un sistema aparte que se
  mantiene. **Sin resolver.**
*(Resuelto: **Carlos Cortés no va en la web.** Forma parte del equipo de
contenido —guiones de reel— pero no del equipo que se muestra en el sitio.
La web muestra tres personas y el titular «Tres personas, sin capas
intermedias.» es correcto tal cual.)*

## Brand Commitments

- **Nombre:** Melero Realty. **Handle:** `@melero.realty`. Dominio:
  `valeriamelero.com`. Email: **`melero.realty@gmail.com`** (confirmado el
  6/9/2026; sustituye a `hola@valeriamelero.com`, que ya no se usa). Vive en
  `SITE.email` y de ahí lo toman todas las páginas.
- **Paleta oficial — sin dorado en ningún material:**
  - Blanco `#FFFFFF` — color principal.
  - `#24767B` (verde azulado / teal) — color de identidad.
  - `#122F35` (azul petróleo muy oscuro) — color de identidad.
  - Negro `#000000` — para todo el texto.
- **Logo: excepción confirmada a la regla del dorado.** El logo es la M
  dorada sobre disco negro, con «MELERO» en blanco y «.REALTY» en dorado.
  **Se sigue usando tal cual, de momento** — decisión del usuario el
  6/9/2026. La regla «sin dorado» sigue vigente para todo lo demás: el
  dorado existe en el logo y solo ahí.
  - Isotipo transparente en `public/logo-melero.png` (trazo `#CEB277`).
    Sobre `#122f35` da 6.91:1 y sobre `#0d2226` 8.05:1, así que funciona en
    las planchas oscuras. Sobre blanco cae a 2.05:1 — ahí no vale suelto.
  - El logo completo que circula va sobre **disco negro**, no sobre
    `#122f35`. Si se coloca sin más sobre una plancha, se ve el disco
    recortado. Usar el isotipo transparente, o el logo solo sobre negro.
  - `favicon.png` y `apple-touch-icon.png` se regeneraron el 6/9/2026: el
    monograma ocupaba el 2% del lienzo y se veía enclenque en la pestaña.
    Ahora va al 80% del diámetro del disco, que es donde se distingue a
    16 px sin tocar el borde.
  - **No hay archivo del logo completo (lockup) en el repositorio**, solo el
    isotipo. Si se necesita la marca con texto, hay que pedirlo.
- **Tipografía:** **Poppins**, confirmada directamente por Valeria. Sustituye
  a Cormorant Garamond + DM Sans, que es lo que recogía el documento de
  contexto anterior; ese par ha quedado desactualizado al menos para la web.
- **No mezclar con SIN HUMO**, el otro proyecto de Valeria, que tiene
  identidad propia y distinta: negro + Anton/Barlow + dorado.

### Voz y tono

- **Editorial y anti-motivacional.** Nada de frases de autoayuda vacías.
- **No prescriptiva:** la marca no dice a la gente lo que "debe" hacer.
  Recomienda según lo que le convenga a cada persona y según la experiencia
  real de Valeria.
- **Sin "yoismo":** el contenido no gira en torno a Valeria como
  protagonista; el foco está en el problema y en el lector.
- Formato preferido: textos de LinkedIn cortos y realistas, sin datos
  inventados ni promesas exageradas.
- Frases de marca en uso: *"Sin portales. Sin referidos. Sin curiosos."*,
  *"Hablamos de números, no de followers."*, *"Si el 80% de tus leads vienen
  de un portal, tienes un problema."*

### Reglas de copy que no se rompen

1. **El CTA siempre es «DIAGNÓSTICO»**, nunca «SISTEMA» ni otra variante.
2. **No dar por hecho que los asesores no suben pisos a portales** — sí lo
   hacen.
3. **No prometer "más clientes"** de forma directa.
4. Sin datos ni cifras inventadas, sin promesas exageradas.
5. Nada de tono motivacional genérico; nada centrado en Valeria como
   protagonista.
6. Respetar el sistema visual: blanco + `#24767B` + `#122F35` + negro para el
   texto, Cormorant Garamond / DM Sans. Nada de dorado, y no mezclar con la
   estética de SIN HUMO.
7. Los carruseles se montan sobre el diseño modelo de Canva sin cambiar las
   tipografías (pendiente de actualizar sus colores — ver decisiones
   abiertas).

### Nota sobre la tipografía

**Poppins la confirmó Valeria**, no es una preferencia de implementación ni
una desviación del manual: es la marca cambiando de tipografía. El documento
de contexto del negocio todavía recoge Cormorant Garamond + DM Sans, así que
ese punto del documento está desactualizado.

**Alcance confirmado: Poppins es solo para la web.** El resto de materiales
—carruseles de Canva, reels, LinkedIn— mantienen Cormorant Garamond + DM
Sans. No es un descuido ni algo pendiente de unificar: son dos tipografías
conviviendo a propósito, web por un lado y contenido por otro.

## Evidence on Hand

Reales y utilizables:

- **Equipo:** Valeria Melero (CEO & Founder), Yerai Jiménez (Marketing y
  guiones), Carlos Bernabé (Comercial y guiones), Carlos Cortés (guiones).
  Fotos reales en `public/team/` para los tres primeros.
- **Caso real:** ARC Proyectos Renovables SL (Valencia), constructora de
  reformas integrales, `arcproyectosrenovables.com`. Punto de partida:
  empresa consolidada sin sistema de captación. Resultado: +30% de
  facturación, el salto en la séptima sesión, relación en activo.
  Testimonio firmado por **Lina Marcela**, y habla de Valeria como mentora
  —no del sistema de leads—, así que sirve como prueba del acompañamiento
  1:1, no de la captación. **Permiso concedido por ARC el 7/9/2026** para
  publicar logotipo, nombre de la persona y cifra de facturación.
  Salvedad: ARC no es una inmobiliaria, y la web dice trabajar sólo con
  inmobiliarias. Decisión consciente del negocio, no un descuido.
- **FAQ:** 8 preguntas con respuestas dadas por el negocio (requisitos,
  qué se entrega tras la llamada, plazos, quién paga los anuncios, zona
  ocupada, salida anticipada, presupuesto, remoto). Verdad de producto.
- **Vídeo** de YouTube propio: el Short «¿Qué es realmente Melero Realty?»
  (`G-OtqipOUAI`), vertical 9:16. La miniatura que sirve YouTube viene con
  relleno borroso a los lados para forzarla a 16:9, así que el póster se
  recorta y se sirve desde `public/images/video-poster.jpg`.
- **Logo** real y favicon.
- **Masterclass** «Captación sin portales» y 19 guiones de reel.
- **Plantillas legales** para colaboradores.

Borrado del código el 7/9/2026, y no se vuelve a meter:

- **Métricas inventadas.** `STATS` (+65% ROI, +87 inmobiliarias, 98%
  retención) y `STATS_BIG` (+40 agencias, +300% ROI) eran estimaciones de
  marketing sin auditar, además contradictorias entre sí. Fuera de la web
  primero y del código después.
- **Testimonios inventados.** Carlos Fuentes, Laura Serrano y Marcos Gil no
  existen. Estaban en `site.ts` sin ninguna marca de ser falsos, listos
  para que alguien los publicara por error.

La única cifra publicable es el +30% de ARC, y lo es porque tiene nombre,
empresa, enlace y permiso. Cualquier cifra nueva necesita las cuatro cosas.

Ausencias que no se rellenan inventando: no hay prensa, ni más logos de
clientes que el de ARC, ni pricing público —el precio es a medida y no se
publica—, ni certificaciones o partnerships (Meta/Google Partner u otros).

## Product Principles

1. **Números antes que adjetivos.** La credibilidad se gana hablando de coste
   por lead y ROI, no de alcance ni de followers. Subir el volumen de promesa
   sin subir el de evidencia va contra el producto.
2. **No prometer lo que promete quien ya les falló.** La objeción real es la
   desconfianza. Cada promesa de "más clientes" que aparezca en un material
   nos coloca en el bando de la competencia que quemó al cliente.
3. **Descualificar es una función, no una fuga.** El precio de entrada, el
   contrato de 6 meses y el formulario largo existen para filtrar. No
   optimizar por volumen de envíos a costa de la calidad del lead.
4. **La prueba real manda sobre la prueba prestada.** Con testimonios
   placeholder y métricas sin auditar, el peso recae en lo verificable: el
   mecanismo, el proceso de 5 pasos, la especialización, las FAQ, el equipo y
   los términos duros.
5. **Especialista, no generalista.** Todo lo que haga que el sitio se parezca
   a una agencia de marketing cualquiera destruye la posición.
6. **El contenido de `site.ts` está validado.** El trabajo se hace sobre el
   tratamiento, no sobre el mensaje, salvo permiso explícito.

## Accessibility & Inclusion

Sin requisito de estándar establecido por el usuario. Restricción de producto
relevante: interfaz monolingüe en castellano, sin i18n prevista.

Limitación técnica confirmada de la paleta de marca: **`#24767B` sobre
`#122F35` da 2,66:1**, muy por debajo del mínimo AA. El teal solo es
utilizable sobre blanco (5,31:1) o como fondo con texto blanco encima
(5,31:1), nunca como texto sobre las planchas oscuras.
