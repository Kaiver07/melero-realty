export const SITE = {
  name: 'Melero Realty',
  // Quién responde legalmente de la web: Melero Realty es el nombre
  // comercial de una persona física, no una sociedad (PRODUCT.md). Va en el
  // aviso legal y en la política de privacidad, con su NIF (LSSI-CE, art. 10).
  titular: 'Valeria Melero Maldonado',
  nif: '49279356Q',
  // url es la canónica y va con www, que es lo que sirve el servidor.
  // domain es sólo el texto que se enseña en el pie: ahí el www sobra.
  url: 'https://www.valeriamelero.com',
  domain: 'valeriamelero.com',
  description:
    'Generamos leads cualificados para agencias y asesores inmobiliarios en España y EEUU. Sin portales. Sin referidos. Sin curiosos.',
  email: 'melero.realty@gmail.com',
  // El Diagnóstico es de pago desde el 19/10/2026 (197 € + IVA). Todos los
  // CTA de reserva van a este enlace de pago de Stripe, y Stripe, al cobrar,
  // redirige a Calendly: la agenda sólo se abre después de pagar. La
  // redirección se configura en el propio enlace de pago, en Stripe
  // («Después del pago» → redirigir a calendlyUrl).
  // Mientras esté vacío, el despliegue de producción falla a propósito
  // (Layout.astro): publicar sin él dejaría todos los botones sin destino.
  // El enlace lo pasó Valeria el 21/10/2026.
  pagoDiagnosticoUrl: 'https://buy.stripe.com/9B6bJ2fbgdIredo5Xl3VC0b',
  // Agenda de la llamada de diagnóstico. Ya no la enlaza ningún botón: se
  // llega desde Stripe tras pagar.
  calendlyUrl: 'https://calendly.com/valmelemal/45-60min',
  // Google Analytics 4. Sólo se carga si el visitante acepta: GA instala
  // cookies y sin consentimiento previo no puede correr.
  gaId: 'G-3038QG3XN3',
  // YouTube video ID for the "Por qué Melero Realty" section
  youtubeId: 'G-OtqipOUAI',
  // El WhatsApp de Valeria es el canal humano: para quien todavía no quiere
  // pagar ni agendar el diagnóstico.
  // El texto va prerrellenado para que no haya que pensar cómo empezar.
  // Desde el 30/9/2026 el número consta también como teléfono, no sólo como
  // WhatsApp (lo pidió Valeria): enlace tel: en el pie y `telephone` en el
  // schema de la organización. El horario es el de atención que dio ella.
  telefono: '+34 674 82 90 42',
  horario: 'Lunes a viernes, de 9 a 14 h y de 16 a 18 h',
  whatsapp:
    'https://wa.me/34674829042?text=Hola%2C%20os%20escribo%20por%20el%20diagn%C3%B3stico.',
  social: {
    instagram: 'https://www.instagram.com/melero.realty/',
    linkedin: 'https://www.linkedin.com/in/valeria-melero-7a572433a',
    // Canal personal de Valeria, el del vídeo de la home (sacado del propio
    // vídeo). Como el LinkedIn, es suyo y no de la empresa: va en su ficha,
    // no en la de Melero Realty.
    youtube: 'https://www.youtube.com/@valeriiamelero',
  },
} as const;

export const SERVICES = [
  {
    icon: 'trend',
    title: 'Paid Ads Inmobiliario',
    desc: 'Campañas en Meta y Google diseñadas para captar propietarios y compradores cualificados. Sin presupuesto tirado.',
  },
  {
    icon: 'chat',
    title: 'Embudo de Captación',
    desc: 'Diseñamos el recorrido completo: desde el primer clic hasta la llamada agendada. Sin fricción.',
  },
  {
    icon: 'percent',
    title: 'Generación de Leads',
    desc: 'Leads exclusivos para tu agencia. No compartidos, no comprados a terceros. Tuyos.',
  },
  {
    icon: 'doc',
    title: 'Posicionamiento de Marca',
    desc: 'Construimos la presencia digital que hace que los clientes elijan tu agencia antes de llamar a la competencia.',
  },
  {
    icon: 'pencil',
    title: 'Contenido Estratégico',
    desc: 'Contenido que posiciona, educa y filtra. No publicaciones para rellenar el feed.',
  },
  {
    icon: 'link',
    title: 'Estrategia y Consultoría',
    desc: 'Para agencias que quieren entender qué está fallando en su captación y cómo arreglarlo.',
  },
] as const;

