# Brief de rediseño — Melero Realty

Brief para pegar en claude.ai/design. Objetivo: un rediseño visual innovador
de la landing actual, manteniendo el contenido y la estructura de secciones
(están validados), pero elevando la ejecución visual a algo más distintivo
y premium.

## El negocio

Melero Realty genera leads cualificados para agencias y asesores
inmobiliarios en España y EEUU, sin depender de portales (Idealista, etc.)
ni referidos. Vende un sistema propio de captación (paid ads, embudos,
posicionamiento de marca), no gestión inmobiliaria.

- **Audiencia**: dueños/gerentes de agencias inmobiliarias y asesores
  independientes que ya facturan, no gente empezando de cero.
- **Tono de marca**: directo, sin rodeos, con datos por delante de promesas.
  Frases del propio copy que lo resumen: *"Sin portales. Sin referidos.
  Sin curiosos."*, *"Hablamos de números, no de followers."*
- **Precio de entrada**: 3.200€ mínimo, contrato de 6 meses — es una oferta
  premium/B2B, no un producto de consumo masivo. El diseño debe transmitir
  eso: serio, seguro, no "agencia de marketing genérica".

## Lo que NO cambiar (contenido validado)

El texto y la estructura de secciones ya están escritos y aprobados —
`src/config/site.ts` es la fuente de verdad. El rediseño es sobre
**tratamiento visual**, no sobre reescribir copy. Secciones, en orden:

1. Hero — foto de villa de fondo, titular + CTA
2. Declaración de marca (una frase corta, centrada)
3. Servicios (6 tarjetas: Paid Ads, Embudo, Generación de Leads,
   Posicionamiento, Contenido, Estrategia)
4. Prueba social — 3 métricas grandes (98% retención, +40 agencias, +300% ROI)
5. Proceso — 5 pasos numerados (Diagnóstico → Escalado)
6. "Por qué Melero Realty" — vídeo de YouTube embebido + 2 badges flotantes
7. Tabla comparativa — "Otras agencias" vs "Melero Realty" (5 puntos)
8. Testimonios — 3 tarjetas con cita + nombre + cargo
9. Equipo — 3 fotos (Valeria Melero CEO, Yerai Jiménez Marketing,
   Carlos Bernabé Comercial)
10. FAQ — acordeón, 6 preguntas
11. CTA final — bloque oscuro con headline + botón

## Marca actual (punto de partida, no obligación de mantener)

```
--c-dark:   #002329   (verde azulado muy oscuro, casi negro — fondo principal)
--c-accent: #80d253   (verde lima — CTAs, acentos)
--c-bg:     #ffffff
--c-bg-lt:  #f5f5f5
--c-muted:  #5c6b6d
```

Fuente: **Satoshi** (geométrica, moderna).

⚠️ Nota para quien rediseñe: las variables se llaman `--c-gold` /
`--c-gold-lt` mapeadas a valores **verde lima**, no dorado — es un desajuste
heredado de una versión anterior donde el acento sí era dorado. Es libre
decidir si el rediseño recupera un dorado real (más "inmobiliario de lujo")
o se queda con el verde y le cambia el nombre a las variables — pero no
dejar el nombre mintiendo sobre el color.

## Qué pedir a Claude Design

Dirección: **premium B2B inmobiliario, no genérico de agencia de marketing**.
Evitar: gradientes morado-azul, `rounded-lg` en todo, tarjetas con barra de
acento lateral, iconos de emoji como los que hay ahora en badges (✨ 📊) —
sustituir por iconografía propia. Referencias de mundo válidas: fintech de
gama alta, estudios de arquitectura, fondos de inversión inmobiliaria —
sitios que venden confianza y cifras, no sitios de "agencia creativa".

Pedir explícitamente:
- Sistema tipográfico con jerarquía clara (la fuente Satoshi ya está bien,
  mantenerla o proponer alternativa igual de seria)
- Paleta definitiva: o dorado real, o el verde actual pero con un nombre de
  variable correcto — decidir una sola dirección de color de acento
- Tratamiento del hero (la foto de villa actual es genérica — proponer algo
  con más carácter: skyline, datos superpuestos, o composición editorial)
- Cómo se ven las 6 tarjetas de servicios, la tabla comparativa y las 3
  tarjetas de equipo — son los tres patrones de tarjeta que más se repiten
  y donde más se nota si el diseño es genérico o no
- Estados hover/focus de los CTA (`btn-gold`, `btn-outline`)

## Entrega

Astro + Tailwind v4 (`@tailwindcss/vite`, sin `tailwind.config` — tokens via
`@theme`/CSS vars en `src/styles/global.css`). El sync de vuelta a este repo
lo hago yo con `DesignSync` en cuanto haya un resultado en claude.ai/design.
