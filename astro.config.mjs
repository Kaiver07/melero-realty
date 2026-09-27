import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import { fileURLToPath } from 'node:url';
import { readdirSync, readFileSync } from 'node:fs';

/* lastmod del sitemap sólo donde la fecha es cierta: cada artículo del blog
   (updatedDate o, si no hay, publishDate, leídas de su frontmatter) y la
   portada del blog (la del artículo más reciente). Google sólo usa lastmod
   si es fiable, y con la fecha del build en todas dejaría de serlo. */
const fechasBlog = Object.fromEntries(
  readdirSync('./src/content/blog')
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const fm =
        readFileSync(`./src/content/blog/${f}`, 'utf8').match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '';
      const fecha = (fm.match(/^updatedDate:\s*(\S+)/m) ?? fm.match(/^publishDate:\s*(\S+)/m))?.[1];
      return [f.replace(/\.md$/, ''), fecha];
    })
    .filter(([, fecha]) => fecha),
);
const ultimaDelBlog = Object.values(fechasBlog).sort().at(-1);

export default defineConfig({
  // Con www porque es lo que sirve Vercel: el dominio desnudo devuelve un
  // 308 hacia aquí. De este valor sale el sitemap, así que con el anterior
  // le estábamos dando a Google una lista de URLs que redirigen todas.
  site: 'https://www.valeriamelero.com',
  output: 'static',
  // inlineStylesheets: 'always' se probó el 27/9/2026 y no compensa: con el
  // HTML más pesado la home tardaba más (LCP 2,25 s frente a 2,16 s) y se
  // pierde la caché del CSS entre páginas. Se queda el valor por defecto.
  integrations: [
    sitemap({
      // La 404 no es una página que Google tenga que visitar.
      filter: (pagina) => !pagina.includes('/404'),
      serialize(item) {
        const slug = item.url.match(/\/blog\/([^/]+)\/$/)?.[1];
        const fecha = slug ? fechasBlog[slug] : item.url.endsWith('/blog/') ? ultimaDelBlog : undefined;
        if (fecha) item.lastmod = new Date(fecha).toISOString();
        return item;
      },
    }),
    react(),
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      // Los componentes de 21st.dev y shadcn importan con '@/...'. TypeScript
      // lo resuelve por tsconfig, pero el empaquetado necesita saberlo aquí.
      // fileURLToPath y no URL.pathname: en Windows este último devuelve
      // rutas tipo /C:/... con los espacios codificados como %20.
      alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
    },
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
});
