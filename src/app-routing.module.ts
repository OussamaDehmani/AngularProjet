import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app/app.component';


const routes: Routes = [
  {
    path: 'add', component: AppComponent,

  },
  {
    path: 'listeuser', component: AppComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
