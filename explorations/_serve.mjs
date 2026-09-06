// Servidor estático mínimo para revisar las variantes de diseño.
// Solo para previsualización local; no forma parte del sitio.
import { createServer } from 'node:http';
import { readFile, readdir } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('.', import.meta.url));
const PORT = 4700;

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
};

createServer(async (req, res) => {
  const url = decodeURIComponent(req.url.split('?')[0]);
  const rel = normalize(url === '/' ? '/index.html' : url).replace(/^([/\\])+/, '');
  const path = join(ROOT, rel);

  if (!path.startsWith(ROOT)) {
    res.writeHead(403).end('Forbidden');
    return;
  }

  try {
    const body = await readFile(path);
    res.writeHead(200, { 'content-type': TYPES[extname(path)] ?? 'application/octet-stream' });
    res.end(body);
  } catch {
    const files = (await readdir(ROOT)).filter((f) => f.endsWith('.html'));
    res.writeHead(404, { 'content-type': 'text/html; charset=utf-8' });
    res.end(
      `<meta charset="utf-8"><h1>404</h1><ul>${files
        .map((f) => `<li><a href="/${f}">${f}</a></li>`)
        .join('')}</ul>`,
    );
  }
}).listen(PORT, () => console.log(`explorations → http://localhost:${PORT}`));