/* Desde el 19/10/2026 la home ya no enseña SERVICES: la sección Servicios
   la sustituye PLANES. SERVICES sigue vivo porque los artículos del blog
   se relacionan con estos seis títulos (content.config.ts). */

/* El catálogo con precio publicado (documento de Valeria del 19/10/2026,
   «Cambios web valeriamelero.com — para Yerai»). Sustituye a la decisión
   del 6/9/2026 de no publicar precios.

   Todos los precios van + IVA, y la plantilla lo escribe junto a cada uno
   desde IVA: así no puede quedarse un precio sin él.

   Cada tarjeta lleva su botón a su propio pago de Stripe (desde el
   21/10/2026; antes todas iban al Diagnóstico). El Diagnóstico tiene el
   suyo y queda para quien no sabe qué plan le encaja.

   El destacado se iba a llamar «Best Seller» o «El más elegido». Los dos
   dicen que es el que más se vende, y el catálogo es nuevo: todavía no se
   ha vendido ninguno. Va como «Recomendado» hasta que haya ventas que lo
   sostengan; cambiarlo es cambiar `etiqueta`. */
export const IVA = '+ IVA';

/* La portada (20/10/2026). El titular nombra el dolor que más se repite en
   los diagnósticos (PRODUCT.md): un mensaje para todo el mundo que atrae
   curiosos. La búsqueda «captación de leads para inmobiliarias» pasa al
   párrafo de apoyo, que es lo primero que se lee después.

   La bandeja es un EJEMPLO y lo dice en su pie: no son mensajes de ningún
   cliente ni de ningún portal concreto, y no lleva nombres ni logotipos.
   Enseña lo que el cliente ya vive: los «¿sigue disponible?» del portal
   frente a un propietario que llega por su propia landing de valoración
   (la del plan Captación). Cada mensaje lleva `cualificado` para que la
   plantilla no tenga que adivinarlo. */
export const HERO = {
  kicker: 'Agencia de marketing inmobiliario',
  titulo: 'Deja de contestar a curiosos.',
  apoyo:
    'Captación de leads para inmobiliarias que ya facturan. Un mensaje pensado para tu cliente ideal y un canal propio, junto a los portales, para que el contacto llegue sabiendo quién eres.',
  bandeja: {
    titulo: 'Contactos de esta semana',
    etiqueta: 'Lead cualificado',
    nota: 'Mensajes de ejemplo.',
    mensajes: [
      { origen: 'Portal', hora: 'Lun 09:12', texto: '¿Sigue disponible?', cualificado: false },
      { origen: 'Portal', hora: 'Lun 11:40', texto: 'Hola, info.', cualificado: false },
      {
        origen: 'Tu landing de valoración',
        hora: 'Mar 13:30',
        texto: 'Quiero vender mi piso de tres dormitorios. Me mudo en marzo. ¿Podéis venir a valorarlo esta semana?',
        cualificado: true,
      },
      { origen: 'Portal', hora: 'Mar 17:05', texto: '¿Cuánto vale mi casa? Es solo por saber.', cualificado: false },
      { origen: 'Portal', hora: 'Mié 10:20', texto: 'Solo estaba mirando, gracias.', cualificado: false },
    ],
  },
  /* La tarjeta del lead en el muro (21/10/2026), como una ficha de CRM: por
     qué encaja y en qué acaba. Es un ejemplo, como el mensaje. */
  senal: {
    motivos: ['Quiere vender', 'Plazo: marzo', 'Pide visita'],
    motivosEtiqueta: 'Por qué encaja',
    resultado: 'Visita de valoración agendada',
    cuando: 'Jueves, 10:00',
  },
  /* «La señal» (portada desde el 24/10/2026): tres leads de ejemplo que
     rotan en la ficha. `corto` es lo que se enciende en el muro. Ninguno
     es de un cliente real. */
  leads: [
    {
      origen: 'Tu landing de valoración', hora: 'Mar 13:30', corto: 'Quiero vender mi piso',
      texto: 'Quiero vender mi piso de tres dormitorios. Me mudo en marzo. ¿Podéis venir a valorarlo esta semana?',
      motivos: ['Quiere vender', 'Plazo: marzo', 'Pide visita'],
      resultado: 'Visita de valoración agendada', cuando: 'Jueves, 10:00',
    },
    {
      origen: 'Tu web', hora: 'Mié 18:40', corto: 'Hipoteca preaprobada',
      texto: 'He visto vuestros vídeos de la zona. Tenemos la hipoteca preaprobada y buscamos un ático. ¿Hablamos el jueves?',
      motivos: ['Compra ya', 'Financiación lista', 'Pide llamada'],
      resultado: 'Llamada agendada', cuando: 'Jueves, 17:00',
    },
    {
      origen: 'Tu Instagram', hora: 'Vie 12:15', corto: 'Piso heredado, vender ya',
      texto: 'Hemos heredado un piso en el centro y queremos venderlo antes del verano. ¿Qué documentación necesitáis?',
      motivos: ['Quiere vender', 'Plazo: verano', 'Pregunta trámites'],
      resultado: 'Visita de valoración agendada', cuando: 'Lunes, 11:00',
    },
  ],
  /* El muro de la portada (20/10/2026): el ruido de fondo, frases cortas
     de curioso. Son ejemplos, como la bandeja; no son mensajes reales. */
  muro: [
    '¿Sigue disponible?', 'Hola, info.', '¿Precio?', '¿Cuánto es lo último?',
    'Solo estaba mirando.', '¿Se puede ver hoy?', '¿Aceptáis mascotas?', 'Info, por favor.',
    '¿Cuánto vale mi casa?', '¿Tiene garaje?', 'Me interesa.', '¿Sigue libre?',
  ],
} as const;

