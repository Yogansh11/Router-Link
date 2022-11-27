import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { NavbarComponent } from './navbar/navbar.component';

import { AComponent } from './Assignment1/a/a.component';
import { BComponent } from './Assignment1/b/b.component';
import { Assignment1Component } from './Assignment1/assignment1/assignment1.component';
import { OddComponent } from './Assignment2/odd/odd.component';
import { EvenComponent } from './Assignment2/even/even.component';
import { GamecontrolComponent } from './Assignment2/gamecontrol/gamecontrol.component';
import { HomeComponent } from './home/home.component';
import { ToDoComponent } from './Assignment5/to-do/to-do.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    AComponent,
    BComponent,
    Assignment1Component,
    OddComponent,
    EvenComponent,
    GamecontrolComponent,
    HomeComponent,
    ToDoComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    DragDropModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
