import { Component, signal, inject } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: ` <router-outlet />
    <div class="app-container">
      <h1>{{ title() }}</h1>
      <li><a routerLink="/">Home</a></li>
      <li>
        <a routerLink="/csr">CSR</a>
      </li>
      <li>
        <a routerLink="/ssr">SSR</a>
      </li>
      <li>
        <a routerLink="/ssg">SSG</a>
      </li>
    </div>`,
  styles: [
    `
      .app-container {
        font-family: Arial, sans-serif;
        font-size: 40px;
        color: #333;
        text-align: center;
        margin-top: 20px;
      }
    `,
  ],
  imports: [RouterModule],
})
export class AppComponent {
  title = signal('Default - Client Side Rendering');
  private router = inject(Router);

  constructor() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event): void => {
      this.updateTitle(event.url);
    });
  }

  private updateTitle(url: string): void {
    if (url.includes('/csr')) {
      this.title.set('Client Side Rendering');
    } else if (url.includes('/ssg')) {
      this.title.set('Static Site Generation');
    } else if (url.includes('/ssr')) {
      this.title.set('Server Side Rendering');
    } else {
      this.title.set('Default - Client Side Rendering');
    }
  }
}
