import { getCollection, type CollectionEntry } from 'astro:content';

export type Articulo = CollectionEntry<'blog'>;

/** Todos los artículos, el más reciente primero. */
export async function articulos(): Promise<Articulo[]> {
  const todos = await getCollection('blog');
  return todos.sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf(),
  );
}

/* Las fechas del frontmatter llegan como medianoche UTC. Formateadas en la
   zona local de la máquina que compila, en América saldrían un día antes. */
export const fecha = (d: Date) =>
  d.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });

export const isoDia = (d: Date) => d.toISOString().slice(0, 10);

/** Minutos de lectura a 200 palabras por minuto, nunca menos de uno. */
export function minutos(texto = ''): number {
  const palabras = texto.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(palabras / 200));
}
