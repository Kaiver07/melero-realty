export const SITE = {
  name: 'Melero Realty',
  url: 'https://valeriamelero.com',
  domain: 'valeriamelero.com',
  description:
    'Generamos leads cualificados para agencias y asesores inmobiliarios en España y EEUU. Sin portales. Sin referidos. Sin curiosos.',
  tagline:
    'Si el 80% de tus leads vienen de un portal, tienes un problema.',
  subtitulo:
    'Creamos sistemas de captación de leads cualificados para negocios inmobiliarios en activo. Sin portales. Sin referidos. Sin curiosos.',
  email: 'hola@valeriamelero.com',
  // URL del Google Apps Script (Implementar > Nueva implementación > Aplicación web) que guarda el formulario en Google Sheets
  sheetsWebAppUrl: 'https://script.google.com/macros/s/AKfycbzKBPCN1TMWJP4iKo40WSYLWb8fIvelYa8m3IzCacegvOI6rY_ptES7Zh5k-SjP-BIx/exec',
  // YouTube video ID for the "Por qué Melero Realty" section
  youtubeId: 'TLz7i5DMY-c',
  social: {
    instagram: 'https://instagram.com/melerorealty',
  },
} as const;

export const STATS = [
  { value: '+65%', label: 'ROI medio' },
  { value: '+87', label: 'Inmobiliarias con éxito' },
  { value: '98%', label: 'Tasa de retención' },
  { value: '+3 años', label: 'De experiencia' },
] as const;

export const STATS_BIG = [
  { value: '98%', label: 'Tasa de retención de clientes' },
  { value: '+40', label: 'Agencias y asesores activos' },
  { value: '+300%', label: 'ROI medio en captación' },
] as const;

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

export const TESTIMONIALS = [
  {
    quote:
      'En 6 semanas teníamos un flujo constante de leads. Nada que ver con lo que habíamos probado antes.',
    name: 'Carlos Fuentes',
    role: 'Director de Inmobiliaria Fuentes & Asociados',
  },
  {
    quote:
      'Dejamos Idealista y al principio daba vértigo. Ahora captamos más barato y con más calidad.',
    name: 'Laura Serrano',
    role: 'Asesora independiente, Madrid',
  },
  {
    quote: 'Por fin una agencia que habla de números y no de followers.',
    name: 'Marcos Gil',
    role: 'Gerente de Grupo Inmobiliario Gil',
  },
] as const;

export const TEAM = [
  { name: 'Valeria Melero', role: 'CEO & Founder', photo: '/team/valeria.jpg' },
  { name: 'Yerai Jiménez', role: 'Marketing & Comunicación', photo: '/team/yerai.jpg' },
] as const;

export const FAQ = [
  {
    q: '¿Trabajáis con cualquier tipo de agencia?',
    a: 'Trabajamos con inmobiliarias, siempre que estén en activo.',
  },
  {
    q: '¿Qué necesito para empezar?',
    a: 'Muchas ganas de crecer y una mentalidad abierta para empezar a trabajar desde la identidad de la marca.',
  },
  {
    q: '¿Cuánto tiempo hasta ver resultados?',
    a: 'Los primeros resultados se empiezan a ver en torno a 20 días. Antes de 3 meses no se puede garantizar nada: el margen de error es nuestro mejor amigo.',
  },
  {
    q: '¿Qué presupuesto mínimo necesito?',
    a: 'El presupuesto mínimo necesario es de 3.200€.',
  },
  {
    q: '¿Trabajáis con exclusividad por zona?',
    a: 'Sí.',
  },
  {
    q: '¿Cuánto dura el contrato?',
    a: 'El contrato tiene una duración de 6 meses.',
  },
] as const;