/* `pago` es el enlace de Stripe de cada pack, que pasó Valeria el
   21/10/2026. Desde ese día cada plan se contrata directo con su botón, y
   el Diagnóstico queda como opción aparte para quien no sabe cuál le
   encaja (lo decidió Yerai).
   Datos de Valeria del 21/10/2026: el diagnóstico va incluido en cada
   plan; pagado aparte, sólo descuenta 50 € del primer mes si después se
   contrata. El presencial sólo existe dentro de un plan. Los anuncios son
   opcionales y los paga el cliente: Melero los gestiona y optimiza. El
   enlace de SEO, SEM y GEO cobra sólo la auditoría (290 € + IVA, 350,90 €);
   el presupuesto del servicio se presenta después. */
export const PLANES = {
  antetitulo: 'Planes',
  titulo: 'Tres planes con precio cerrado y un servicio de posicionamiento a medida.',
  intro: 'Sabes lo que cuesta antes de hablar con nadie. Cada plan incluye el diagnóstico. Si no sabes cuál te encaja, empieza por él: si después contratas un plan, te descontamos 50 € del primer mes.',
  boton: 'Contratar este plan',
  destacado: {
    etiqueta: 'Recomendado',
    nombre: 'Plan Completo + SEO, SEM y GEO',
    para: 'Para quien quiere marca, captación y posicionamiento a la vez.',
    desde: true,
    precio: '1.424 €/mes',
    nota: 'los 3 primeros meses',
    despues: 'Un 20 % menos por contratarlos juntos. Después, desde 1.780 €/mes + IVA.',
    anuncios: 'Anuncios opcionales: si los quieres, la inversión la pagas tú y nosotros los gestionamos.',
    incluye: [
      'Diagnóstico de captación incluido',
      '4 Reels al mes con perfil ante cámara',
      'Guiones y carruseles',
      'Landing de valoración',
      'Campaña Meta a propietarios',
      'Seguimiento por WhatsApp y email',
      '2 h al mes de formación comercial',
      'Auditoría inicial y posicionamiento en Google y en la IA',
    ],
    condiciones: 'Permanencia mínima de 6 meses',
    pago: 'https://buy.stripe.com/14A28s3sy7k37P0adB3VC06',
  },
  planes: [
    {
      id: 'contenido',
      nombre: 'Contenido',
      para: 'Marca y presencia',
      desde: false,
      precio: '590 €/mes',
      anuncios: '',
      incluye: [
        'Diagnóstico de captación incluido',
        '4 Reels al mes con perfil ante cámara',
        'Guiones',
        '4 carruseles',
        'Calendario de publicación',
        'Reporte quincenal',
      ],
      condiciones: 'Mínimo 3 meses',
      pago: 'https://buy.stripe.com/eVqeVe0gm33N7P0gBZ3VC0a',
    },
    {
      id: 'captacion',
      nombre: 'Captación',
      para: 'Que lleguen propietarios',
      desde: false,
      precio: '790 €/mes',
      // Hasta el 21/10/2026 Melero pagaba los primeros 20 días de anuncios.
      // Ya no: los anuncios son opcionales y los paga el cliente (Valeria).
      anuncios: 'Anuncios opcionales: si los quieres, la inversión la pagas tú y nosotros los gestionamos y optimizamos.',
      incluye: [
        'Diagnóstico de captación incluido',
        'Landing de valoración',
        'Campaña Meta a propietarios',
        'Seguimiento por WhatsApp y email',
        'CRM sencillo',
        'Reporte quincenal',
      ],
      condiciones: 'Mínimo 3 meses · Exclusividad por zona',
      pago: 'https://buy.stripe.com/cNibJ2aV047R5GS99x3VC09',
    },
    {
      id: 'completo',
      nombre: 'Completo',
      para: 'Marca y captación a la vez',
      desde: false,
      precio: '1.290 €/mes',
      anuncios: 'Anuncios opcionales: si los quieres, la inversión la pagas tú y nosotros los gestionamos.',
      incluye: [
        'Diagnóstico de captación incluido',
        'Todo el plan Contenido',
        'Todo el plan Captación',
        '2 h al mes de formación comercial',
      ],
      condiciones: 'Mínimo 6 meses · Exclusividad por zona',
      pago: 'https://buy.stripe.com/8x2bJ29QW47R5GSetR3VC08',
    },
    {
      id: 'seo',
      nombre: 'SEO, SEM y GEO',
      para: 'Aparecer en Google y en la IA',
      desde: true,
      precio: '490 €/mes',
      anuncios: 'Auditoría inicial: 290 € + IVA.',
      incluye: [
        'Diagnóstico de captación incluido',
        'Auditoría inicial',
        'Servicio personalizado según la auditoría',
      ],
      // Su enlace de pago cobra sólo la auditoría: el botón lo dice.
      boton: 'Empezar por la auditoría',
      // La permanencia va escrita en la tarjeta, junto al precio (lo pidió
      // Valeria): es el único plan cuyo precio final se cierra después.
      condiciones: 'El presupuesto del servicio se presenta tras la auditoría · Permanencia mínima de 6 meses',
      pago: 'https://buy.stripe.com/9B69AU1kqfQz6KW1H53VC07',
    },
  ],
  diagnostico: {
    nombre: 'Diagnóstico de Captación',
    para: 'Si no sabes qué plan te encaja',
    precio: '197 €',
    nota: 'por videollamada',
    incluye: '90 minutos con Valeria y un informe escrito con tu cuello de botella y un plan de 90 días.',
    condiciones: 'Si después contratas un plan, te descontamos 50 € del primer mes. Cada plan ya lo incluye.',
    boton: 'Reservar diagnóstico · 197 €',
  },
  extrasTitulo: 'Extras',
  extrasNota: 'Pago único, con cualquier plan.',
  extras: [
    { t: 'Formación individual de captación', precio: '350 €' },
    { t: 'Jornada de grabación extra', precio: '190 €' },
    { t: 'Web completa', precio: 'desde 1.500 €' },
  ],
} as const;

