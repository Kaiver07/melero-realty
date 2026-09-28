/**
 * Formulario de diagnóstico de valeriamelero.com
 * → una fila en esta hoja de cálculo + un correo de aviso por cada lead.
 *
 * Cada envío del formulario de /contacto:
 *   1. se apunta como una fila en la pestaña «Leads» de esta hoja;
 *   2. manda un correo a AVISO_A con los datos del lead. Al responder a ese
 *      correo, la respuesta le llega directamente al lead.
 *
 * Si la fila no se pudiera escribir, el correo sale igual, marcado como
 * «SIN guardar», para que el lead no se pierda.
 *
 * Puesta en marcha: google-apps-script/LEEME.md, en el repositorio de la web.
 */

// ---------- Configuración ----------
const AVISO_A = 'melero.realty@gmail.com'; // quién recibe el aviso de cada lead
const NOMBRE_HOJA = 'Leads';               // pestaña donde se apuntan
const ZONA_HORARIA = 'Europe/Madrid';

// Columnas, en orden: [nombre del campo en la web, título de la columna].
// Si se añade o se renombra un campo del formulario, se cambia aquí también.
const COLUMNAS = [
  ['nombre', 'Nombre'],
  ['email', 'Correo electrónico'],
  ['telefono', 'Teléfono / WhatsApp'],
  ['instagram_web', 'Instagram o web'],
  ['rol', 'Rol'],
  ['zona', 'Zona'],
  ['tipo_propiedades', 'Tipo de propiedades'],
  ['captacion_actual', 'Cómo capta hoy'],
  ['publicidad', '¿Invierte en publicidad?'],
  ['leads_mes', 'Leads al mes'],
  ['conversion', 'Conversión a cliente'],
  ['facturacion', 'Facturación mensual'],
  ['objetivo_6m', 'Objetivo a 6 meses'],
  ['bloqueo', 'Mayor bloqueo'],
  ['intentado', 'Qué ha probado sin éxito'],
  ['prioridad', 'Prioridad'],
  ['decisor', '¿Decide solo/a?'],
  ['capital', 'Capital disponible'],
  ['por_que_ahora', '¿Por qué ahora?'],
  ['consentimiento', 'Consentimiento'],
];

// ---------- Lo que llama la web ----------

/** Cada envío del formulario llega aquí. */
function doPost(e) {
  const recibido = new Date();
  const datos = leerDatos_(e);
  let guardado = false;
  let error = '';

  // Un cerrojo para que dos envíos a la vez no pisen la misma fila.
  const cerrojo = LockService.getScriptLock();
  try {
    cerrojo.waitLock(20000);
    const fila = [recibido].concat(COLUMNAS.map(([campo]) => limpiar_(datos[campo])));
    hoja_().appendRow(fila);
    guardado = true;
  } catch (err) {
    error = String(err);
    console.error('No se pudo apuntar el lead en la hoja: ' + error);
  } finally {
    try { cerrojo.releaseLock(); } catch (_) { /* no había cerrojo */ }
  }

  try {
    avisar_(datos, recibido, guardado, error);
  } catch (err) {
    console.error('No se pudo mandar el aviso por correo: ' + err);
  }

  // La web sólo da el envío por bueno si recibe result: 'ok'. Si no, le pide
  // a la persona que lo intente de nuevo.
  return json_(guardado ? { result: 'ok' } : { result: 'error' });
}

/** Para comprobar desde fuera que el script está publicado. */
function doGet() {
  return json_({ result: 'ok', servicio: 'formulario de diagnóstico de Melero Realty' });
}

// ---------- Para ejecutar a mano desde el editor ----------

/**
 * Crea la pestaña «Leads» con sus títulos y pide los permisos de hoja y de
 * correo. Se ejecuta una vez, antes de publicar.
 */
function preparar() {
  const libro = SpreadsheetApp.getActiveSpreadsheet();
  const hoja = libro.getSheetByName(NOMBRE_HOJA) || libro.insertSheet(NOMBRE_HOJA);
  const titulos = ['Recibido'].concat(COLUMNAS.map(([, titulo]) => titulo));
  hoja.getRange(1, 1, 1, titulos.length)
    .setValues([titulos])
    .setFontWeight('bold')
    .setFontColor('#ffffff')
    .setBackground('#122f35')
    .setVerticalAlignment('middle');
  hoja.setFrozenRows(1);
  hoja.setRowHeight(1, 32);
  hoja.getRange('A:A').setNumberFormat('dd/mm/yyyy hh:mm');
  hoja.setColumnWidth(1, 130);
  hoja.setColumnWidths(2, titulos.length - 1, 190);
  // Toca el correo ahora para que Google pida ese permiso al ejecutar esto
  // a mano, y no se quede esperando con el primer lead de verdad.
  console.log('Hoja lista. Correos de aviso disponibles hoy: ' + MailApp.getRemainingDailyQuota());
  return hoja;
}

/**
 * Simula un envío: escribe una fila de prueba y manda un aviso de prueba.
 * Después, borra esa fila de la hoja.
 */
function probar() {
  const ejemplo = {};
  COLUMNAS.forEach(([campo, titulo]) => { ejemplo[campo] = ['PRUEBA (borrar) · ' + titulo]; });
  ejemplo.email = [AVISO_A];
  ejemplo.telefono = ['+34 600 000 000'];
  ejemplo.tipo_propiedades = ['Pisos', 'Chalets'];
  const respuesta = doPost({ parameters: ejemplo });
  console.log('Respuesta que recibiría la web: ' + respuesta.getContent());
}

