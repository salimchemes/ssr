// app.routes.server.ts
import { RenderMode, ServerRoute } from '@angular/ssr';
export const serverRoutes: ServerRoute[] = [
  {
    path: 'ssr',
    renderMode: RenderMode.Client,
  },
  {
    path: 'csr', 
    renderMode: RenderMode.Client,
  },
  {
    path: 'ssg',
    renderMode: RenderMode.Client,
  },
  {
    path: '**', // All other routes will be rendered on the server (SSR)
    renderMode: RenderMode.Client,
  },
];