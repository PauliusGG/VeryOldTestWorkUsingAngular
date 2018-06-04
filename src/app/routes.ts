import { RouterModule, Routes } from "@angular/router";
import { AboutmeComponent } from "./aboutme/aboutme.component";
import { AppComponent } from "./app.component";
import { MainpageComponent } from "./mainpage/mainpage.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { CareerComponent } from "./career/career.component";
import { Error404Component } from "./error404/error404.component";
import { LoginComponent } from "./login/login.component";

export const AppRoutes:Routes = [
    {path: 'home', component: MainpageComponent},
    {path: 'coffeelist', component: RecipesComponent},
    {path: '404', component: Error404Component},
    {path: 'about', component: AboutmeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'contacts', component: ContactsComponent},
    {path: 'career', component: CareerComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'}
]
