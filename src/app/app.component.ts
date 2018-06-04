import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-navbar></app-navbar>
  <app-carousel></app-carousel>
  <media></media>
  <threerow></threerow>
  `
})
export class AppComponent {
  title = 'app';
}
