import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{FormGroup,FormControl,Validators}from"@angular/forms";
import { Produits } from '../app/modele/produits';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private url = "http://localhost:3000/produits";
  constructor(private http:HttpClient) { }
  
  form:FormGroup = new FormGroup({
    id: new FormControl(null),
    nom: new FormControl('',),
    prix_base: new FormControl(''),
    prix_vente: new FormControl(''),
    remise: new FormControl(''),
    unité: new FormControl(''),
    image: new FormControl(''),
    qte_init: new FormControl(''),
    qte_act: new FormControl('')});
    
   
    populateFormUtilisateur(row) {
      this.form.setValue(row);
      console.log(row);
    }
  add(produits){
    return this.http.post<Produits>(this.url, produits);
  }
  delete(id){
    return this.http.delete(`${this.url}/${id}`);
  }
  update(produits){
    return this.http.put(`${this.url}/${produits.id}`, produits);
  }

  getAll() {
    return this.http.get<Produits[]>(this.url);
  }
 

}
