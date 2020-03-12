import { Component, OnInit } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
user=true;
fournisseur=false;
produit=false;
  constructor() { }

  ngOnInit() {
  }
cruduser(){
this.user=true;
this.fournisseur=false;
this.produit=false;
}

crudproduit(){
  this.user=false;
  this.fournisseur=false;
  this.produit=true;
  }

  crudfournisseurs(){
    this.user=false;
    this.fournisseur=true;
    this.produit=false;
    }
}
