# Delta sobre BRIEF.md — ronda V4

El cliente ha elegido **V4** (`v4-contraste.html`, la dirección zerospace /
go.arch) y descartado V1, V2 y V3. De V4 salen tres versiones distintas.

Lee primero `BRIEF.md` completo: sigue vigente todo lo que dice sobre copy
real, inventario de imágenes, prohibición de testimonios/logos/métricas
falsas y requisitos técnicos. Este archivo **sobrescribe** lo que se indique
abajo y nada más.

## 1. Tipografía — cambia

**Poppins** para todo, cargada desde Google Fonts. Sustituye por completo a
la pareja tipográfica anterior. No hay serif en ninguna de las tres.

Poppins es geométrica y de caja ancha: para que no se lea genérica hay que
trabajarla, no soltarla por defecto.

- Pesos: 300/400 para texto, 600/700 para titulares. Evita 500, que es el
  peso que hace que Poppins parezca plantilla de Bootstrap.
- Titulares grandes: `letter-spacing:-0.03em` y `line-height:0.95–1.05`.
  Sin tracking negativo, Poppins a 6rem se ve blanda.
- Versalitas y eyebrows: `letter-spacing:0.16em–0.22em`, peso 500–600,
  tamaño 11–12px. Ahí sí funciona muy bien.
- Texto de lectura: 300 o 400, `line-height:1.65`, ancho máximo 62ch.
- Nunca uses Poppins 400 a 3rem para un titular: queda desinflada. Si el
  titular es grande, va en 600 o 700.

## 2. Paleta — cambia por completo

```
Principal  #0d3646   (azul petróleo oscuro)
Secundario #122f35   (verde azulado más apagado y oscuro)
Fondo      #ffffff   (blanco)
```

Fuera el verde `#132318` de la ronda anterior: no queda ni un rastro.

Cómo repartirlos, porque son dos oscuros muy próximos y mal usados se
convierten en barro:

- **Blanco** es el fondo dominante de la página. La mayor parte del scroll
  es blanco.
- **#0d3646** es la tinta del texto y el color de los elementos sólidos:
  botones, la píldora, los bloques oscuros principales.
- **#122f35** es el segundo plano oscuro: úsalo para diferenciar una banda
  contigua de otra en #0d3646, para el footer, o para el velo sobre foto.
  Como son parecidos, **nunca los pongas juntos sin un filete o un cambio
  de escala que justifique el corte** — si no, parece un error de color.
- Grises: derívalos de #0d3646 con opacidad, no metas grises neutros nuevos.

**Sin color de acento.** El cliente ha especificado tres colores y no ha
pedido el dorado. Resuelve la jerarquía con peso, escala y contraste
blanco/oscuro, no con un cuarto color. (Excepción única: la versión C, ver
abajo.)

## 3. Fotos del equipo — cambian

- **Quita el blanco y negro.** Van a color.
- Las tres tienen fondos distintos, así que en color no casan solas.
  Unifícalas con: mismo `aspect-ratio` (4/5), mismo `object-fit:cover`,
  mismo encuadre alto (`object-position:50% 25%`) y un ajuste suave
  compartido — `filter:saturate(.95) contrast(1.03)` como mucho. Nada de
  duotono ni de grayscale.
- La foto de Yerai (`img/team/yerai.jpg`) va a ser sustituida por otra
  nueva en la misma ruta. **No cambies el nombre del archivo ni la ruta.**
  Da por hecho que será un retrato frontal, fondo gris claro liso, camisa
  blanca, formato vertical.

## 4. CTA — cambia

El botón de la píldora del hero dice **«Reservar diagnóstico»**, no
«Reservar». Revisa que todos los CTA de la página usen «Reservar
diagnóstico» o «Agendar llamada», nunca un «Reservar» suelto.

Ojo: «Reservar diagnóstico» es bastante más largo que «Reservar». La
píldora del hero tiene que seguir cabiendo en una línea en escritorio y no
romperse en móvil. Ajusta el ancho de los campos si hace falta.

## 5. Lo que NO cambia

Todo lo demás de V4 se mantiene: estructura de secciones, copy real,
inventario de fotos, la píldora de filtros del hero, la palabra gigante
cruzando el hero, las tarjetas flotantes sobre la banda oscura, el equipo a
sangre sin separación, la comparativa con filetes, la FAQ en `<details>`.

## 6. Verificación — importante

**No uses el navegador ni herramientas de vista previa.** El panel es
compartido y varias sesiones se pisan las pestañas. Verifica leyendo tu
propio archivo: balance de etiquetas, que toda referencia `img/...` exista
en disco, que no quede ni una mención del verde `#132318`, que no haya
`grayscale` en las fotos de equipo, y que no aparezca ningún «Reservar»
que no sea «Reservar diagnóstico».
