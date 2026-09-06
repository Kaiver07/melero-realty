# Componentes de interfaz (React)

Carpeta preparada para pegar componentes de **21st.dev**, **shadcn/ui** y
similares. El proyecto ya tiene lo que dan por supuesto:

- `@astrojs/react` con React 19
- alias `@/*` → `src/*` (resuelto en `tsconfig.json` y en `astro.config.mjs`;
  en Windows hace falta `fileURLToPath`, no `URL.pathname`)
- `cn()` en `src/lib/utils.ts`
- `clsx`, `tailwind-merge`, `class-variance-authority`, `lucide-react`
- Tailwind v4

## Cómo montar uno

1. Pega el `.tsx` tal cual en esta carpeta.
2. En la página Astro: `import { Componente } from '@/components/ui/componente'`
3. Móntalo con directiva de cliente: `<Componente client:visible />`
   - `client:visible` carga el JavaScript solo cuando entra en pantalla.
   - `client:load` lo carga de inmediato: reservado para lo que esté
     en el primer pantallazo.

## Lo que hay que revisar SIEMPRE antes de darlo por bueno

- **Coste:** cualquier página con una isla React carga ~60 KB comprimidos.
  Las páginas sin islas siguen a cero. Verificado: la home no trae React.
- **Colores:** estos componentes suelen venir con su propio sistema de
  tokens (`--hu-*`, `--background`…) y con azules o morados por defecto.
  Hay que mapearlos a la paleta de marca: `--ink`, `--teal`, `--text`.
  Pegar su CSS tal cual pisa la identidad.
- **Radios y sombras:** casi todos traen `rounded-2xl` y sombras difusas.
  El sistema de este sitio es radio 0 y sin sombras. Hay que adaptarlos o
  desentonan.
- **Imágenes:** vienen con URLs de ejemplo de sus CDN. Sustituir por las
  de `public/images/`.
