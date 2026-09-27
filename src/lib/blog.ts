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

/* Fecha ISO con hora y zona horaria, como pide Google para Article. El
   frontmatter sólo trae el día: se toma la medianoche de Madrid, con el
   desfase que tenga ese día (+01:00 en invierno, +02:00 en verano). */
export function isoMadrid(d: Date): string {
  const dia = isoDia(d);
  const zona =
    new Intl.DateTimeFormat('en-US', { timeZone: 'Europe/Madrid', timeZoneName: 'longOffset' })
      .formatToParts(new Date(`${dia}T12:00:00Z`))
      .find((p) => p.type === 'timeZoneName')?.value ?? 'GMT+01:00';
  const desfase = zona === 'GMT' ? '+00:00' : zona.replace('GMT', '');
  return `${dia}T00:00:00${desfase}`;
}
/** Minutos de lectura a 200 palabras por minuto, nunca menos de uno. */
export function minutos(texto = ''): number {
  const palabras = texto.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(palabras / 200));
}
