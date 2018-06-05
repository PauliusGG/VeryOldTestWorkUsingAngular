import { RouterModule, Routes } from "@angular/router";
import { AboutmeComponent } from "./aboutme/aboutme.component";
import { AppComponent } from "./app.component";
import { MainpageComponent } from "./mainpage/mainpage.component";
import { MenuComponent } from "./menu/menu.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { CareerComponent } from "./career/career.component";
import { Error404Component } from "./error404/error404.component";

export const AppRoutes:Routes = [
    {path: 'home', component: MainpageComponent},
    {path: 'coffeelist', component: MenuComponent},
    {path: '404', component: Error404Component},
    {path: 'about', component: AboutmeComponent},
    {path: 'user', loadChildren: './user/user.module#UserModule'},
    {path: 'contacts', component: ContactsComponent},
    {path: 'career', component: CareerComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'}
]
