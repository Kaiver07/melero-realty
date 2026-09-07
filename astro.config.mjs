import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  // Con www porque es lo que sirve Vercel: el dominio desnudo devuelve un
  // 308 hacia aquí. De este valor sale el sitemap, así que con el anterior
  // le estábamos dando a Google una lista de URLs que redirigen todas.
  site: 'https://www.valeriamelero.com',
  output: 'static',
  integrations: [sitemap(), react()],
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
