import { Produits } from '../../modele/produits';
import { ProduitService } from '../../../services/produit.service';
import { HttpClient } from '@angular/common/http';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-addproduit',
  templateUrl: './addproduit.component.html',
  styleUrls: ['./addproduit.component.css']
})
export class AddproduitComponent implements OnInit {
  private produit: Produits = {
  
    nom: "",
    prix_base: 0,
    prix_vente: 0,
    remise: 0,
    unite: "",
    image: "",
    qte_init: 0,
    qte_act: 0,

  }




  constructor( private service: ProduitService,private http :HttpClient) { }
  produits :Produits[] = [];
  formvisible=true;
  addprod=true;
  uprod=false;
  displayedColumns: string[] = ['nom', 'prix_base', 'prix_vente', 'qte_init', 'qte_act',"Action"];
  dataSource = new MatTableDataSource<Produits>(this.produits);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit() {
    this.getprod();
    this.dataSource.paginator = this.paginator;
  }
  getprod(){
  this.service.getAll().subscribe(produits =>this.produits = produits);
  console.log(this.produits)
}

visiblerform(){
  this.formvisible=!this.formvisible;
  this.uprod=false;
  this.addprod=true;
      }

  add(){
    this.service.add(this.produit)
    .subscribe((user)=>{
      this.produits = [user, ...this.produits];
      console.log(this.produit);
    });
  }
  ajouter(){
    this.produit = this.service.form.value;
    this.add();
    this.service.form.reset();
   }
   
   deleteprod(user){
    this.service.delete(user.id).subscribe(()=>{
     
     this.getprod();
    });
   
    }

    onEdit(produit) {
      this.formvisible=false;
      this.uprod=true;
      this.addprod=false;
      this.service.populateFormUtilisateur(produit);
      this.service.update(produit).subscribe(() => {
        
  
       });
    }


editer(){
  this.formvisible=true;
  this.produit = this.service.form.value;
  this.service.update(this.produit)
  .subscribe(user=>{
    this.addprod=true;
    this.uprod=false;
    this.service.form.reset();
    this.getprod();
  });
  
}
}
