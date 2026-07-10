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
  // web3forms access key — get yours free at web3forms.com
  web3formsKey: 'TU_ACCESS_KEY_AQUI',
  // YouTube video ID for the "Por qué Melero Realty" section
  youtubeId: 'TU_VIDEO_ID_AQUI',
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
    icon: '📢',
    title: 'Paid Ads Inmobiliario',
    desc: 'Campañas en Meta y Google diseñadas para captar propietarios y compradores cualificados. Sin presupuesto tirado.',
  },
  {
    icon: '🔀',
    title: 'Embudo de Captación',
    desc: 'Diseñamos el recorrido completo: desde el primer clic hasta la llamada agendada. Sin fricción.',
  },
  {
    icon: '💼',
    title: 'Business Solutions',
    // Pendiente de definir por el equipo — contenido por añadir
    desc: '',
  },
  {
    icon: '🎯',
    title: 'Generación de Leads',
    desc: 'Leads exclusivos para tu agencia. No compartidos, no comprados a terceros. Tuyos.',
  },
  {
    icon: '🏆',
    title: 'Posicionamiento de Marca',
    desc: 'Construimos la presencia digital que hace que los clientes elijan tu agencia antes de llamar a la competencia.',
  },
  {
    icon: '✍️',
    title: 'Contenido Estratégico',
    desc: 'Contenido que posiciona, educa y filtra. No publicaciones para rellenar el feed.',
  },
  {
    icon: '🗺️',
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
  { name: 'Valeria Melero', role: 'CEO & Founder', initials: 'VM' },
  { name: 'Yerai Jiménez', role: 'Marketing & Comunicación', initials: 'YJ' },
  { name: 'Carlos Cortés', role: 'Customer Success & Operativa', initials: 'CC' },
  { name: 'Carlos Bernabé', role: 'Director Comercial & Co-Founder', initials: 'CB' },
] as const;

export const FAQ = [
  {
    q: '¿Trabajáis con cualquier tipo de agencia?',
    // Pendiente de respuesta real
    a: '',
  },
  {
    q: '¿Qué necesito para empezar?',
    a: '',
  },
  {
    q: '¿Cuánto tiempo hasta ver resultados?',
    a: '',
  },
  {
    q: '¿Qué presupuesto mínimo necesito?',
    a: '',
  },
  {
    q: '¿Trabajáis con exclusividad por zona?',
    a: '',
  },
  {
    q: '¿Cuánto dura el contrato?',
    a: '',
  },
] as const;
