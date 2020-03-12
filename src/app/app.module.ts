import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';

import { AdduserComponent } from './composants/adduser/adduser.component';
import { NavbarComponent } from './composants/navbar/navbar.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import { SidebarComponent } from './composants/sidebar/sidebar.component';
import { AddproduitComponent } from './composants/addproduit/addproduit.component';
import { AddfournisseurComponent } from './composants/addfournisseur/addfournisseur.component';
import { LoginComponent } from './composants/login/login.component';
import { ListProduitComponent } from './composants/list-produit/list-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    AdduserComponent,
    NavbarComponent,
    SidebarComponent,
    AddproduitComponent,
    AddfournisseurComponent,
    LoginComponent,
    ListProduitComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
