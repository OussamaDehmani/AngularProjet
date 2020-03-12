import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app/app.component';
import { LoginComponent } from './app/composants/login/login.component';
import { SidebarComponent } from './app/composants/sidebar/sidebar.component';


const routes: Routes = [
  {
    path: 'add', component: AppComponent,

  },
  {
    path: '/home', component: LoginComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
