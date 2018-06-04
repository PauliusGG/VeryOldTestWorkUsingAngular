import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MediaComponent } from './media/media.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { ThreerowComponent } from './threerow/threerow.component'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    MediaComponent,
    ThreerowComponent
  ],
  imports: [
    BrowserModule,
    Angular2FontawesomeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
