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
import { RecipesComponent } from './recipes/recipes.component';
import { CareerComponent } from './career/career.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainpageComponent,
    FooterComponent,
    AboutmeComponent,
    Error404Component,
    ContactsComponent,
    RecipesComponent,
    CareerComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    Angular2FontawesomeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
