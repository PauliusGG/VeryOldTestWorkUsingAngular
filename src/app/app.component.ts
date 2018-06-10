import { Component } from '@angular/core';
import { NavbarComponent } from './nav/navbar.component';


@Component({
  selector: 'app-root',
  template: `
  <navbar></navbar>
  <router-outlet></router-outlet>
  <footerino></footerino>
  `
})
export class AppComponent {
  title = 'app';
}