/* Respaldo, no servicio (documento del 19/10/2026): MBMA va como
   colaborador, sin sección propia, sin formulario de inversión y sin hablar
   de rentabilidades. El logotipo lo pasó Yerai el 20/10/2026, en su versión
   sobre blanco, para la franja de logos de debajo de la portada: sólo se ha
   recortado el margen, el dibujo no se retoca porque es marca ajena.
   La web la dio Yerai el mismo día. Si `web` se vacía, el logotipo sale
   sin enlace. */
export const COLABORADORES = {
  antetitulo: 'Colaboradores',
  lista: [
    {
      nombre: 'MBMA Real Estate (Dubái)',
      papel: 'Colaborador internacional',
      logo: { src: '/images/colab-mbma.webp', width: 640, height: 201 },
      web: 'https://www.mbmauae.ae/',
    },
  ],
} as const;

/* El caso de la home. Desde el 30/9/2026 es MundialRooms; sustituye al de
   ARC Proyectos Renovables, que sale de la web por indicación de Valeria.
   Los datos y la reseña los aporta ella: aquí no se redondea ni se adorna
   nada. Va todo junto —titular incluido— para que quien cambie de caso lo
   cambie entero.

   No lleva cifra: el trabajo empezó a principios de septiembre de 2026 y
   todavía no hay resultado que enseñar. El día que lo haya, necesita
   nombre, empresa, enlace y permiso (CLAUDE.md).

   Desde el 19/10/2026 la home enseña sólo el logotipo y la reseña de
   Damián (documento de Valeria): el caso detallado va únicamente en el
   dossier comercial. `titulo`, `sector` y `frentes` se quedan aquí para el
   dossier, pero la home ya no los pinta. El contrato empezó el 26/8/2026.

   La cita son las cuatro primeras frases de la reseña que dejó su CEO en
   Google, sin tocar una palabra; la reseña entera está en PRODUCT.md.
   MundialRooms sabe que sale aquí: se le pidió permiso (lo confirmó Yerai
   el 30/9/2026). */
