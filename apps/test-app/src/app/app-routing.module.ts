import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppBComponent } from './app-b/app-b.component';
import { LibraryComponent } from './library/library.component';

const routes: Routes =[
  { path: 'home', component:HomeComponent},
  { path: 'app-b', component:AppBComponent},
  { path: 'library', component:LibraryComponent}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule,

  ]
})
export class AppRoutingModule { }
export const routingComponents = [AppBComponent,HomeComponent,LibraryComponent]
