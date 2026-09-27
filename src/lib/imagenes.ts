import { existsSync } from 'node:fs';

/* srcset con las versiones reducidas que existan en public/
   (<nombre>-<ancho>.webp, generadas con sharp) más la original. Si no hay
   ninguna, devuelve undefined y la imagen se queda con su src de siempre:
   una foto nueva sin versiones reducidas no rompe nada. */
export function srcsetDe(src: string, ancho: number, reducidas: number[]): string | undefined {
  const candidatas = reducidas
    .map((w) => [src.replace(/\.webp$/, `-${w}.webp`), w] as const)
    .filter(([ruta]) => existsSync(`public${ruta}`));
  if (candidatas.length === 0) return undefined;
  return [...candidatas.map(([ruta, w]) => `${ruta} ${w}w`), `${src} ${ancho}w`].join(', ');
}