export const CASO = {
  titulo: 'Una agencia de Madrid. Tres frentes en marcha.',
  cliente: 'MundialRooms',
  // El logotipo lo pasó Yerai el 30/9/2026; es el mismo de su web. Sólo se
  // ha recortado al dibujo y se ha dejado el fondo en blanco puro: es marca
  // ajena y el dibujo no se retoca.
  logo: { src: '/images/caso-mundialrooms.webp', width: 640, height: 226 },
  sector:
    'Agencia inmobiliaria de Madrid, con presencia en Miami y República Dominicana. Trabajan con nosotros desde agosto de 2026.',
  // El enlace es parte de la prueba: quien dude puede entrar y comprobar que
  // la empresa existe, está en Madrid y hace lo que decimos que hace.
  web: 'https://mundialrooms.com/',
  webTexto: 'mundialrooms.com',
  frentes: [
    {
      t: 'Perfiles ante cámara',
      d: 'Seleccionamos, contratamos y coordinamos a los perfiles que aparecen ante cámara en sus Reels.',
    },
    {
      t: 'Contenido semanal',
      d: 'Planificamos cada semana el contenido con su equipo de redes.',
    },
    {
      t: 'Formación comercial',
      d: 'Damos formación individual de captación a su equipo comercial.',
    },
  ],
  cita:
    'Como CEO de MundialRooms, quiero agradecer y destacar públicamente el excelente trabajo que está realizando Valeria en nuestra compañía. Desde el primer minuto ha demostrado una gran profesionalidad, implicación y atención a cada detalle. Siempre está pendiente de nuestras necesidades y, sobre todo, buscando la mejor estrategia y nuevas oportunidades que nos ayuden a mejorar y potenciar nuestras ventas. Da gusto trabajar con profesionales que se implican de esta manera y sienten los objetivos de la empresa como propios.',
  citaAutor: 'Damián',
  citaCargo: 'CEO de MundialRooms · Madrid',
} as const;

/* Los logotipos de la prueba. Salen de CASO y de COLABORADORES para que un
   logotipo cambie en un solo sitio. Cada logotipo enlaza a la web de su
   empresa. Desde el 24/10/2026 van en el testimonio de debajo de la
   portada (Testimonio.astro), cada uno con lo que es (`papel`) en lugar
   del rótulo «Nuestros partners», que ya sólo usa la portada «piso». */
export const FRANJA_LOGOS = {
  texto: 'Nuestros partners',
  // La frase de la reseña de Damián que se enseña: la del testimonio y la
  // de la portada «piso». Tiene que estar literal dentro de CASO.cita; si
  // no, la compilación falla (Franja.astro y Testimonio.astro).
  cita: {
    texto: 'Desde el primer minuto ha demostrado una gran profesionalidad, implicación y atención a cada detalle.',
    autor: CASO.citaAutor,
    cargo: CASO.citaCargo,
  },
  logos: [
    { nombre: CASO.cliente, ...CASO.logo, web: CASO.web, papel: 'Cliente en Madrid' },
    { nombre: 'MBMA Real Estate', ...COLABORADORES.lista[0].logo, web: COLABORADORES.lista[0].web, papel: 'Colaborador en Dubái' },
  ],
} as const;

export const PROCESO = [
  {
    step: '01',
    title: 'Diagnóstico inicial',
    desc: 'Analizamos tu agencia, tu zona y tu competencia para detectar dónde estás perdiendo leads.',
  },
  {
    step: '02',
    title: 'Elegimos tu plan',
    desc: 'El diagnóstico decide qué plan encaja con tu agencia, tu zona y tu objetivo. Sin propuestas a medida que tardan semanas.',
  },
  {
    step: '03',
    title: 'Lanzamiento y captación',
    desc: 'Activamos las campañas y el sistema de captación exclusivo para tu marca.',
  },
  {
    step: '04',
    title: 'Optimización continua',
    desc: 'Ajustamos semana a semana según coste por lead y calidad real, no métricas de vanidad.',
  },
  {
    step: '05',
    title: 'Resultados y escalado',
    desc: 'Con el sistema validado, escalamos inversión y ampliamos zonas de captación.',
  },
] as const;

