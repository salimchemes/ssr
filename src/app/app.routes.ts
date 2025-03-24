import { Routes } from '@angular/router';
import { SSRComponent } from './components/ssr/ssr.component';
import { CSRComponent } from './components/ssr/csr.component';
import { SSGComponent } from './components/ssr/ssg.component';

export const routes: Routes = [
  {
    path: 'ssr',
    component: SSRComponent,
  },
  {
    path: 'csr',
    component: CSRComponent,
  },
  {
    path: 'ssg',
    component: SSGComponent,
  },
];
