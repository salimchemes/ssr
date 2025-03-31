// app.routes.server.ts
import { RenderMode, ServerRoute } from '@angular/ssr';
export const serverRoutes: ServerRoute[] = [
  {
    path: 'ssr',
    renderMode: RenderMode.Server,
  },
  {
    path: 'csr', 
    renderMode: RenderMode.Client,
  },
  {
    path: 'ssg',
    renderMode: RenderMode.Prerender,
  },
  {
    path: '**', // All other routes will be rendered on the server (SSR)
    renderMode: RenderMode.Client,
  },
];