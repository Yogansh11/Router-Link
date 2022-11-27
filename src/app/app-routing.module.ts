import { ToDoComponent } from './Assignment5/to-do/to-do.component';
import { GamecontrolComponent } from './Assignment2/gamecontrol/gamecontrol.component';
import { Assignment1Component } from './Assignment1/assignment1/assignment1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  // {path:'', redirectTo:'/Login', pathMatch:'full'},
  {path:'Assignment1', component : Assignment1Component},
  {path:'Assignment2' , component : GamecontrolComponent},
  {path:'Assignment5' , component : ToDoComponent},
  {path:'Home', component:HomeComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
