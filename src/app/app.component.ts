import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  template: ` <router-outlet />
    <div class="app-container">
      <h1>{{ title() }}</h1>
      <li><a (click)="title.set('Default is SSR')" routerLink="/">Home</a></li>
      <li>
        <a (click)="title.set('Client Side Rendering')" routerLink="/csr"
          >CSR</a
        >
      </li>
      <li>
        <a (click)="title.set('Server Side Rendering')" routerLink="/ssr"
          >SSR</a
        >
      </li>
      <li>
        <a (click)="title.set('Static Site Generation')" routerLink="/ssg"
          >SSG</a
        >
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
  title = signal('Default SSR');
}