/* Lo que se mantiene con cualquier cliente, salga lo que salga del
   diagnóstico. Antes aquí sólo había tres cifras sueltas —a medida, 6 meses,
   1 marca— que decían las condiciones pero no lo que uno se lleva. Esto sí
   es la oferta: qué hacemos, qué se enseña, qué se mide y cada cuánto.

   Van numeradas, y por eso el orden es cronológico de verdad: diagnóstico,
   métricas pactadas, montaje, enseñar cómo se hace, revisión quincenal y la
   permanencia, que desde el 19/10/2026 depende del plan. Numerar algo que no es una secuencia sería
   decorar; "Puertas abiertas" se movió al cuarto puesto para que la
   numeración diga la verdad y no al revés. */
export const PILARES = [
  {
    t: 'Empezamos por el diagnóstico',
    d: 'Miramos de dónde vienen hoy tus contactos, en qué punto se caen y qué tipo de operación te deja margen. De ahí sale el plan. A veces son anuncios; a veces es tu base de datos dormida, tu web o cómo se hace el seguimiento.',
  },
  {
    t: 'Definimos tus métricas antes de empezar',
    d: 'No todos medimos lo mismo. Fijamos contigo dos o tres números que reflejen tu objetivo real —captación, cierres, coste por cita, lo que toque— y esos son los que se miran después.',
  },
  {
    t: 'Nosotros lo montamos y lo mantenemos',
    d: 'Ejecutamos lo que salga del diagnóstico y lo ajustamos con los datos. No te entregamos un plan para que lo apliques tú.',
  },
  {
    t: 'Puertas abiertas',
    d: 'Si la persona responsable de tu equipo quiere ver cómo se hace, se lo enseñamos: por qué se toma cada decisión, cómo se monta y cómo se lee. Trabajamos sin caja negra. Con el tiempo tu equipo puede sostener buena parte del sistema por su cuenta.',
  },
  {
    t: 'Revisión cada 15 días',
    d: 'Un documento con tus números y qué se ha cambiado, más una llamada para decidir qué se mantiene, qué se prueba y qué se corta.',
  },
  {
    t: 'Permanencia según plan',
    d: '3 meses en Contenido y Captación; 6 en Completo, en SEO, SEM y GEO y en el plan recomendado. No porque nos guste atar a nadie, sino porque los primeros datos útiles llegan hacia los 20 días y una decisión de compra inmobiliaria rara vez se cierra en cuatro semanas.',
  },
] as const;

export const COMPARISON = [
  {
    ellos: 'Estrategias genéricas sin conocimiento del sector',
    nosotros: 'Especialización exclusiva en inmobiliario',
  },
  {
    ellos: 'Métricas de vanidad (impresiones, likes, alcance)',
    nosotros: 'KPIs reales: coste por lead, coste por cliente, ROI',
  },
  {
    ellos: 'Tiempos de respuesta lentos y comunicación opaca',
    nosotros: 'Comunicación directa y revisión cada 15 días',
  },
  {
    ellos: 'Soporte mínimo tras el lanzamiento',
    nosotros: 'Acompañamiento 1:1 continuo con la CEO',
  },
  {
    ellos: 'Técnicas desactualizadas y dependencia de portales',
    nosotros: 'Sistemas propios de captación sin depender de terceros',
  },
] as const;

/**
 * Publicaciones y reels de Instagram que se muestran en la web.
 *
 * NO es un feed automático, y es deliberado: Instagram no expone el listado
 * de publicaciones sin login ni sin un token de aplicación, y este sitio es
 * estático y no tiene backend donde renovarlo. Los widgets de terceros que lo
 * resuelven cargan scripts con cookies de seguimiento, lo que dejaría en
 * mentira el aviso de cookies de la web.
 *
 * Así que es una selección manual, y la miniatura hay que aportarla a mano:
 * Instagram ya no expone la imagen ni en la página de la publicación ni en su
 * endpoint de embebido sin sesión iniciada (comprobado en septiembre de 2026;
 * ambos devuelven muro de login). Se guarda en
 *     public/images/social/<código>.webp
 * donde <código> es el identificador de la URL. Por ejemplo, para
 * .../p/DZ4yt9EgozP/ el archivo es DZ4yt9EgozP.webp
 *
 * Si falta la imagen, esa entrada NO se pinta: la web nunca mostrará un hueco
 * roto por una miniatura que no llegó.
 *
 * `tipo` distingue 'reel' de 'post' para pintar el indicador de vídeo.
 */
