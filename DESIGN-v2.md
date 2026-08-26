# Brief de rediseño v2 — Melero Realty

El primer intento (sistema "Modernist": Archivo, mono mayúsculas, cero
radius, reglas de 2px, fotografía en blanco y negro) fue rechazado por la
clienta (Valeria Melero, CEO) al verlo en producción. Su reacción literal:
*"No me gusta nada la estética. Es como entrar a Claude."* — es decir, se
lee como una herramienta técnica o de IA, no como una marca inmobiliaria.
Esto es un brief nuevo, más específico en lo que NO funcionó.

## Lo que se mantiene

- **Contenido y estructura**: sigue todo válido, ver `DESIGN.md` (11
  secciones, copy de `src/config/site.ts`). No reescribir texto.
- **El acento dorado real** extraído del logo (`#b5893c` / rango `#c9a86a`
  aprox.) — eso sí funcionaba, el problema no es el color de marca en sí.
- **El logo** (`public/favicon.png`, la "M" dorada) sigue siendo el activo
  de marca real a integrar.

## Por qué falló Modernist — sé explícito con esto en Claude Design

- **Monocromo + fotografía solo en blanco y negro** = frío, técnico. Un
  negocio inmobiliario premium vende un estilo de vida aspiracional — el
  color en la fotografía (interiores, skyline al atardecer, texturas
  cálidas) importa mucho más aquí que en un sistema de diseño genérico.
- **Cero radius + reglas de 2px por todas partes** = estética de
  herramienta de desarrollador / dashboard técnico, no de marca de lujo.
- **Tipografía en mayúsculas a tamaño póster + un solo peso de acento** =
  se lee como landing de producto SaaS, no como agencia inmobiliaria.
- En general: el sistema priorizó "distintivo/arquitectónico" sobre
  "cálido/de confianza", y para este negocio concreto (venderle a dueños de
  agencias inmobiliarias que ya facturan) la confianza y la calidez pesan
  más que la originalidad estructural.

## Dirección para el intento 2

**Premium inmobiliario cálido, no minimalismo técnico.** Referencias de
mundo válidas ahora: webs de agencias inmobiliarias de lujo reales
(Sotheby's International Realty, Compass, agencias boutique de Miami/
Madrid), no fintech ni estudios de arquitectura. Debe sentirse humano y de
confianza, no una interfaz.

Pedir explícitamente a Claude Design:
- **Color, no monocromo**: recuperar algo cercano a la paleta original
  (navy/verde azulado oscuro `#002329` + dorado), o proponer una nueva,
  pero con más de un tono con peso visual — no "gris casi blanco + un solo
  acento" como Modernist.
  - Actualización 26/8/2026 tras feedback de Valeria: prueba un
    **verde-azulado oscuro cálido (no negro puro) + dorado real**, evitando
    el look "casi monocromo" tanto de Modernist como del sistema anterior.
- **Fotografía en color**, no blanco y negro forzado — interiores,
  exteriores, skyline con luz cálida.
- **Esquinas con algo de suavidad** — no hace falta redondeado excesivo,
  pero el "cero radius total" es lo que más lee como "interfaz técnica".
- **Tipografía con más calidez** — Archivo en mayúsculas grandes fue parte
  del problema; probar algo con más peso editorial/humano, o Archivo pero
  con tratamiento distinto (minúsculas, tamaños menos extremos).
- Mantener limpio y actual, pero el objetivo es que **al verlo, Valeria
  piense "esto es mi marca"**, no "esto parece una landing de una startup
  de IA".

## Proceso

1. Construir un segundo sistema en claude.ai/design (nuevo proyecto o
   nueva iteración), pidiendo explícitamente que se aleje de "Modernist".
2. Antes de integrarlo en código, **enseñar una captura a Valeria primero**
   dentro de Claude Design — no repetir el error de desplegarlo a
   producción sin que la clienta lo vea antes.
3. Cuando dé el visto bueno, avisar para portarlo a Astro.

## Nota técnica aparte (no depende de la estética)

El intento 1 tiene además un bug de scroll reportado por Valeria ("se
queda cogido cuando quiero subir o bajar") que hay que investigar y
arreglar independientemente de qué dirección visual se elija — sospecha
principal: estilos inline mezclados con clases Tailwind de forma
inconsistente en `index.astro`. Pendiente de reproducir (falta saber
dispositivo/navegador de Valeria).