// ---------- Piezas internas ----------

function hoja_() {
  return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(NOMBRE_HOJA) || preparar();
}

/** Los campos del formulario. Las casillas que comparten nombre (tipo de
 *  propiedades) llegan como varios valores: se juntan con comas. */
function leerDatos_(e) {
  const varios = (e && e.parameters) || {};
  const datos = {};
  Object.keys(varios).forEach((campo) => {
    datos[campo] = [].concat(varios[campo]).map(String).join(', ');
  });
  return datos;
}

/** Un valor que empieza por =, +, - o @ lo tomaría Sheets por una fórmula
 *  (un teléfono «+34…», por ejemplo): se le antepone una comilla. */
function limpiar_(valor) {
  const texto = String(valor == null ? '' : valor).trim();
  return /^[=+\-@]/.test(texto) ? "'" + texto : texto;
}

function avisar_(datos, recibido, guardado, error) {
  const nombre = datos.nombre || 'sin nombre';
  const asunto = (guardado ? 'Nuevo lead en la web: ' : '⚠ Lead SIN guardar en la hoja: ') +
    nombre + (datos.zona ? ' · ' + datos.zona : '');
  const cuando = Utilities.formatDate(recibido, ZONA_HORARIA, "dd/MM/yyyy 'a las' HH:mm");
  const enlaceHoja = SpreadsheetApp.getActiveSpreadsheet().getUrl();
  const respuestas = COLUMNAS.map(([campo, titulo]) => [titulo, datos[campo] || '—']);

  const texto = [
    guardado ? 'Ha llegado un lead nuevo desde el formulario de la web.'
             : 'Ha llegado un lead, pero NO se ha podido apuntar en la hoja: aquí van sus datos. Error: ' + error,
    'Recibido: ' + cuando,
    '',
  ].concat(respuestas.map(([titulo, valor]) => titulo + ': ' + valor))
   .concat(['', 'Hoja de leads: ' + enlaceHoja, 'Para contestarle, responde a este correo.'])
   .join('\n');

  const filasHtml = respuestas.map(([titulo, valor]) =>
    '<tr>' +
      '<td style="padding:8px 12px 8px 0;border-top:1px solid #dee2e3;color:#54696e;font-size:13px;vertical-align:top;width:40%">' + escapar_(titulo) + '</td>' +
      '<td style="padding:8px 0;border-top:1px solid #dee2e3;color:#000;font-size:14px;vertical-align:top">' + escapar_(valor).replace(/\n/g, '<br>') + '</td>' +
    '</tr>').join('');

  const contacto = [
    esCorreo_(datos.email) ? '<a href="mailto:' + escapar_(datos.email) + '" style="color:#24767b">' + escapar_(datos.email) + '</a>' : '',
    datos.telefono ? '<a href="tel:' + escapar_(datos.telefono.replace(/[^\d+]/g, '')) + '" style="color:#24767b">' + escapar_(datos.telefono) + '</a>' : '',
  ].filter(Boolean).join(' · ');

  const html =
    '<div style="font-family:Arial,Helvetica,sans-serif;max-width:640px;margin:0 auto;color:#000">' +
      '<div style="background:#122f35;color:#fff;padding:20px 24px">' +
        '<div style="font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#bdc5c6">Melero Realty · formulario de la web</div>' +
        '<div style="font-size:22px;font-weight:bold;margin-top:8px">' + (guardado ? 'Nuevo lead' : '⚠ Lead SIN guardar en la hoja') + ': ' + escapar_(nombre) + '</div>' +
        '<div style="font-size:13px;color:#bdc5c6;margin-top:6px">' + escapar_(cuando) + (contacto ? ' · ' : '') + '</div>' +
        (contacto ? '<div style="font-size:14px;margin-top:6px">' + contacto.replace(/#24767b/g, '#ffffff') + '</div>' : '') +
      '</div>' +
      (guardado ? '' : '<div style="background:#fff3cd;padding:12px 24px;font-size:13px">No se pudo escribir en la hoja (' + escapar_(error) + '). Los datos del lead están aquí abajo.</div>') +
      '<div style="padding:8px 24px 4px"><table style="width:100%;border-collapse:collapse">' + filasHtml + '</table></div>' +
      '<div style="padding:16px 24px 24px">' +
        '<a href="' + enlaceHoja + '" style="display:inline-block;background:#24767b;color:#fff;text-decoration:none;padding:12px 18px;font-size:13px;font-weight:bold">Abrir la hoja de leads</a>' +
        '<p style="font-size:12px;color:#54696e;margin:14px 0 0">Para contestarle, responde a este correo: le llega directamente.</p>' +
      '</div>' +
    '</div>';

  const opciones = { to: AVISO_A, subject: asunto, body: texto, htmlBody: html, name: 'Web de Melero Realty' };
  if (esCorreo_(datos.email)) opciones.replyTo = datos.email;
  MailApp.sendEmail(opciones);
}

function esCorreo_(valor) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(valor || '').trim());
}

function escapar_(valor) {
  return String(valor)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function json_(objeto) {
  return ContentService.createTextOutput(JSON.stringify(objeto)).setMimeType(ContentService.MimeType.JSON);
}
