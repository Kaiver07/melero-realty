/**
 * Descarga las miniaturas de las publicaciones de Instagram listadas en
 * SOCIAL (src/config/site.ts) y las guarda en public/images/social/.
 *
 * Se guardan en local a propósito: las URL del CDN de Instagram llevan firma
 * y caducan, así que enlazarlas directamente rompería la web en unos días.
 *
 * Uso:  node scripts/social.mjs
 */
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';

const fuente = await readFile('src/config/site.ts', 'utf8');
const urls = [...fuente.matchAll(/url:\s*'(https:\/\/www\.instagram\.com\/(?:p|reel)\/[^']+)'/g)].map(
  (m) => m[1],
);

if (!urls.length) {
  console.log('No hay publicaciones en SOCIAL. Añádelas en src/config/site.ts.');
  process.exit(0);
}

await mkdir('public/images/social', { recursive: true });

for (const url of urls) {
  const codigo = url.match(/\/(?:p|reel)\/([^/?]+)/)?.[1];
  const destino = `public/images/social/${codigo}.jpg`;
  if (existsSync(destino)) {
    console.log(`  ya estaba: ${codigo}`);
    continue;
  }
  try {
    const html = await fetch(url, { headers: { 'user-agent': UA } }).then((r) => r.text());
    const img = html.match(/<meta property="og:image" content="([^"]+)"/)?.[1];
    if (!img) throw new Error('sin og:image; puede que la publicación sea privada');
    const bin = Buffer.from(await fetch(img, { headers: { 'user-agent': UA } }).then((r) => r.arrayBuffer()));
    await writeFile(destino, bin);
    console.log(`  descargada: ${codigo}  (${Math.round(bin.length / 1024)} KB)`);
  } catch (e) {
    console.log(`  FALLÓ ${codigo}: ${e.message}`);
  }
}
console.log('\nListo. Conviértelas a WebP antes de publicar.');
