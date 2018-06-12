import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { AppRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MenuComponent } from './menu/menu.component';
import { CareerComponent } from './career/career.component';
import { ItemService } from './shared/item.service';
import { MenuThumbnailComponent } from './menu/menu-thumbnail.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuDetailsComponent } from './menu/menu-details.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainpageComponent,
    FooterComponent,
    AboutmeComponent,
    Error404Component,
    ContactsComponent,
    MenuComponent,
    CareerComponent,
    MenuThumbnailComponent,
    MenuDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    Angular2FontawesomeModule,
    HttpClientModule
    
  ],
  providers: [
    ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
