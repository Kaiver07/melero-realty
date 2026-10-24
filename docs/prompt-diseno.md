# Portada de la home: referencias y modelo

Consulta: 20/10/2026. Sólo la primera pantalla de la home. El estudio
completo de mensaje, conversión y SEO de la competencia sigue en
`benchmark-webs-marketing-inmobiliario.md` (26/9/2026); esto lo completa con
el aspecto, que allí no se miró.

Capturas hechas con Chrome sin ventana a 1440×900, el mismo día.

## Referencias

| Web | Qué es | Lo que hay que copiar | Lo que no |
| --- | --- | --- | --- |
| [Agencia MDI](https://agenciamdi.com/) | Captación para inmobiliarias, España | Fondo claro, titular negro grande y una «demo» del sistema a la derecha (una consola con el lead entrando). Es la misma idea que nuestra bandeja. | La marca del producto coloreada dentro del titular; la consola con estética de programador, que no es el idioma del cliente. |
| [MRS Media](https://mrsmedia.es/) | Captación de propietarios, España | La prueba pegada al botón: la nota de Google justo debajo del CTA, y la franja de agencias que confían en ellos justo debajo de la portada. | Fondo lila de degradado y una palabra del titular en otro color. |
| [Kaptar](https://kaptar.agency/) | Marketing inmobiliario, España y LATAM | Fondo claro y mucho aire. Se lee como negocio asentado, no como landing. | Titular de tres frases, cursiva dorada de adorno, foto de rascacielos que no es suya. |
| [RealAdvisor Pro](https://realadvisor.es/es/pro) | Leads de vendedores y CRM para agentes, España (la pasó Yerai) | La nota y el número de opiniones encima del titular, y tres frases cortas de lo que incluye bajo el botón. Fondo claro, botón de un solo color. | Persona recortada de banco de imágenes con iconos en círculo, contadores sin fuente («90 %», «2,1 millones+»), palabra del titular en azul. |
| [OLT Spanish Leads](https://oltspanishleads.com/) | Leads hispanos para agentes, EEUU | Foto grande a sangre del mercado del cliente, titular centrado corto y tres promesas en fila al pie. | Foto de stock genérica de Miami; texto encima de la foto. |
| [Agent Extra](https://agentextra.co.uk/) | Captación de tasaciones, Reino Unido | Formulario corto visible en la cabecera y teléfono pulsable. | Degradado morado con rosa y cian, chat que se abre solo, demasiados logotipos de premios. |
| [Estate Agency Marketing](https://estateagency.marketing/) | Marketing para agencias, Reino Unido | Un solo botón claro. | Fondo de «red» digital de stock, que podría ser de cualquier sector. |
| [MBMA Real Estate](https://www.mbmauae.ae/) | Inmobiliaria en Dubái, nuestro partner | Foto propia de su ciudad a sangre: se sabe dónde están. | Mayúsculas doradas sobre la foto. |

## El modelo

Ninguna sirve entera. La mezcla, por orden:

1. **Esqueleto y SEO.** No cambia: titular, párrafo con «captación de leads
   para inmobiliarias», un solo H1 y los mismos enlaces.
2. **Conversión.** La píldora con los tres desplegables y el botón de
   reserva, que ya está, más el enlace «Ver planes y precios» a su lado. La
   de MRS es la buena: prueba pegada al botón.
3. **Aspecto.** Tres caminos para comparar, todos con fotos nuestras, nunca
   de banco:
   - **A · Piso** (la actual): foto a sangre del piso vacío con el móvil en
     el estabilizador y velo oscuro.
   - **B · Plató**: plancha oscura y, a la derecha, la foto del rodaje real
     (Valeria ante cámara, Yerai grabando). Enseña lo que vendemos: el
     contenido se graba de verdad.
   - **C · Papel**: fondo claro, como MDI, MRS, Kaptar y RealAdvisor, con la
     foto de los guiones encima de la mesa a la derecha. Es la que más se
     parece a la competencia española, y la que menos a una «landing de
     agencia» oscura.

   En B y C la foto va sin texto encima y la bandeja la pisa por el borde,
   para unir el ejemplo con el trabajo real.
4. **Prueba social.** Sólo lo cierto: la franja de partners (MundialRooms y
   MBMA) justo debajo. No tenemos nota de Google publicable: la ficha la
   retiró Google (benchmark, 26/9/2026). No se inventa.

## Primera pantalla, en las tres

1. Qué hacemos: «Deja de contestar a curiosos.» y el párrafo de apoyo.
2. Foto real: el piso (A), el rodaje (B) o los guiones (C).
3. CTA: la píldora con «Reservar diagnóstico · 197 €».
4. Prueba cierta: la franja de partners, que en escritorio entra en el
   primer pantallazo o asoma al borde.

## Lo que falta

- Una nota de Google publicable para ponerla junto al botón, como MRS y
  RealAdvisor. **[PENDIENTE: depende de que Google devuelva la ficha]**
- Fotos de rodaje en horizontal: las que hay son verticales, y en el móvil
  se recortan a una banda.

## Lo que dice ui-ux-pro-max (20/10/2026)

La skill está en `.claude/skills/ui-ux-pro-max` ([repositorio](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill), MIT). Sus
scripts piden Python, que no está instalado; se leyeron sus tablas a mano.

- **Perfil que encaja:** «B2B Service» cruzado con «Real Estate/Property».
  El de «Marketing Agency» propone brutalismo y rosa intenso, lo contrario
  de nuestro posicionamiento contra las agencias que prometen y no cumplen.
- **Lo que recomienda y ya teníamos:** Poppins («Modern Professional»),
  teal de confianza sobre azul marino, estilo suizo sin adornos, un solo
  color de acción, precio a la vista.
- **Patrón de portada:** «Trust & Authority + Conversion». Primero la
  credibilidad, después la prueba (logotipos y casos) y un único camino al
  botón.
- **Aplicado:** los curiosos de la bandeja se apagan con color
  (`--muted-apagado`, 4,68:1) y no con opacidad (la hora caía a 2,54:1), y
  junto a los partners va una frase literal de la reseña de Damián.
- **Evitar, según la skill:** diseño juguetón, credenciales escondidas,
  degradados morados o rosas «de IA» y fotos pobres.

## Lo que se probó y lo que quedó (20/10/2026)

Se compararon en una página temporal, ya borrada, ocho portadas: el piso
con la bandeja (A), el plató y el papel con fotos a un lado (descartadas
porque sus fotos repetían las del vídeo y la banda del problema), un
interruptor «Con portales / Con tu sistema», el muro, unas notificaciones
de cristal sobre el piso y el muro con dos fotos detrás.

Quedó el **muro sobre la plancha verde**, con la letra pequeña rehecha
(datos y enlaces separados; la reseña de Damián y los partners en un bloque
propio). Yerai quiso las dos fotos, así que la portada fue un día una
**prueba A/B**: Valeria en duotono (`e`) o el piso (`f`).

## Segunda ronda (21/10/2026)

En su pantalla ancha la portada del muro se desparramaba: el texto pegado
al borde izquierdo, la ficha al derecho y la reseña rompiendo líneas. Se
probaron, con `frontend-design` y referencias nuevas (Compass, Engel &
Völkers, Stripe; las fichas de Folk y la actividad de Linear para la
tarjeta del lead):

- Escaparate, El filtro y Valeria: tres portadas nuevas. No le convencieron:
  quería partir de la actual.
- Tres versiones del muro: ordenado, **en vivo** y con barrido. Primero en
  un panel con esquinas; «el formato cuadrado no me gusta», así que la foto
  y el muro volvieron a ir de fondo, a sangre, y sólo el texto y la ficha
  quedaron dentro de la caja de la página.

Eligió **el muro en vivo**: columnas de mensajes de curioso que suben sin
parar, con botón de pausa, y la ficha del lead como una ficha de CRM (por
qué encaja y la visita agendada). Se retiró la prueba A/B. Cómo funciona,
en `CLAUDE.md`.

## Tercera ronda (22-24/10/2026)

Con las skills nuevas en `.claude/skills` (Impeccable, las de animación de
Emil Kowalski, las de GSAP y la auditoría de Vercel) se montaron nueve
portadas con movimiento en una copia aparte del proyecto
(`../melero-propuestas`, `localhost:4324/portadas/`): Profundidad, La
señal, En directo, El filtro, Tu zona, La conversación y tres en claro
(Antes y después, El recorrido, La agenda). Referencias: Ylopo, Lofty,
Homebot, Rechat, Luxury Presence y RealAdvisor Pro.

Eligió **la señal** (24/10/2026): el muro en vivo, y cada pocos segundos un
mensaje se enciende en teal con un lead y la ficha pasa a ese lead. Las dos
copias de propuestas (`../melero-propuestas` y `../melero-propuestas-2`) se
borraron el 24/10/2026, con sus ramas. Las propuestas nunca se llegaron a
commitear, así que las descartadas no están en el historial: lo que queda de
ellas es esta descripción.

## El testimonio arriba (24/10/2026)

Dos quejas de Yerai: la portada y «El problema» se fundían en un solo
bloque verde, y el rótulo «Nuestros partners» no le gustaba. Se montaron
propuestas en otra copia (`../melero-propuestas-2`, `localhost:4324`):

- A, puente: banda blanca con la cita y los logotipos.
- B: la cita dentro de la portada.
- C, la hoja: una hoja blanca que sube por encima del borde de la portada.
- A1, una línea: logotipo, frase corta y MBMA en una sola fila.
- A2, lectura al bajar: la frase grande, que pasa de gris a negro al bajar.
- A3, con Valeria: la frase junto a su foto, porque la reseña habla de ella.

Eligió **la A3**. La portada termina en la reserva; el testimonio va
debajo, en blanco, y cada logotipo dice qué es. El caso de más abajo se
quitó (ya está arriba) y «El trato» ocupó su sitio para que Planes y
Proceso, oscuras las dos, no quedaran pegadas.

Lo que se aprendió con la A2, por si vuelve: `animation-timeline: view()`
no avanza con `html, body { overflow-x: hidden }`, porque el body pasa a
ser un contenedor de scroll que no se mueve. Hace falta `overflow-x: clip`.
