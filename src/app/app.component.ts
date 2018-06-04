import { Component } from '@angular/core';

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
