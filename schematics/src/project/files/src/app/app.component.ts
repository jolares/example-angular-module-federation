import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <h1>{{ title }} works!</h1>

    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = '<%= classify(name) %>';
}
