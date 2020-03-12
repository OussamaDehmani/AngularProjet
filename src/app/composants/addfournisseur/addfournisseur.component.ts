import { HttpClient } from '@angular/common/http';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Fournisseurs } from 'src/app/modele/fournisseurs';
import { FourniService } from 'src/services/fourni.service';



@Component({
  selector: 'app-addfournisseur',
  templateUrl: './addfournisseur.component.html',
  styleUrls: ['./addfournisseur.component.css']
})
export class AddfournisseurComponent implements OnInit {

  private fourni: Fournisseurs = {
  
    nom: "",
    ville: "",
    Adresse: "",
    tel_fix: "",
    tel_mobile: "",
    fax: "",
    email_f: ""
  
  };


  constructor( private service: FourniService,private http :HttpClient) { }
  fournisseurs :Fournisseurs[] = [];
  formvisible=true;
  addfourni=true;
  upfourni=false;
  displayedColumns: string[] = ['nom', 'adresse', 'tel_fix', 'tel_mobile',"fax","action"];
  dataSource = new MatTableDataSource<Fournisseurs>(this.fournisseurs);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit() {
    this.getfounisseurs();
    this.dataSource.paginator = this.paginator;
  }
  getfounisseurs(){
    this.service.getAll().subscribe(fournisseurs =>this.fournisseurs = fournisseurs);
  }

  add(){
    this.service.add(this.fourni)
    .subscribe((fourni)=>{
      this.fournisseurs = [fourni, ...this.fournisseurs];
      console.log(this.fourni);
    });
  }
  ajouter(){
    this.fourni = this.service.form.value;
    this.add();
    this.service.form.reset();
   }
   
   delefournisseur(user){
    this.service.delete(user.id).subscribe(()=>{
     this.getfounisseurs();
    });
   }

   visiblerform(){
    this.formvisible=!this.formvisible;
    this.upfourni=false;
    this.addfourni=true;
        }
onEdit(produit) {
   this.formvisible=false;
   this.upfourni=true;
   this.addfourni=false;
   this.service.populateFormUtilisateur(produit);
   this.service.update(produit).subscribe(() => {
           });
        }
    
        editer(){
          this.formvisible=true;
          this.fourni = this.service.form.value;
          this.service.update(this.fourni)
          .subscribe(user=>{
            this.addfourni=true;
            this.upfourni=false;
            this.service.form.reset();
            this.getfounisseurs();
          });
          
        }
}

