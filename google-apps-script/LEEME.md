# Script del formulario de diagnóstico

`Codigo.gs` es el programa de Google (Apps Script) que recibe cada envío del
formulario de `/contacto` y:

1. lo apunta como una fila en la pestaña **Leads** de una hoja de cálculo;
2. manda un correo de aviso a **melero.realty@gmail.com** con los datos del
   lead. Al responder a ese correo, la respuesta le llega al lead.

Si la fila no se pudiera escribir, el aviso sale igual, marcado como «SIN
guardar», para que el lead no se pierda.

El script y la hoja viven en la cuenta de Google de quien los crea; aquí
sólo se guarda el código para no perderlo. Si se cambia el código en
Google, hay que copiarlo también aquí.

## Ponerlo en marcha (una sola vez)

1. **Crear la hoja.** En Google Drive, con tu cuenta: Nuevo → Hojas de
   cálculo de Google. Ponle un nombre, por ejemplo «Leads Melero Realty».
   En Archivo → Configuración, comprueba que la zona horaria es
   «(GMT+01:00) Madrid».
2. **Abrir el editor.** En la hoja: Extensiones → Apps Script.
3. **Pegar el código.** Borra lo que haya en `Código.gs` y pega entero el
   contenido de `Codigo.gs`. Guarda (icono del disquete).
4. **Preparar la hoja.** Arriba, en el desplegable de funciones, elige
   `preparar` y pulsa Ejecutar. Google pedirá permiso para usar tus hojas y
   enviar correos en tu nombre. Como el script es tuyo y no está
   «verificado», saldrá un aviso: pulsa Configuración avanzada → Ir a … (no
   seguro) → Permitir. Al terminar, la hoja tendrá la pestaña **Leads** con
   sus títulos.
5. **Probar (opcional, recomendado).** Elige `probar` y pulsa Ejecutar.
   Debe aparecer una fila de prueba en **Leads** y llegar un correo de
   aviso a melero.realty@gmail.com. Después, borra esa fila.
6. **Publicar.** Implementar → Nueva implementación → en el engranaje,
   «Aplicación web». Descripción: «Formulario web». Ejecutar como: **Yo**.
   Quién tiene acceso: **Cualquier usuario**. Implementar.
7. **Copiar la URL** de la aplicación web (termina en `/exec`) y pasársela a
   quien lleve la web: va en `SITE.sheetsWebAppUrl`, en
   `src/config/site.ts`.

## Si más adelante se cambia el código

Implementar → Gestionar implementaciones → lápiz → Versión: **Nueva
versión** → Implementar. Así la URL no cambia y la web no hay que tocarla.
Si en cambio se hace una implementación nueva, la URL cambia y hay que
actualizar `site.ts`.

## Límites

- Una cuenta de Gmail gratuita puede enviar unos 100 correos de aviso al
  día con este sistema; de sobra para los leads del formulario.
- Si se añade o se renombra un campo del formulario, hay que añadirlo en
  `COLUMNAS`, al principio de `Codigo.gs`, y actualizar la versión.