export const SOCIAL = [
  { url: 'https://www.instagram.com/p/DZ4yt9EgozP/', tipo: 'post', alt: 'Publicación de Melero Realty en Instagram' },
  { url: 'https://www.instagram.com/p/Db8SClQghjD/', tipo: 'post', alt: 'Publicación de Melero Realty en Instagram' },
  { url: 'https://www.instagram.com/p/DakMM5Qtyja/', tipo: 'post', alt: 'Publicación de Melero Realty en Instagram' },
  { url: 'https://www.instagram.com/p/DaCt5ygglhn/', tipo: 'post', alt: 'Publicación de Melero Realty en Instagram' },
] as const;

/* `id` es el ancla de cada persona en sobre-nosotros: la firma de los
   artículos enlaza ahí. `bio` sólo dice lo confirmado en PRODUCT.md. La de
   Valeria lleva su trayectoria, que aportó ella el 30/9/2026. Las de Yerai
   y Carlos sólo dicen qué hacen en Melero: su trayectoria está pendiente
   (NOTAS.md). `perfiles`, sus perfiles públicos propios. */
export const TEAM = [
  {
    name: 'Valeria Melero',
    role: 'CEO & Founder',
    photo: '/team/valeria.webp',
    id: 'valeria-melero',
    bio: 'Fundó Melero Realty y la dirige. Lleva más de 8 años en marketing digital y ha trabajado en venta consultiva B2B en OVB, en NUR y en la propia Melero Realty. Impartió el programa «Generación Digital PYMES» en ESCP Business School, junto a Anova CTI. Desde 2025 trabaja en captación inmobiliaria, ayudando a agencias y asesores independientes a depender menos de los portales. Hace la llamada de diagnóstico con cada agencia y acompaña 1:1 a cada cliente durante todo el trabajo.',
    perfiles: [SITE.social.linkedin, SITE.social.youtube],
  },
  {
    name: 'Yerai Jiménez',
    role: 'Marketing & Comunicación',
    photo: '/team/yerai.webp',
    id: 'yerai-jimenez',
    bio: 'Lleva el marketing y la comunicación: escribe los guiones y el contenido de Melero Realty, también los artículos del blog.',
    perfiles: [],
  },
  {
    name: 'Carlos Bernabé',
    role: 'Director Comercial',
    photo: '/team/carlos.webp',
    id: 'carlos-bernabe',
    bio: 'Dirige el área comercial y participa en los guiones del contenido de Melero Realty.',
    perfiles: [],
  },
] as const;

/* Ordenadas por intención de compra, no por comodidad: primero lo que
   decide si esto es para ti, después lo que decide si te fías.

   Las cuatro últimas responden objeciones que antes no estaban en ninguna
   parte y que se preguntan siempre: zona ocupada, salida anticipada, quién
   paga los anuncios. Callarlas no las hacía desaparecer, solo las dejaba
   para la llamada, donde ya cuesta dinero contestarlas. */
