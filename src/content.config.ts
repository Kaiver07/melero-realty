import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { existsSync } from 'node:fs';
import { SERVICES } from './config/site';

/* Los artículos sólo pueden relacionarse con servicios que existen en
   SERVICES, escritos igual que allí. Si alguien renombra un servicio en
   site.ts, el build falla aquí en vez de dejar un enlace a nada. */
const SERVICIOS = SERVICES.map((s) => s.title) as [string, ...string[]];

/* « | Melero Realty» son 16 caracteres. Con 44 de título, la pestaña y el
   resultado de Google se quedan en 60 y no se cortan. */
const MAX_TITULO_SEO = 44;

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z
    .object({
      title: z.string(),
      // Sólo si el título visible es demasiado largo para la pestaña.
      seoTitle: z.string().optional(),
      description: z.string().min(70).max(160),
      publishDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      // Ruta dentro de public/. Se comprueba que el archivo exista: una
      // imagen rota en un artículo no la ve nadie hasta que ya está publicada.
      image: z.object({
        src: z
          .string()
          .startsWith('/')
          .refine((src) => existsSync(`public${src}`), {
            message: 'La imagen no existe en public/',
          }),
        alt: z.string().min(10),
        width: z.number().int().positive(),
        height: z.number().int().positive(),
      }),
      servicios: z.array(z.enum(SERVICIOS)).default([]),
    })
    .refine((d) => (d.seoTitle ?? d.title).length <= MAX_TITULO_SEO, {
      message: `El título pasa de ${MAX_TITULO_SEO} caracteres y se cortará en Google: añade un seoTitle más corto`,
      path: ['seoTitle'],
    }),
});

export const collections = { blog };
