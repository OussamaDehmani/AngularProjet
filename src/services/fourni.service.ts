import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Fournisseurs } from '../app/modele/fournisseurs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FourniService {

  private url = "http://localhost:3000/fournisseurs";
  constructor(private http:HttpClient) { }
  
  form:FormGroup = new FormGroup({
    id: new FormControl(null),
    nom: new FormControl(''),
    Adresse: new FormControl(''),
    ville: new FormControl(''),
    tel_mobile: new FormControl(''),
    tel_fix: new FormControl(''),
    fax: new FormControl(''),
    email_f: new FormControl('')});
    
    populateFormUtilisateur(row) {
      this.form.setValue(row);
      console.log(row);
    }

  add(user){
    return this.http.post<Fournisseurs>(this.url, user);
  }
  delete(id){
    return this.http.delete(`${this.url}/${id}`);
  }
  update(user){
    return this.http.put(`${this.url}/${user.id}`, user);
  }

  getAll() {
    return this.http.get<Fournisseurs[]>(this.url);
  }
}
