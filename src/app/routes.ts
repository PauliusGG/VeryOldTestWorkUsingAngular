import { RouterModule, Routes } from "@angular/router";
import { AboutmeComponent } from "./aboutme/aboutme.component";
import { AppComponent } from "./app.component";
import { MainpageComponent } from "./mainpage/mainpage.component";

export const AppRoutes:Routes = [
    {path: 'home', component: MainpageComponent},
    {path: 'aboutme', component: AboutmeComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'}
]
