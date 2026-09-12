export const SITE = {
  name: 'Melero Realty',
  // url es la canónica y va con www, que es lo que sirve el servidor.
  // domain es sólo el texto que se enseña en el pie: ahí el www sobra.
  url: 'https://www.valeriamelero.com',
  domain: 'valeriamelero.com',
  description:
    'Generamos leads cualificados para agencias y asesores inmobiliarios en España y EEUU. Sin portales. Sin referidos. Sin curiosos.',
  email: 'melero.realty@gmail.com',
  // Agenda de la llamada de diagnóstico. Todos los CTA de reserva apuntan aquí.
  calendlyUrl: 'https://calendly.com/valmelemal/45-60min',
  // URL del Google Apps Script (Implementar > Nueva implementación > Aplicación web) que guarda el formulario en Google Sheets
  sheetsWebAppUrl: 'https://script.google.com/macros/s/AKfycbzKBPCN1TMWJP4iKo40WSYLWb8fIvelYa8m3IzCacegvOI6rY_ptES7Zh5k-SjP-BIx/exec',
  // Google Analytics 4. Sólo se carga si el visitante acepta: GA instala
  // cookies y sin consentimiento previo no puede correr.
  gaId: 'G-3038QG3XN3',
  // YouTube video ID for the "Por qué Melero Realty" section
  youtubeId: 'G-OtqipOUAI',
  // El WhatsApp de Valeria es el canal humano: para quien no quiere agendar
  // una videollamada de 45 minutos pero tampoco rellenar un formulario.
  // El texto va prerrellenado para que no haya que pensar cómo empezar.
  telefono: '+34 674 82 90 42',
  whatsapp:
    'https://wa.me/34674829042?text=Hola%2C%20os%20escribo%20por%20el%20diagn%C3%B3stico.',
  social: {
    instagram: 'https://www.instagram.com/melero.realty/',
    linkedin: 'https://www.linkedin.com/in/valeria-melero-7a572433a',
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

/* Primer caso publicable, y de momento el único. Los datos y la cita los
   aporta el cliente: aquí no se redondea ni se adorna nada, porque el valor
   de esto es justo que se pueda comprobar llamando a ARC.

   La cita es un recorte literal de un texto más largo. Dentro del fragmento
   no se ha tocado una palabra; el original completo está en el historial. */
export const CASO = {
  cliente: 'ARC Proyectos Renovables',
  sector: 'Constructora de origen cubano, en activo en Valencia.',
  logo: '/images/caso-arc.webp',
  // El enlace es parte de la prueba: quien dude puede entrar y comprobar que
  // la empresa existe, está en Valencia y hace lo que decimos que hace.
  web: 'https://www.arcproyectosrenovables.com/',
  webTexto: 'arcproyectosrenovables.com',
  partida:
    'La empresa ya estaba consolidada, pero no tenía sistema de captación. El mensaje no llegaba a su cliente ideal, así que el tiempo se iba en contactos que no cerraban.',
  cambio:
    'Primero el mensaje, después el sistema completo alrededor. El salto no llegó a la primera: llegó en la séptima sesión.',
  hoy:
    'Estructura interna más ordenada y el trabajo continúa: siguen con nosotros.',
  cifra: '+30%',
  cifraPie: 'de facturación',
  cita:
    'Su conocimiento en marketing digital es brillante, pero lo que realmente la hace extraordinaria es su calidad humana. Valeria va mucho más allá de enseñarte estrategias; se involucra de corazón, te impulsa a romper barreras y celebra tus logros como propios.',
  citaAutor: 'Lina Marcela',
  citaCargo: 'ARC Proyectos Renovables · Valencia',
} as const;

export const PROCESO = [
  {
    step: '01',
    title: 'Diagnóstico inicial',
    desc: 'Analizamos tu agencia, tu zona y tu competencia para detectar dónde estás perdiendo leads.',
  },
  {
    step: '02',
    title: 'Estrategia a medida',
    desc: 'Diseñamos el embudo y los canales de captación específicos para tu mercado. Nada genérico.',
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
   métricas pactadas, montaje, enseñar cómo se hace, revisión quincenal y el
   recorrido de seis meses. Numerar algo que no es una secuencia sería
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
    t: 'Seis meses de recorrido',
    d: 'No porque nos guste atar a nadie, sino porque los primeros datos útiles llegan hacia los 20 días y una decisión de compra inmobiliaria rara vez se cierra en cuatro semanas. En menos tiempo no se puede ajustar nada con criterio.',
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
    nosotros: 'Comunicación directa y reporte semanal',
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

export const TEAM = [
  { name: 'Valeria Melero', role: 'CEO & Founder', photo: '/team/valeria.webp' },
  { name: 'Yerai Jiménez', role: 'Marketing & Comunicación', photo: '/team/yerai.webp' },
  { name: 'Carlos Bernabé', role: 'Director Comercial', photo: '/team/carlos.webp' },
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
    q: '¿Qué me llevo de la primera llamada?',
    a: 'En la llamada buscamos dónde está el cuello de botella: de dónde vienen hoy tus contactos y en qué punto se te caen. En los siete días siguientes recibes un informe escrito con el diagnóstico completo y con nuestra respuesta honesta sobre si podemos ayudarte o no. Si la respuesta es que no, te lo decimos.',
  },
  {
    q: '¿Cuánto tiempo hasta ver resultados?',
    a: 'Los primeros resultados se empiezan a ver en torno a 20 días. Antes de 3 meses no se puede garantizar nada: el margen de error es nuestro mejor amigo. Si no se cumplen los objetivos en el plazo acordado, seguimos trabajando hasta conseguirlo.',
  },
  {
    q: 'La inversión publicitaria, ¿va dentro de vuestros honorarios o aparte?',
    a: 'Los primeros 20 días de campaña los cubrimos nosotros, incluidos en los honorarios, para que veas datos reales antes de poner tu dinero. A partir del día 21 decides tú: te enseñamos los números y te decimos qué haríamos, pero la última palabra es tuya. Si sigues, la inversión la pagas desde tu propia cuenta y ves cada euro gastado. Nunca pasa por nosotros.',
  },
  {
    q: '¿Y si mi zona ya está ocupada?',
    a: 'Puede pasar: trabajamos con una sola marca por zona. Si es tu caso te lo decimos en la primera llamada, sin rodeos, y te dejamos en lista de espera por si esa colaboración termina. No aceptamos un segundo cliente en la misma zona aunque nos convenga.',
  },
  {
    q: '¿Puedo salir antes de los seis meses?',
    a: 'Sí, con 15 días de preaviso, y te llevas todo lo montado: campañas, landing, base de datos y accesos. El contrato es de 6 meses porque antes no hay datos suficientes para juzgar el trabajo, no para atarte.',
  },
  {
    q: '¿Qué presupuesto necesito?',
    a: 'Depende del caso: cada sistema de captación se dimensiona según la zona, el tipo de propiedades y el objetivo. Se define en el diagnóstico, que es gratuito y sin compromiso.',
  },
  {
    q: '¿Trabajáis presencialmente?',
    a: 'Trabajamos en remoto con agencias de toda España y con clientes en Estados Unidos. El diagnóstico y el seguimiento se hacen por videollamada, así que la zona en la que estés no condiciona nada.',
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
  verServicios: 'Ver todos los servicios',
  otros: 'Más artículos',
  cta: {
    antetitulo: 'Diagnóstico',
    titulo: '¿Quieres que hablemos de tu caso?',
    texto: '30 minutos. Sin compromiso. Con análisis real de tu situación.',
    boton: 'Solicitar diagnóstico gratuito',
  },
} as const;
