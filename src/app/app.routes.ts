import { Routes } from '@angular/router';
import { SSRComponent } from './ssr.component';
import { CSRComponent } from './csr.component';
import { SSGComponent } from './ssg.component';

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