export const FAQ = [
  {
    q: '¿Qué necesito para empezar?',
    a: 'Una inmobiliaria en activo y un presupuesto de marketing ya asignado, aunque sea pequeño. Si nunca has invertido, el diagnóstico te dirá si merece la pena empezar.',
  },
  {
    q: '¿Qué incluye el diagnóstico?',
    a: 'Cada plan lo incluye. Pagado aparte, para quien no sabe qué plan le encaja, cuesta 197 € + IVA, y si después contratas un plan te descontamos 50 € del primer mes. Son 90 minutos con Valeria para encontrar el cuello de botella: de dónde vienen hoy tus contactos y en qué punto se te caen. En los siete días siguientes recibes un informe escrito con un plan de 90 días y nuestra respuesta honesta sobre si podemos ayudarte. Si la respuesta es que no, te lo decimos.',
  },
  {
    q: '¿Cuánto tiempo hasta ver resultados?',
    a: 'Los primeros resultados se empiezan a ver en torno a 20 días. Antes de 3 meses no se puede garantizar nada: el margen de error es nuestro mejor amigo. Si no se cumplen los objetivos en el plazo acordado, seguimos trabajando hasta conseguirlo.',
  },
  {
    q: 'La inversión publicitaria, ¿va dentro de vuestros honorarios o aparte?',
    // Datos de Valeria del 21/10/2026, los mismos que la nota de «El trato»
    // (index.astro). Si cambia una, cambian las dos.
    a: 'Aparte, y sólo si tú decides hacer anuncios: la inversión la pagas tú, desde tu propia cuenta, y nunca pasa por nosotros. Nosotros gestionamos y optimizamos las campañas, te enseñamos los números y te decimos qué haríamos, pero la última palabra es tuya.',
  },
  {
    q: '¿Y si mi zona ya está ocupada?',
    a: 'Puede pasar: trabajamos con una sola marca por zona. Una zona es un municipio; en ciudades grandes, un distrito o un grupo de códigos postales, que se fija en el contrato. Si la tuya está ocupada te lo decimos en el diagnóstico, sin rodeos, y te dejamos en lista de espera por si esa colaboración termina. No aceptamos un segundo cliente en la misma zona aunque nos convenga.',
  },
  {
    q: '¿Puedo salir antes del mínimo?',
    a: 'Una vez cumplido el mínimo de tu plan —3 meses en Contenido y Captación, 6 en el resto— puedes salir cuando quieras con 15 días de preaviso, y te llevas todo lo montado: campañas, landing, base de datos y accesos. El mínimo existe porque antes no hay datos suficientes para juzgar el trabajo, no para atarte.',
  },
  {
    q: '¿Qué presupuesto necesito?',
    a: 'Los precios están publicados en la sección Planes, todos + IVA. Sólo SEO, SEM y GEO se cierra tras la auditoría, siempre con un mínimo de 6 meses, porque el posicionamiento tarda en dar resultados.',
  },
  {
    q: '¿Qué plan me conviene?',
    a: 'Si quieres marca, captación y posicionamiento a la vez, el plan recomendado: Completo + SEO, SEM y GEO. Si no lo tienes claro, el diagnóstico lo decide; para eso está.',
  },
  {
    q: '¿Trabajáis presencialmente?',
    // Desde el 21/10/2026 no hay diagnóstico en persona suelto: lo
    // presencial sólo existe dentro de un plan contratado (Valeria).
    a: 'Trabajamos en remoto, con agencias de toda España y con clientes en Estados Unidos: el diagnóstico y el seguimiento se hacen por videollamada, así que la zona en la que estés no condiciona nada. Las visitas en persona sólo se hacen dentro de un plan contratado.',
  },
] as const;

/* Todo lo que rodea a los artículos del blog. Los artículos en sí viven en
   src/content/blog/, uno por archivo Markdown.
   El cierre repite a propósito el de sobre-nosotros, que ya estaba aprobado. */
export const BLOG = {
  titulo: 'Blog de captación inmobiliaria',
  descripcion:
    'Artículos para agencias y asesores inmobiliarios en activo: de dónde vienen tus contactos, en qué punto se pierden y qué números merece la pena mirar.',
  antetitulo: 'Blog',
  h1: 'Notas de captación para inmobiliarias en activo',
  intro:
    'De dónde vienen tus contactos, en qué punto se pierden y qué números merece la pena mirar. Sin cifras que no se puedan comprobar.',
  vacio: 'Todavía no hay artículos publicados.',
  leer: 'Leer artículo',
  relacionadosAntetitulo: 'Relacionado',
  relacionados: 'Servicios relacionados',
  // La home ya no tiene sección Servicios: el enlace lleva a los planes.
  verServicios: 'Ver los planes y precios',
  otros: 'Más artículos',
  // Delante de los nombres de quien firma el artículo.
  por: 'Por',
  // Delante de la fecha visible: Google pide que la fecha diga qué es.
  publicado: 'Publicado el',
  // Sólo en los artículos con `updatedDate` en el frontmatter.
  actualizado: 'Actualizado el',
  cta: {
    antetitulo: 'Diagnóstico',
    titulo: '¿Quieres que hablemos de tu caso?',
    texto: '90 minutos con Valeria e informe escrito en 7 días. 197 € + IVA; si después contratas un plan, te descontamos 50 € del primer mes.',
    boton: 'Reservar diagnóstico · 197 €',
    // La otra salida, como en la home: los planes con su precio. Hasta el
    // 24/10/2026 era el diagnóstico por escrito (/contacto), que se quitó.
    planes: 'O mira antes los planes y precios',
  },
} as const;

/* La página 404. Vercel la sirve con código 404 para cualquier dirección que
   no exista; lo que importa es no dejar a nadie sin salida. */
export const NO_ENCONTRADA = {
  titulo: 'Página no encontrada',
  antetitulo: 'Error 404',
  h1: 'Esta página no existe',
  texto: 'Puede que el enlace esté mal escrito o que la página ya no esté. Desde aquí puedes seguir por donde quieras.',
  boton: 'Reservar diagnóstico · 197 €',
  enlaces: [
    { href: '/', texto: 'Ir al inicio' },
    { href: '/#planes', texto: 'Ver los planes' },
    { href: '/blog/', texto: 'Leer el blog' },
  ],
} as const;
