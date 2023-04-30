import { readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const { port = 5173 } = process.env;

async function createServer() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use('/*', async (req, res, next) => {
    const url = req.originalUrl;
    try {
      let template = await readFile(path.resolve(__dirname, 'index.html'), 'utf-8');
      template = await vite.transformIndexHtml(url, template);

      const parts = template.split('<!--ssr-outlet-->');

      const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');

      const { stream, setPreloadedState } = await render(url, {
        onShellReady() {
          res.write(parts[0]);
          stream.pipe(res);
        },
        onShellError(err: Error) {
          console.error(err);
        },
        onAllReady() {
          const withPreload = parts[1].replace('<!--preloadedState-->', setPreloadedState());

          res.write(withPreload);
          res.end();
        },
        onError(err: Error) {
          console.error(err);
        },
      });
    } catch (e) {
      if (e instanceof Error) {
        vite.ssrFixStacktrace(e);
        next(e);
      }
    }
  });

  app.listen(port, () => {
    console.log(`Hello from server http://localhost:${port}/`);
  });
}

createServer();
