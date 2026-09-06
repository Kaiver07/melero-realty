import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utilidad `cn` que esperan todos los componentes de shadcn y de 21st.dev.
 * Combina clases condicionales y resuelve conflictos de Tailwind quedándose
 * con la última, que es lo que permite sobrescribir estilos desde fuera.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
