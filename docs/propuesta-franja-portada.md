# Propuesta para Valeria: la prueba, justo debajo del botón de la portada

Mejora 1 del estudio comparativo (`docs/benchmark-webs-marketing-inmobiliario.md`).
Es una propuesta: no se toca la web hasta que Valeria elija texto.
Redactada el 27/9/2026.

## Qué hay hoy

Debajo del botón «Reservar diagnóstico» de la portada sólo pone:

> **45 minutos** de videollamada con Valeria. Sin coste y sin compromiso.
> O cuéntanoslo por escrito

La única prueba real de la web, el caso de ARC, está en la quinta sección
(«No fue rápido. Funcionó.»). Quien no baja hasta ahí no la ve, y lo que
frena al cliente es precisamente la desconfianza. Varias de las agencias del
estudio enseñan su prueba en la primera pantalla.

## Qué se propone

Una franja pequeña justo debajo de esa línea, con dos cosas que **ya están
publicadas y aprobadas** en la web. No se añade ningún dato nuevo:

1. **El caso de ARC**: logotipo, nombre, sector y cifra, con enlace a la
   sección del caso. Sale de `CASO`, en `src/config/site.ts`.
2. **La condición de los 20 días**. Sale de «El trato» y de la FAQ.

## Textos: elegir uno de cada bloque

### El caso

- **A (recomendada):** [logo ARC] ARC Proyectos Renovables, constructora de
  Valencia: **+30 % de facturación**. Ver el caso →
- **B (más corta, pensando en el móvil):** [logo ARC] **+30 % de
  facturación** · ARC, constructora, Valencia · Ver el caso →
- **C (sin cifra):** [logo ARC] Caso real: ARC Proyectos Renovables,
  Valencia. Ver el caso →

### La condición de los 20 días

Hoy la web la cuenta de dos maneras, las dos aprobadas:

- «El trato»: «Los primeros 20 días de campaña **los pagamos nosotros**.»
- La FAQ: «Los primeros 20 días de campaña los cubrimos nosotros,
  **incluidos en los honorarios**…»

Opciones para la franja:

- **A:** «Los primeros 20 días de campaña los pagamos nosotros.» (el texto
  de «El trato», tal cual)
- **B (recomendada):** «Los primeros 20 días de campaña van incluidos en los
  honorarios.» (lo que dice la FAQ; no se puede leer como «gratis»)
- **C:** no ponerla arriba; ya está en «El trato» y en la FAQ.

**Recomendación: caso A y condición B.**

## Cómo se vería

- **Escritorio:** una línea bajo la nota de los 45 minutos. El logo de ARC
  va en su píldora clara, la misma forma que tiene en la sección del caso
  (es una de las excepciones permitidas a las esquinas redondeadas). El
  texto, en blanco y gris claro sobre la plancha oscura.
- **Móvil:** dos líneas, el caso arriba y la condición debajo.

## Lo que la franja no dice, a propósito

- **No dice a qué se debe el +30 %.** `PRODUCT.md` dice que el testimonio de
  ARC habla de Valeria como mentora, es decir, que prueba el acompañamiento.
  El caso de la web habla de «primero el mensaje, después el sistema
  completo». La franja no atribuye la causa: el caso completo está a un
  clic.
- **No lo llama garantía ni promete «más clientes»** (reglas de copy de
  `PRODUCT.md`).
- **Dice «constructora»**: ARC no es una inmobiliaria, y la web dice
  trabajar sólo con inmobiliarias.
- **Cumple la regla de las cifras** (nombre, empresa, enlace y permiso): la
  cifra va con la empresa y enlaza al caso, donde están el nombre de Lina
  Marcela y la web de ARC. ARC dio permiso el 7/9/2026.

## Preguntas para Valeria

1. ¿Poner el caso de ARC arriba? ¿Con qué texto: A, B o C?
2. ¿Poner la condición de los 20 días? ¿Con «los pagamos nosotros» o con
   «incluidos en los honorarios»? Si es la segunda, ¿cambiamos también «El
   trato» para que las dos digan lo mismo?
3. ¿A qué atribuye el +30 % de ARC: al acompañamiento, al sistema de
   captación o a las dos cosas? No hace falta para esta franja, pero sí para
   contar el caso en el blog o en otros sitios.

## Después de aprobar

Unas 2-3 horas: la franja en la portada, sus estilos y la comprobación en
móvil y escritorio. El texto irá en `src/config/site.ts`, como pide
`CLAUDE.md`.
